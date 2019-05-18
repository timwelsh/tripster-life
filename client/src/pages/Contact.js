import React, { Component } from "react";

class Contact extends Component {
    render() {
        // const { handleSubmit } = this.props;
        return (
            <div>
                <div className="row" style={{ width:600, marginTop:"8rem" }}>
                    <form method='POST' action='send' /* onSubmit={handleSubmit(this.onSubmit)} */ className="col s12" id='contactForm'>
                        <h4>Send us a message</h4>
                        <fieldset>
                            <div className="row">
                                <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
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
                                <textarea id="subject" type="text" className="materialize-textarea" />
                                <label for="subject">Subject</label>
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