import React from 'react';
import classes from './Toolbar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const toolBar = ( props ) => {

    return (
        <div className={classes.Toolbar + ' ' + classes.ToolbarOverlay}>
            <div className={classes.title}>Preserving the Historic Bethany Memorial Grounds</div>
            <div>
                <nav className={classes.nav + ' ' + classes.desktopOnly}>
                    <Link to='/#Home'>Home</Link>
                    <Link to='/#Photos' exact>Photos</Link>
                    <Link to='/#Events' alt='Events'>Events</Link>
                    <Link to='/Graves#Graves' alt='Graves'>Graves</Link>
                    <Link to='/#Contact' alt='Contact'>Contact</Link>
                </nav>
            </div>
            <div>
                <button onClick={props.clickedDonate} className={classes.donateBtn}>GIVE</button>
            </div>
            <div className={classes.menuBtn + ' ' + classes.mobileOnly} onClick={props.clicked}>≡</div>
        </div>
    )
}

export default toolBar;