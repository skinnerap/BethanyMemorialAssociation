import React from 'react';
import classes from './Popup.module.css';

const popup = ( props ) => {

    // IMPORTANT NOTE: Link to donate is broken, the correct link must be obtained through Anne

    return (
        <div className={classes.Popup}>
            <h3>Donate to Bethany Memorial</h3>
            <p>
                You can donate towards the care and preservation of the graves, 
                and upkeep of the historic buildings. Your tax deducible contribution will directly 
                support the Memorial Association in its mission of grounds 
                keeping and historic preservation. Donations can be made with a 
                check or online at your convenience.
            </p>
            <a href="#" target="_blank" alt="Donate to Bethany Memorial Association"><button>Donate Online</button></a>
            <h4>By Check:</h4>
            <span className={classes.PO}>PO 92 Charles City, VA 23030</span>
        </div>
    )

}

export default popup;