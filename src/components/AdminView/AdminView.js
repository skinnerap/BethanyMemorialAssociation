import React, { Component }from 'react';
import classes from './AdminView.module.css';
import Axios from '../../hoc/Axios/Axios';
import PotentialPhoto from '../../containers/PotentialPhoto/PotentialPhoto';

class AdminView extends Component {

    state = {
        potentialPhotos: null
    }

    componentDidMount() {

        const userPass = prompt('Password Required: ');

        if(userPass === 'CharlesCity') {
            Axios.get('/images.json')
            .then(res => {

                let arr = [];

                // Loads all currently unapproved images into an array
                for(let key in res.data) {

                    console.log(key);
                    
                    if(res.data[key].approved === 'false'){
                        arr.push({...res.data[key], id: key});
                    }
                    
                }

                console.log(arr);

                this.setState({potentialPhotos: arr});
            });
        }

        

    }

    approvePhotoHandler = ( photo ) => {

        const updatedPhoto = {...photo};
        updatedPhoto.approved = 'true';
        Axios.put(`/images/${photo.id}.json`, updatedPhoto).then(response => {
            console.log(response);
        })
    
    } 

    deletePhotoHandler = ( photo ) => {

        Axios.delete(`/images/${photo.id}.json`).then(response => {
            console.log(response)
        })

    }

    render() {

        return (
            <div>
                <h1 className={classes.header}>Staging Area</h1>
                {this.state.potentialPhotos === null ? null : this.state.potentialPhotos.map(photo => {
                    return (
                        <PotentialPhoto
                            key={photo.key}
                            url={photo.url}
                            description={photo.description}
                            date={photo.date}
                            notes={photo.notes}
                            username={photo.username}
                            clickedApprove={() => this.approvePhotoHandler(photo)}
                            clickedDelete={() => this.deletePhotoHandler(photo)}
                        />
                    )
                })}
            </div>
        )

    }
        
}

export default AdminView;