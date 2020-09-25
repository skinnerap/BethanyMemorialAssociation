import React from 'react';
import classes from './Popup.module.css';

const popup = ( props ) => {

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
            <a href="https://www.paypal.com/donate?token=pIB0TV89k3729kOLpjSqJW3h_9WikEdH3wwLc3xVyBQ0rhzSXRZE_CreQ4rGnKPnjU4mggcGmc3px0Uu" targer="_blank" alt="Donate to Bethany Memorial Association"><button>Online</button></a>
            <h4>By Check:</h4>
            <span className={classes.PO}>PO 92 Charles City, VA 23030</span>
        </div>
    )

}

export default popup;