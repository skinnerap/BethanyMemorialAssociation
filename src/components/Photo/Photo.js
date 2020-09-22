import React from 'react';
import classes from './Photo.module.css';

const photo = ( props ) => {

    return (
        <div className={classes.Photo}>
            <div>
                <img src={props.imageFile} alt={props.imageAlt} />
            </div>
            <div className={classes.PropsContainer}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className={classes.ButtonContainer}>
                    <button onClick={props.clicked}>Open Photos</button>
                    <button className={classes.NewPhotos} onClick={props.openImageSubmission}>Submit New Photos</button>
                </div>   
            </div>
        </div>
    )

}

export default photo;