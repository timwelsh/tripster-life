import React, { Component } from "react";
import axios from 'axios';

class Contact extends Component {
    sendEmail(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
          method: 'POST',
          url: '/mail/sendmail',
          data: {
            name,
            email,
            message
          }
        }).then((response) => {
          if (response.data.msg === 'success') {
            alert('Message sent.');
        } else if (response.data.msg === 'fail') {
            alert('Message failed to send.');
        }
        });
        document.getElementById('contactForm').reset();
    }

    render() {
        // const { handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='card hoverable' style={{ width:600, padding:20, margin:'0 auto', marginTop:"4rem" }}>
                    <div className="row">
                        <form method='POST' action='send' /* onSubmit={handleSubmit(this.onSubmit)} */ className="col s12" id='contactForm'>
                            <div className='center-align'>
                                <div className='light-blue lighten-1'>
                                    <span className='card-title white-text'><h4>Send us a message</h4></span>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input placeholder="Name" id="name" type="text" className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                    <input placeholder='Email' id="email" type="email" className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <textarea placeholder='Message' id="message" type="text" className="materialize-textarea" />
                                    </div>
                                </div>
                                <div className='center-align'>
                                    <button type="submit" className="btn red accent-1" onClick={this.sendEmail} style={{marginTop: "1rem"}}>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;