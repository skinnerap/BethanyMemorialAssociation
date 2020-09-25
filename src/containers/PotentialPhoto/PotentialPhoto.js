import React from 'react';
import classes from './PotentialPhoto.module.css';

const potentialPhoto = ( props ) => {

        console.log(props);

        return (
            <div className={classes.PotentialPhoto}>
                <ul>
                    <li>Submitted by: {props.username}</li>
                    <li>Approximate Date of Photo: {props.date}</li>
                    <li>Description: {props.description}</li>
                    <li>Notes: {props.notes}</li>
                </ul>
                <div className={classes.imgContainer}>
                    <img src={props.url} alt='This image is currently unapproved, but might be approved by you soon!' />
                </div>
                <button onClick={props.clickedApprove}>Approve this image</button>
                <button onClick={props.clickedDelete}>Delete this submission</button>
            </div>
        )

}

export default potentialPhoto;