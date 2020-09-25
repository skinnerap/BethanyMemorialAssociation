import axios from 'axios';
import instance from '../../hoc/Axios/Axios';
import React, { Component } from 'react';
import classes from './PhotoForm.module.css';

class PhotoForm extends Component {

    state = {
        file: null,
        username: null,
        description: null,
        date: null,
        notes: null,
        url: null
    }

    updateFileHandler = (userFile) => {

        this.setState({file: userFile})

    }

    updateNameHandler = ( text ) => {

        this.setState({username: text})

    }

    updateDescriptionHandler = ( text ) => {

        this.setState({description: text});

    }

    updateNotesHandler = ( text ) => {

        this.setState({notes: text});

    }

    updateDateHandler = ( userDate ) => {

        this.setState({date: userDate});

    }

    uploadFileHandler = async ( ) => {

        // Post this.state.file + details
        const data = this.state.file;
        const selectedFile = data[0];

       
        try {
            if (selectedFile !== '') {
                // Creating a FormData object
                let fileData = new FormData();
                // Setting the 'image' field and the selected file
                fileData.set(
                    'image',
                    selectedFile,
                    `${Date.now()}-${selectedFile.name}`,
                );

                fileData.append('description', this.state.description);
                fileData.append('date', this.state.date);
                fileData.append('notes', this.state.notes);
                fileData.append('username', this.state.username)
                
                await axios({
                    method: 'post',
                    //url: process.env.REACT_APP_UPLOAD_API_URL,
                    url: 'http://localhost:8080/api/upload',
                    data: fileData,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then(res => {
                    this.setState({url: res.data.fileLocation});
                    const photoUrlInfo = {
                        ...res.data.fileInfo
                    }

                    // Send the url to the other database
                    instance.post('/images.json', photoUrlInfo)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));

                });
            }
        } catch (error) {
              console.log(error);
        }

    }

    render() {

        const showImage = this.state.url === null ? 'none' : 'block';

        return (
            <div className={classes.Container}>
                
                    
                    <input className={classes.userName} type='text' placeholder='Your Name' name='name' onChange={(e) => this.updateNameHandler(e.target.value)} />
                    <label style={{fontSize: '120%'}} name='date'>Approximate Date of Photo: </label>
                    <input className={classes.dateInput} type='date' name='date' onChange={(e) => this.updateDateHandler(e.target.value)} />
                    <textarea placeholder='Who / What is in this photo' name='description' onChange={(e) => this.updateDescriptionHandler(e.target.value)} />
                    <textarea placeholder='Additional Notes (We encourage being as descriptive as possible)' name='notes' onChange={(e) => this.updateNotesHandler(e.target.value)} />
                    <input
                        className={classes.photoInput}
                        id="image"
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={(e) => this.updateFileHandler(e.target.files)}
                    />
                    <button onClick={this.uploadFileHandler}>Submit</button>
                
                <div className={classes.preview} style={{display: showImage}}>
                    <img src={this.state.url} />
                </div>
                
            </div>
        )
    }

}

export default PhotoForm;