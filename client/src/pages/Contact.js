import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  
    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log("Handle submit")
        axios({
          method: 'POST',
          url: 'http://localhost:5000/send',
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
      }
      
    resetForm() {
        document.getElementById('contactForm').reset();
    }

    render() {        
        return (
            <div>
                <div className="row" style={{width:600}}>
                    <form onSubmit={this.handleSubmit.bind(this)} className="col s12" id='contactForm'>
                        <h4>Send us a message</h4>
                        <fieldset>
                            <div className="row">
                                <div className="input-field col s6">
                                <input id="name" type="text" className="validate"/>
                                <label for="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
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
                            <button type="submit" className="btn btn-primary" style={{marginTop: "1rem"}}>Send</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;