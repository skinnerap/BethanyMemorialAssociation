import React, { Component } from 'react';
import classes from './ContactForm.module.css';

class ContactForm extends Component {

    state = {
        selectors: {
            generalQuestion: {
                selected: false,
                classList: ''
            },
            moreInvolved: {
                selected: false,
                classList: ''
            },
            burialRequest: {
                selected: false,
                classList: ''
            },
            vaGraveStones: {
                selected: false,
                classList: ''
            }
        } 
    }

    clickGeneralQuestionHandler = () => {

        const updatedSelectors = {...this.state.selectors};

        if(this.state.selectors.generalQuestion.selected) {
            updatedSelectors.generalQuestion.selected = false;
            updatedSelectors.generalQuestion.classList = '';
        } else {
            updatedSelectors.generalQuestion.selected = true;
            updatedSelectors.generalQuestion.classList = classes.Selected;
        }

        this.setState({selectors: updatedSelectors});

    }

    clickMoreInvolvedHandler = () => {
        
        const updatedSelectors = {...this.state.selectors};

        if(this.state.selectors.moreInvolved.selected) {
            updatedSelectors.moreInvolved.selected = false;
            updatedSelectors.moreInvolved.classList = '';
        } else {
            updatedSelectors.moreInvolved.selected = true;
            updatedSelectors.moreInvolved.classList = classes.Selected;
        }

        this.setState({selectors: updatedSelectors});

    }

    clickBurialRequestHandler = () => {

        const updatedSelectors = {...this.state.selectors};

        if(this.state.selectors.burialRequest.selected) {
            updatedSelectors.burialRequest.selected = false;
            updatedSelectors.burialRequest.classList = '';
        } else {
            updatedSelectors.burialRequest.selected = true;
            updatedSelectors.burialRequest.classList = classes.Selected;
        }

        this.setState({selectors: updatedSelectors});

    }

    clickVaGraveStonesHandler = () => {
        
        const updatedSelectors = {...this.state.selectors};

        if(this.state.selectors.vaGraveStones.selected) {
            updatedSelectors.vaGraveStones.selected = false;
            updatedSelectors.vaGraveStones.classList = '';
        } else {
            updatedSelectors.vaGraveStones.selected = true;
            updatedSelectors.vaGraveStones.classList = classes.Selected;
        }

        this.setState({selectors: updatedSelectors});

    }

    submitFormHandler = ( event ) => {

        event.preventDefault();

    }

    render() {

        console.log(this.state.selectors);

        return (
            <div className={classes.ContactForm}>
                <div className={classes.Overlay}>
                    <h4 className={classes.Header}>Contact Us</h4>
                    <div className={classes.Form}>
                        <div className={classes.UserDetails}>
                            <input type='text' name='firstName' placeholder='First Name *' />
                            <input type='text' name='lastName' placeholder='Last Name *' />
                            <input type='text' name='email' placeholder='Email Address *' />
                            <input type='text' name='phone' placeholder='Phone Number *' />
                        </div>
                        <div className={classes.UserDetails}>
                            <div className={classes.Grid}>
                                <div>
                                    <input 
                                        type='checkbox' 
                                        name='generalQuestion' 
                                        className={this.state.selectors.generalQuestion.classList} 
                                        onClick={this.clickGeneralQuestionHandler} 
                                        style={
                                            {
                                                width: 'auto',
                                                boxShadow: 'none',
                                            }
                                        }/>
                                </div>
                                <div>
                                    <label className={classes.Label} name='generalQuestion'>I have a general question</label>
                                </div>
                            </div>
                            <div className={classes.Grid}>
                                <div>
                                    <input 
                                        type='checkbox' 
                                        name='moreInvolved' 
                                        className={this.state.selectors.moreInvolved.classList} 
                                        onClick={this.clickMoreInvolvedHandler} 
                                        style={
                                            {
                                                width: 'auto',
                                                boxShadow: 'none',
                                            }
                                        }/>
                                </div>
                                <div>
                                    <label className={classes.Label} name='moreInvolved'>I would like to get more involved</label>
                                </div>
                            </div>
                            <div className={classes.Grid}>
                                <div>
                                    <input 
                                        type='checkbox' 
                                        name='burialRequest' 
                                        className={this.state.selectors.burialRequest.classList} 
                                        onClick={this.clickBurialRequestHandler} 
                                        style={
                                            {
                                                width: 'auto',
                                                boxShadow: 'none',
                                            }
                                        }/>
                                </div>
                                <div>
                                    <label className={classes.Label} name='burialRequest'>I would like to make a burial request</label>
                                </div>
                            </div>
                            <div className={classes.Grid}>
                                <div>
                                    <input 
                                        type='checkbox' 
                                        name='vaGraveStones' 
                                        className={this.state.selectors.vaGraveStones.classList} 
                                        onClick={this.clickVaGraveStonesHandler} 
                                        style={
                                            {
                                                width: 'auto',
                                                boxShadow: 'none',
                                            }
                                        }/>
                                </div>
                                <div>
                                    <label className={classes.Label} name='vaGraveStones'>VirginiaGraveStones.org Help</label>
                                </div>
                            </div>     
                        </div>
                        <div className={classes.U}>
                            <textarea placeholder='Message / Question *' />
                        </div>
                    </div>

                    <div style={{textAlign: 'center'}}>
                        <button className={classes.Submit} type='submit' onClick={(e) => this.submitFormHandler(e)}>Submit</button>
                    </div>
                </div>
            </div>
        )

    }

}

export default ContactForm;