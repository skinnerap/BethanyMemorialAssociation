import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import axios from '../../hoc/Axios/Axios';
import Axios from 'axios';

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
        },
        info: {
            firstName: null,
            lastName: null,
            email: null,
            number: null,
            message: null
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

    firstNameHandler = (e) => {

        const data = {...this.state.info};

        data.firstName = e.target.value;

        this.setState({info: data});

    }

    messageHandler = (e) => {

        const data = {...this.state.info};

        data.message = e.target.value;

        this.setState({info: data});

    }

    lastNameHandler = (e) => {

        const data = {...this.state.info};

        data.lastName = e.target.value;

        this.setState({info: data});

    }

    emailHandler = (e) => {

        const data = {...this.state.info};

        data.email = e.target.value;

        this.setState({info: data});

    }

    numberHandler = (e) => {

        const data = {...this.state.info};

        data.number = e.target.value;

        this.setState({info: data});

    }

    submitFormHandler = ( event ) => {

        event.preventDefault();

        const data = {
            firstName: this.state.info.firstName,
            lastName: this.state.info.lastName,
            email: this.state.info.email,
            number: this.state.info.number,
            subject: [this.state.info.firstName + ' ' + this.state.info.lastName + ': '],
            message: this.state.info.message
        }

        if(data.firstName === null) {
            alert('You must enter a first name to submit your message.');
            return;
        }

        if(data.lastName === null) {
            alert('You must enter a last name to submit your message.');
            return;
        }

        if(data.email === null) {
            alert('You must enter an e-mail address to submit your message.');
            return;
        }

        if(data.message === null || data.message.length < 10) {
            alert('You must enter a message of at least 10 characters.');
            return;
        }


        for(let key in this.state.selectors) {
            if(this.state.selectors[key].selected) {
                data.subject.push(key + ' ');
            }
        }

        if(data.subject.length < 2) {
            alert('You must choose at least 1 subject ("General Question" if you are not sure)');
            return;
        }

        axios.post('/messages.json', data)
            .then(res => {

                alert(`You're message was sent successfully. We will get back to you as soon as possible!`)
                
                // Send email
                Axios({
                    method: 'post',
                    url: 'http://localhost:8080/api/test/email',
                    data: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                }).then(res => {
                    console.log(res.config.data);
                    document.getElementById('contactForm').reset();
                }).catch(err => {
                    console.log(err);
                })

            }).catch(err => {
                alert(`Sorry, it appears there has been a network error. Please try again later or contact us directly
                        by using our contact information found at the bottom of the website.`)
            });

        

    }

    render() {

        return (
            <div id='Contact' className={classes.ContactForm}>
                <div className={classes.Overlay}>
                    <h4 className={classes.Header}>Contact Us</h4>
                    <div className={classes.Form}>
                    <form id='contactForm'>
                        <div className={classes.UserDetails}>
                            <input onChange={(e) => this.firstNameHandler(e)} type='text' name='firstName' placeholder='First Name *' />
                            <input onChange={(e) => this.lastNameHandler(e)} type='text' name='lastName' placeholder='Last Name *' />
                            <input onChange={(e) => this.emailHandler(e)} type='text' name='email' placeholder='Email Address *' />
                            <input onChange={(e) => this.numberHandler(e)} type='text' name='phone' placeholder='Phone Number *' />
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
                            <textarea onChange={(e) => this.messageHandler(e)} placeholder='Message / Question *' />
                        </div>
                    </form>
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