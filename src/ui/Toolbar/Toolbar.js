import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

class ToolBar extends Component {

    state = {
        showOverlay: false
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight - 100;
    }
      
    componentDidMount() {
        if(window.location.pathname === '/') {
            document.addEventListener('scroll', this.trackScrolling);
        } else {
            this.setState({showOverlay: true})
        }
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
    trackScrolling = () => {
        const wrappedElement = document.getElementById('header');
        if (this.isBottom(wrappedElement)) {
          this.setState({showOverlay: true})
          document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    render() {

        let classList = [classes.Toolbar];

        if(this.state.showOverlay) {
            classList.push(classes.ToolbarOverlay)
        }

        return (
            <div className={classList.join(' ')}>
                <div className={classes.title}>Preserving the Historic Bethany Memorial Grounds</div>
                <div>
                    <nav className={classes.nav + ' ' + classes.desktopOnly}>
                        <Link to='/#Home'>Home</Link>
                        <Link to='/#Photos' exact>Photos</Link>
                        <Link to='/#Events' alt='Events'>Events</Link>
                        <Link to='/Graves#Graves' alt='Graves'>Graves</Link>
                        <Link to='/#Contact' alt='Contact'>Contact</Link>
                    </nav>
                </div>
                <div>
                    <button onClick={this.props.clickedDonate} className={classes.donateBtn}>GIVE</button>
                </div>
                <div className={classes.menuBtn + ' ' + classes.mobileOnly} onClick={this.props.clicked}>≡</div>
            </div>
        )
    }
    
}

export default ToolBar;