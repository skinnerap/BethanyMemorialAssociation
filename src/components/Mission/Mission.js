import React from 'react';
import classes from './Mission.module.css';

const mission = ( props ) => {

    return (
        <div className={classes.Mission}>
            <h2>Our Mission</h2>
            <p>The mission of Bethany Memorial Association is to preserve the historic cemetery and buildings of Bethany 
               Presbyterian Church, located in Charles City County, VA. The Memorial Association also considers requests for
               burials at the cemetery.  To make such a request, please contact <a href='/'>us here</a>.
            </p>
            <p>
               Although the church no longer meets for regular services, the Memorial Association continues to preserve 
               and maintain the grounds of the property. In addition, on the second Sunday of every June, the Memorial 
               Association hosts an annual homecoming event to celebrate the historic, cultural, and familial significance of the 
               buildings and grounds.
            </p>
        </div>
    )

}

export default mission;