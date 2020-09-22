import React, { Component } from 'react';
import classes from './Photos.module.css';
import Photo from '../../components/Photo/Photo';
import img from '../../assets/vault/docsFromPatrons/nanceGirls.jpg'
import img2 from '../../assets/images/churchEvent.jpg';
import img3 from '../../assets/images/heroImg.jpg';

class Photos extends Component {

    state = {
        showFamilyHistory: false,
        showHomecoming: false,
        showGrounds: false
    }




    render() {
        return (
            <div className={classes.Photos}>
                <h3>Photos</h3>
                <p>We encourage you to submit photos of the Bethany Memorial grounds, the church, or relavent historic documents
                    such as pamplets or records. All submitted photos will be sent for consideration to the leadership of the
                    association, and on approval, will be showcased here.
                </p>
                <div className={classes.GridLayout}>
                    <Photo
                        clicked={this.openFamilyHistory}
                        title='Family History'
                        description='Photographs and documents relavent to the history of families that 
                        attended Bethany Presbyterian Church.'
                        imageFile={img}
                        imageAlt='Photographs and documents relavent to the history of families that 
                        held membership at Bethany Presbyterian Church.'
                    />
                    <Photo
                        clicked={this.openHomecoming}
                        title='Homecoming'
                        description='Photographs taken at our annual homecoming gathering held on the Bethany Memorial Grounds.'
                        imageFile={img2}
                        imageAlt='Photographs taken at our annual homecoming gathering held on the Bethany Memorial Grounds.'
                    />
                    <Photo
                        clicked={this.openGrounds}
                        title='Cemetery / Church / Grounds'
                        description='All images related to the graves, Bethany Presbyterian Church, and the surrounding grounds.'
                        imageFile={img3}
                        imageAlt='All images related to the graves, Bethany Presbyterian Church, and the surrounding grounds.'
                    />
                </div>
            </div>
        )
    }

}

export default Photos;