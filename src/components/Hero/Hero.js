import React from 'react';
import classes from './Hero.module.css';

const hero = ( props ) => {

    const year = new Date().getFullYear();

    return (
        <div className={classes.Hero}>
            <div className={classes.Overlay}>
            <div className={classes.HeaderContainer}>
                <h1 className={classes.Header}>
                    Bethany Memorial Association
                    <span className={classes.SubHeader}>1952 - {year}</span>
                </h1>
            </div>
            <div className={classes.HeroBtnContainer}>
                <button className={classes.HeroBtn}>Submit Photos</button>
                <button className={classes.HeroBtn}>Contact Us</button>
            </div>
            </div> 
        </div>
    )

}

export default hero;