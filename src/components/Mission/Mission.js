import React, { Component } from 'react';
import classes from './Mission.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

class mission extends Component {

    render() {

       return (
            <div className={classes.Mission} onScroll={this.scrolledIntoView}>
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut='fadeOut'>
                    <h2>Mission</h2>
                    <p>
                        The mission of Bethany Memorial Association is to preserve the historic cemetery and buildings of Bethany 
                        Presbyterian Church, located in Charles City County, VA. The Memorial Association also considers requests for
                        burials at the cemetery.  To make such a request, please contact <a href='#Contact'>us here</a>.
                    </p>
                    <p>
                        Although the church no longer meets for regular services, the Memorial Association continues to preserve 
                        and maintain the grounds of the property. In addition, on the second Sunday of every June, the Memorial 
                        Association hosts an annual homecoming event to celebrate the historic, cultural, and familial significance of the 
                        buildings and grounds.
                    </p>
                </ScrollAnimation>
                
            </div>
        )
    }

}

export default mission;