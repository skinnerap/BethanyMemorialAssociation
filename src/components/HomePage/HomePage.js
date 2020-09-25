import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Mission from '../Mission/Mission';
import Photos from '../../containers/Photos/Photos';
import Homecoming from '../Homecoming/Homecoming';
import ContactForm from '../../containers/ContactForm/ContactForm';
import Hero from '../Hero/Hero';

const homePage = ( props ) =>  {

    return (

        <Aux>
            <div id='Home' />
            <Hero />
            <Mission />
            <Photos />
            <Homecoming />
            <ContactForm />
        </Aux>
    
    )

}

export default homePage;