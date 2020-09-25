import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Toolbar/Toolbar';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import classes from './Layout.module.css';
import Context from '../../components/context/context';
import Modal from '../../components/Modal/Modal';
import Popup from '../../components/Popup/Popup';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    state = {
        openDonateModal: false,
        openSidedrawer: false
    }

    showSidedrawerHandler = () => {
        this.setState({openSidedrawer: true});
    }

    hideSidedrawerHandler = () => { 
        this.setState({openSidedrawer: false});
    }

    showDonateModalHandler = () => {
        this.setState({openDonateModal: true});
    }

    hideDonateModalHandler = () => {
        this.setState({openDonateModal: false});
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.showSidedrawerHandler} clickedDonate={this.showDonateModalHandler} />
                <Sidedrawer opened={this.state.openSidedrawer} clicked={this.hideSidedrawerHandler} />
                <Modal show={this.state.openDonateModal} clicked={this.hideDonateModalHandler}>
                    <Popup />
                </Modal> 
                <Context.Provider>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Context.Provider>
                <Footer />
            </Aux>
        )
    }

}

export default Layout;