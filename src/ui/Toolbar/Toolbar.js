import React from 'react';
import classes from './Toolbar.module.css';

const toolBar = ( props ) => {

    return (
        <div className={classes.Toolbar + ' ' + classes.ToolbarOverlay}>
            <div className={classes.title}>Preserving the Historic Bethany Memorial Grounds</div>
            <div>
                <nav className={classes.nav + ' ' + classes.desktopOnly}>
                    <a href='/' alt='Home'>Home</a>
                    <a href='/' alt='Home'>Photos</a>
                    <a href='/' alt='Home'>Events</a>
                    <a href='/' alt='Home'>Graves</a>
                    <a href='/' alt='Home'>Contact</a>
                </nav>
            </div>
            <div>
                <button className={classes.donateBtn}>GIVE</button>
            </div>
            <div className={classes.menuBtn + ' ' + classes.mobileOnly} onClick={props.clicked}>≡</div>
        </div>
    )
}

export default toolBar;