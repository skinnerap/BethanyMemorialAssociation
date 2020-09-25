import React from 'react';
import classes from './Graves.module.css';
import img from '../../assets/images/official/grounds.jpg'
import img1 from '../../assets/images/official/grounds1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const graves = ( ) => {

    return (
        <div id='Graves' className={classes.Graves}>
            <h1>Bethany Memorial Cemetery</h1>
            <p>The Bethany Memorial Cemetery sits in beautiful Charles City Co, Virginia adjacent to
                Bethany Presbyterian Church. The grounds are managed by our association, in which
                we take great pride in it's conservation. While the church is no longer operational,
                the cemetery continues to accept new requests for burial plots. To make such a request,
                please do so by clicking the button below or by contacting one of the following Burial 
                Committee members:
            </p>
            <ul>
                <li> Karen Goodloe – 804-338-9186</li>
                <li> Richard Crom – 804-937-9856</li>
                <li> Warren Haupt – 804-426-8661</li>
            </ul>

            <Link to='/#Contact'><button>Make a burial request</button></Link>

            <h2>View Gravestones Online</h2>
            <p>To view the graves at Bethany Presbyterian Church please click the button below for a list. The list is 
                partial and  currently being updated. If you would be interested in contributing towards the 
                updating of this list please contact us and we wil lget back in touch as soon as possible.
            </p>
            <a href='https://virginiagravestones.org/cemetery.php?cemID=2728' target='_blank'><button>View Graves</button></a>
            <Link to='/#Contact'><button className={classes.Contribute}>Contribute to Graves</button></Link>
            <img src={img} />
            <img src={img1} />
        </div>
    )

}

export default graves;