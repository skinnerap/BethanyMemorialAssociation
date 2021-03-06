import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../../ui/Backdrop/Backdrop';

const modal = ( props ) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div 
                className={classes.Modal}
                style=
                { 
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                        display: props.show ? 'block' : 'hidden'
                    } 
                }
            >
                {props.children}
            </div>
        </Aux>
        
    )

}

export default modal;