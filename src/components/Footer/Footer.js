import React from 'react';
import classes from './Footer.module.css';
import emailLogo from '../../assets/images/email.png';
import phoneLogo from '../../assets/images/phone.png';
import locationLogo from '../../assets/images/location.png';

const footer = ( props ) => {

    return (
        <div className={classes.Footer}>
            <div className={classes.ULcontainer}>
                <ul className={classes.UL}>
                    <li>
                        <a href='/' alt='Home Link'>Home</a>
                    </li>
                    <li>
                        <a href='/' alt='Home Link'>Photos</a>
                    </li>
                    <li>
                        <a href='/' alt='Home Link'>Events</a>
                    </li>
                    <li>
                        <a href='/' alt='Home Link'>Graves</a>
                    </li>
                    <li>
                        <a href='/' alt='Home Link'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.RightProp}><img src={emailLogo} alt='Email Address of Bethany Memorial Association' /><span>BethanyMemorialAssociation@gmail.com</span></div>
                <div className={classes.RightProp}><img src={phoneLogo} alt='Phone Number of Bethany Memorial Association' /><span>(804) 829-2619</span></div>
                <div className={classes.RightProp}><img src={locationLogo} alt='Location of Bethany Memorial Association' /><span>8101 Adkins Rd, Charles City, VA 23030</span></div>
            </div>
            <div style={{verticalAlign: 'middle', alignSelf: 'center', fontSize: '80%', color: '#333ddd'}}>
                <a href='https://github.com/skinnerap' target='_blank' rel="noopener noreferrer">Web Applications by Alexander Skinner</a>
            </div>
        </div>
    )

}

export default footer;