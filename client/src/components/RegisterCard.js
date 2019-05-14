import React, { Component } from "react";
import { Card, Row, Col, TextInput, Button } from "react-materialize";

class RegisterCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(event) {}

    render() {
        return (
            <div className="registerCard card">
                <Row>
                    <Col m={6} s={12}>
                        <Card
                        className="register"
                        textClassName="black-text"
                        title="Sign Up"
                        actions={
                                <a href="/">Login</a>
                        }
                        >
                            <Row>
                                <TextInput
                                    firstName 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                                <TextInput 
                                    lastName 
                                    placeholder="Last Name" 
                                    name="lastName" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                            </Row>
                            <Row>
                                <TextInput 
                                    email 
                                    validate 
                                    placeholder="Email" 
                                    name="email" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                                <TextInput 
                                    password 
                                    placeholder="Password" 
                                    name="password" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                            </Row>
                            <Row>
                                <TextInput 
                                    birthDate 
                                    placeholder="DOB (MM/DD/YYYY)" 
                                    name="borthDate" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                            </Row>
                            <Button waves="light" style={{marginRight: '5px', marginBottom: '4rem'}}>
                            Submit
                            </Button>
                            <p>Already have an account?</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RegisterCard;