import React, { Component } from "react";

const style = {
    width: 250
}

class Contact extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <form class="col s12">
                        <h4>Send us a message</h4>
                        <fieldset>
                            <div class="row">
                                <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate" />
                                <label for="first_name">First Name</label>
                                </div>
                                <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Last Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <textarea id="subject" type="text" class="materialize-textarea" />
                                <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <textarea id="message" type="text" class="materialize-textarea" />
                                <label for="message">Message</label>
                                </div>
                            </div>
                            <a class="waves-effect waves-light btn">Submit</a>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;