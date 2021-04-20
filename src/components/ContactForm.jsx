import React, { Component } from 'react';
import $ from 'jquery';

class ContactForm extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            validationMsg: ''
        }
    }
    

    sendMail = evt => {
        
        let email = $('#contact-email').val();
        let message = $('#contact-message').val();
        let emialErr = '', messageErr = '';

        if(!(email.length >= 5 && email.includes('@') && email.includes('.'))){
            if(email != ''){
                evt.preventDefault();
                emialErr = 'Email field is invalid';
            }else{
                emialErr = 'Email field is required';
            }     
        }

        if(message.length <= 8){
            if(message != ''){
                evt.preventDefault();
                messageErr = 'Message field is invalid';
            }else{
                messageErr = 'Message field is required';
            }                 
        }

        if(messageErr == '' & emialErr == ''){
            $('.error-message').hide();
        }else{
            let errMsg = (messageErr != '')
                            ?(emialErr != '')
                                ?messageErr + ' & ' + emialErr
                                :messageErr
                            :(emialErr != '')
                                ?emialErr
                                :'';

            if(!errMsg){
                $('.error-message').hide();
            }else{
                this.setState({validationMsg: errMsg});
                $('.error-message').show();
            }
            
        }
    }

    resetMail = evt => {
        evt.preventDefault();
        document.querySelector(".contact-form").reset();
    }

    render() { 
        return ( 
            <>
                <form className="contact-form" method="post" action="https://formspree.io/f/xeqvolpy">
                    <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                            <input type="text" name="name" id="contact-name" placeholder="Name" required={true}/>
                        </div>
                        <div className="col-6 col-12-small">
                            <input type="email" name="email" id="contact-email" placeholder="Email" required={true}/>
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="contact-message" placeholder="Message" rows="4" required={true}></textarea>
                        </div>
                        <div className="col-12">
                            <div className="error-message" >{this.state.validationMsg}</div>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" className="style1" value="Send" onClick={evt => this.sendMail(evt)} /></li>
                                <li><input type="reset" className="style2" value="Reset" onClick={evt => this.resetMail(evt)} /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </>
         );
    }
}
 
export default ContactForm;