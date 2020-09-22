import React from 'react';
import classes from './Homecoming.module.css';
import img from '../../assets/images/exampleEvent.jpg';

const homecoming = ( props ) => {

    return (
        <div className={classes.Homecoming}>
            <h4 className={classes.Header}>Homecoming</h4>
            <div className={classes.Card}>
                <div className={classes.ImageContainer}>
                    <img src={img} alt='The Bethany Memorial Association annual homecoming gathering.' />
                </div>
                <div className={classes.TextContainer}>
                    <p>
                        <span className={classes.Title}><span className={classes.TitleProp}>When:</span> June 12th, 2021</span>
                        <span className={classes.Title}><span className={classes.TitleProp}>Where:</span> Bethany Presbyterian Church, Charles City Co, VA 23030</span>
                        <span className={classes.Title}><span className={classes.TitleProp}>Info: </span>
                            We request that each group
                            brings a family style dish for
                            the potluck style lunch
                        </span>
                    </p>
                </div>
                
                
            </div>  
        </div>
    )

}

export default homecoming;