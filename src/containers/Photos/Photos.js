import React, { Component } from 'react';
import classes from './Photos.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import Photo from '../../components/Photo/Photo';
import img from '../../assets/images/official/hero1.jpg';
import img2 from '../../assets/images/official/homecoming.jpg';
import img3 from '../../assets/images/official/grounds.jpg';

class Photos extends Component {

    state = {
        showFamilyHistory: false,
        showHomecoming: false,
        showGrounds: false
    }

    
    render() {
        return (
            <div id='Photos' className={classes.Photos}>
                <h3>Photos</h3>
                <p>We encourage you to submit photos of the Bethany Memorial grounds, the church, or relavent historic documents
                    such as pamplets or records. All submitted photos will be sent for consideration to the leadership of the
                    association, and on approval, will be showcased here.
                </p>
                <Link to='/photos#PhotoLink'><button>View Photos</button></Link>
                <Link to='/submission#PhotoSubmission'><button className={classes.Margin}>Submit New Photos</button></Link>
            </div>
        )
    }

}

export default Photos;