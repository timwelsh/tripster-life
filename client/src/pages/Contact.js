import React, { Component } from "react";

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
                                <button type="submit" className="btn btn-primary" style={{marginTop: "1rem"}}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;