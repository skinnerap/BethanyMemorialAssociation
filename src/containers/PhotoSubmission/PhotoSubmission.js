import React, { Component } from 'react';
import classes from './PhotoSubmission.module.css';
import PhotoForm from '../PhotoForm/PhotoForm';

class PhotoSubmission extends Component {

    state = {

    }

    render() {

        return (

            <div id='PhotoSubmission' className={classes.PhotoSubmission}>
                <h1>Submit Photos</h1>
                <p>
                    We thank you for taking the time to contribute to the digital documentation of the historic 
                    Bethany Memorial Association. Please take a moment to fill out the accompanying form when
                    submitting a new photo or document, which greatly improves the quality of our records. The
                    following outlines the general guidelines of new submissions:
                </p>

                <div className={classes.UL}>
                    <ul>
                        <li>
                            Uploaded files must be of an image type (E.g. - '.png', '.jpg', '.jpeg', '.gif', etc)
                        </li>
                        <li>
                            The informational form must be filled out to complete a new submission
                        </li>
                        <li>
                            We strongly encourage unique submissions. Please take a moment to check out our current
                            digital records before making a new submission.
                        </li>
                    </ul>
                    <PhotoForm />
                </div>
            </div>

        )

    }

}

export default PhotoSubmission;