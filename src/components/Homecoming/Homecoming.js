import React from 'react';
import classes from './Homecoming.module.css';

const homecoming = ( props ) => {

    const days = {
        2021: 13,
        2022: 12,
        2023: 11,
        2024: 9,
        2025: 8,
        2026: 14,
        2027: 13,
        2028: 11,
        2029: 10,
        2030: 9,
        2031: 8,
        2032: 13,
        2033: 12,
        2034: 11,
        2035: 10,
        2036: 8,
        2037: 14,
        2038: 13,
        2039: 12,
        2040: 10
    }

    const year = (new Date().getFullYear() + 1).toString();
    
    let day = null;

    for(let key in days) {
        if(key == year) {
            day = days[key];
        }
    }

    return (
        <div id='Events' className={classes.Homecoming}>
            
            <h4 className={classes.Header}>Homecoming</h4>
            
            <div className={classes.Card}>
                   <div>
                        
                        <span className={classes.Title}><span className={classes.TitleProp}>When:</span> June {day}, {year}</span>
                        <span className={classes.Title}><span className={classes.TitleProp}>Where:</span> Bethany Presbyterian Church, Charles City Co, VA 23030</span>
                        <span className={classes.Title}><span className={classes.TitleProp}>Info: </span>
                            We request that each group
                            brings a family style dish for
                            the potluck style lunch
                        </span>
                        
                    </div>
            </div>  
            
        </div>
    )

}

export default homecoming;