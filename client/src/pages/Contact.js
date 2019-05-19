import React, { Component } from "react";
import axios from 'axios';

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    axios({
      method: 'POST',
      url: '/contact',
      data: {
        name,
        email,
        message
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert('Message sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
    // mail().catch(console.error);
    resetForm();
}

function resetForm() {
    document.getElementById('contactForm').reset();
}


class Contact extends Component {
    render() {
        // const { handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='card hoverable' style={{ width:600, padding:20, marginTop:"8rem" }}>
                    <div className="row">
                        <form method='POST' action='send' /* onSubmit={handleSubmit(this.onSubmit)} */ className="col s12" id='contactForm'>
                            <span className='card-title'>Send us a message</span>
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" />
                                    <label for="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                    <input id="email" type="email" className="validate" />
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <textarea id="message" type="text" className="materialize-textarea" />
                                    <label for="message">Message</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={sendEmail} style={{marginTop: "1rem"}}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;