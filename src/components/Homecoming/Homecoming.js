import React from 'react';
import classes from './Homecoming.module.css';

const homecoming = ( props ) => {

    return (
        <div id='Events' className={classes.Homecoming}>
            
            <h4 className={classes.Header}>Homecoming</h4>
            
            <div className={classes.Card}>
               
                   <div>
                        <span className={classes.Title}><span className={classes.TitleProp}>When:</span> June 13th, 2021</span>
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