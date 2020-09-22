import React, { Component }  from 'react';
import classes from './HomeView.module.css';
import Hero from '../../components/Hero/Hero';

class HomeView extends Component {

    state = {
        showDonationView: false,
        showGravesView: false
    }

    openDonationViewHandler = () => {
        this.setState({showDonationView: true});
    }

    hideDonationViewHandler = () => {
        this.setState({showDonationView: false});
    }

    openGravesViewHandler = () => {
        this.setState({showGravesView: true});
    }

    hideGravesViewHandler = () => {
        this.setState({showGravesView: false});
    }

    render() {
        return (
            <Hero />
        )
    }

}

export default HomeView;