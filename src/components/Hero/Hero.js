import React from 'react';
import classes from './Hero.module.css';
import { HashLink as Link } from 'react-router-hash-link';

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
                <Link to='/submission#PhotoSubmission'><button className={classes.HeroBtn}>Submit Photos</button></Link>
                <Link to='/#Contact'><button className={classes.HeroBtn}>Contact Us</button></Link>
            </div>
            </div> 
        </div>
    )

}

export default hero;