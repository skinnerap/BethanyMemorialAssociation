require('dotenv').config();


const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 8080;
const multer = require('multer');

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
    },
});

const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => 
    res.send('File upload API ready for use'));


app.post('/api/test/email', (req, res) => {

    console.log(req.body);

    const subject = req.body.subject.join(', ');

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GACC,
        pass: process.env.GPASS
    }
    });

    var mailOptions = {
    from: process.env.GACC,
    to: 'bethanymemorialassociation@gmail.com',
    subject: subject,
    text: `${req.body.firstName} ${req.body.lastName}: ${req.body.email} (${req.body.number}) ------------------------- ${req.body.message.toString()}`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    res.send(req.body);
})



app.post('/api/upload', uploader.single('image'), async (req, res, next) => {

    console.log(req.file);
    console.log(req.body.description.toString());

    try {
      if (!req.file) {
        res.status(400).send('Error, could not upload file');
        return;
      }
  
      // Create new blob in the bucket referencing the file
      const blob = bucket.file(req.file.originalname);
  
      // Create writable stream and specifying file mimetype
      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
          metadata: {
            'description': req.body.description.toString(),
            'date': req.body.date.toString(),
            'notes': req.body.notes.toString(),
            'approved': 'false'
          }
        },
      });
  
      blobWriter.on('error', (err) => next(err));
  
      blobWriter.on('finish', () => {
        // Assembling public URL for accessing the file via HTTP
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`;
  
        console.log(publicUrl);

        const info = {
            'url': publicUrl,
            'username': req.body.username.toString(),
            'description': req.body.description.toString(),
            'date': req.body.date.toString(),
            'notes': req.body.notes.toString(),
            'approved': 'false',
            'key': encodeURI(blob.name).toString()
        }
        
        // Return the file name and its public URL
        res
          .status(200)
          .send({ fileInfo: info, fileLocation: publicUrl });
      });
  
      // When there is no more data to be consumed from the stream
      blobWriter.end(req.file.buffer);

    } catch (error) {
      res.status(400).send(`Error, could not upload file: ${error}`);
      return;
    }

});

app.listen(port, () => 
    console.log(`File uploader API listening on port ${port}`));