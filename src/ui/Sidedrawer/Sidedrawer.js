import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Sidedrawer.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const Sidedrawer = ( props ) => {

    let classList = [classes.Sidedrawer, classes.Close];

    if(props.opened) classList = [classes.Sidedrawer, classes.Open];

    return (
        <Aux>
            <Backdrop show={props.opened} clicked={props.clicked} />
            <div className={classList.join(' ')}>
                <span className={classes.Header}>Bethany Memorial Association</span>
                <nav>
                    <Link to='/#Home' className={classes.Link} onClick={props.clicked}>Home</Link>
                    <Link to='/#Photos' className={classes.Link} onClick={props.clicked}>Photos</Link>
                    <Link to='/#Events' className={classes.Link} onClick={props.clicked}>Events</Link>
                    <Link to='/graves#Graves' className={classes.Link} onClick={props.clicked}>Graves</Link>
                    <Link to='/#Contact' className={classes.Link} onClick={props.clicked}>Contact</Link>
                </nav>
            </div>
        </Aux>
    )

}

export default Sidedrawer;