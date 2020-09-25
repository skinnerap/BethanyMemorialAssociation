import React from 'react';
import classes from './Footer.module.css';
import emailLogo from '../../assets/images/email.png';
import phoneLogo from '../../assets/images/phone.png';
import locationLogo from '../../assets/images/location.png';
import { HashLink as Link } from 'react-router-hash-link';

const footer = ( props ) => {

    return (
        <div className={classes.Footer}>
            <div className={classes.ULcontainer}>
                <ul className={classes.UL}>
                    <li>
                        <Link to='/#Home' alt='Home Link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/#Photos' alt='View and Submit photos'>Photos</Link>
                    </li>
                    <li>
                        <Link to='/#Events' alt='Homecoming Information'>Events</Link>
                    </li>
                    <li>
                        <Link to='/graves#Graves' alt='Info about Cemetery'>Graves</Link>
                    </li>
                    <li>
                        <Link to='/#Contact' alt='Contact Us'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.RightProp}><img src={emailLogo} alt='Email Address of Bethany Memorial Association' /><span><a href='mailto:BethanyMemorialAssociation@gmail.com'>BethanyMemorialAssociation@gmail.com</a></span></div>
                <div className={classes.RightProp}><img src={phoneLogo} alt='Phone Number of Bethany Memorial Association' /><span><a href='tel:8048292619'>(804) 829-2619</a></span></div>
                <div className={classes.RightProp}><img src={locationLogo} alt='Location of Bethany Memorial Association' /><span><a href='https://goo.gl/maps/D37TYsffECj5HFCZA'>8101 Adkins Rd, Charles City, VA 23030</a></span></div>
            </div>
            <div className={classes.Alex} style={{verticalAlign: 'middle', alignSelf: 'center', fontSize: '80%', color: '#333ddd'}}>
                <a href='https://github.com/skinnerap' target='_blank' rel="noopener noreferrer">Web Applications by Alexander Skinner</a>
            </div>
        </div>
    )

}

export default footer;