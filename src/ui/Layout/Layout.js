import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Toolbar/Toolbar';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import classes from './Layout.module.css';
import Hero from '../../components/Hero/Hero';

class Layout extends Component {

    state = {
        openSidedrawer: false
    }

    showSidedrawerHandler = () => {
        this.setState({openSidedrawer: true});
    }

    hideSidedrawerHandler = () => {
        this.setState({openSidedrawer: false});
    }

    render() {
        return (
            <Aux>
                <Hero />
                <Toolbar clicked={this.showSidedrawerHandler} />
                <Sidedrawer opened={this.state.openSidedrawer} clicked={this.hideSidedrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

export default Layout;