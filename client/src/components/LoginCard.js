import React, { Component } from "react";
import { Card, Row, Col, TextInput, Button } from "react-materialize";

class LoginCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(event) {}

    render() {
        return (
            <div className="loginCard card">
                <Row>
                    <Col m={6} s={12}>
                        <Card
                        className="login"
                        textClassName="black-text"
                        title="Login"
                        actions={[
                            <a href="/signup">Sign Up</a>
                        ]}
                        >
                            <Row>
                                <TextInput 
                                    email 
                                    validate 
                                    placeholder="Email" 
                                    name="email" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>
                            </Row>
                            <Row>
                                <TextInput 
                                    password 
                                    placeholder="Password" 
                                    name="password" 
                                    onChange={this.handleChange} 
                                >
                                </TextInput>                            
                            </Row>
                            <Button waves="light" style={{marginRight: '5px', marginBottom: '4rem'}}>
                            Login
                            </Button>
                            <p>Don't have an account?</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginCard;