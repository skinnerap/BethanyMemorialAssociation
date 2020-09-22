import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Sidedrawer.module.css';

const Sidedrawer = ( props ) => {

    let classList = [classes.Sidedrawer, classes.Close];

    if(props.opened) classList = [classes.Sidedrawer, classes.Open];

    return (
        <Aux>
            <Backdrop show={props.opened} clicked={props.clicked} />
            <div className={classList.join(' ')}>
                <span>Bethany Memorial Association</span>
                <nav>
                    <a href='/' alt='Home'>Home</a>
                    <a href='/' alt='Home'>Photos</a>
                    <a href='/' alt='Home'>Events</a>
                    <a href='/' alt='Home'>Graves</a>
                    <a href='/' alt='Home'>Contact</a>
                </nav>
            </div>
        </Aux>
    )

}

export default Sidedrawer;