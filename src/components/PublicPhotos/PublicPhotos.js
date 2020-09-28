import React, { Component } from 'react';
import classes from './PublicPhotos.module.css';
import Axios from '../../hoc/Axios/Axios';
import { HashLink as Link } from 'react-router-hash-link';

class PublicPhotos extends Component {

    state = {
        photos: null
    }

    componentDidMount = () => {

        Axios.get('/images.json').then(res=> {
            console.log(res.data);

            let photoArray = [];

            for(let key in res.data) {

                if(res.data[key].approved === 'true') {
                    photoArray.push(res.data[key]);
                }

            }

            console.log(photoArray)
            this.setState({photos: photoArray})
        })

    }

    render() {

        

        return (
            <div id='PhotoLink' className={classes.Photos}>

                <h1>Photos</h1>

                <p className={classes.PhotosP}>Our digital collection of photos is growing rapidly, thanks to contributions from all of our 
                    wonderful members. If you have photographs or scanned documents that you wish to upload
                    please do so by clicking the button below.</p>

                <Link to='/submission'><button>Submit New Photo</button> </Link>


                {this.state.photos === null ? null : this.state.photos.map(photo => {
                    return (
                        <div className={classes.PublicPhotos}>
                            <a href={photo.url} target='_blank' rel="noopener noreferrer" alt='link to full size image'><img key={photo.key} src={photo.url} alt={photo.description} /></a>
                            <div className={classes.Info}>
                                <p>Submitted by: {photo.username}</p>
                                <p>Approximate date of Photo: {photo.date}</p>
                                <p>Description: {photo.description}</p>
                            </div>
                            <p className={classes.Notes}>Notes: {photo.notes}</p>
                        </div>
                    )
                })}


            </div>
        )
    }    

}

export default PublicPhotos;