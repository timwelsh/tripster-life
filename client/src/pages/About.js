import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Row, Col, Card, CardTitle} from "react-materialize";

class About extends Component {
    render() {
        return (
            <div>
                <h2 style={{color:"#222"}}>About</h2>
                <Row>
                    <Col m={6} s={12}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://avatars0.githubusercontent.com/u/10411088?s=460&v=4" />
                            <span className="card-title">Tim Welsh</span>
                        </div>
                        <div className="card-content">
                            <p>About Tim... Tim conceptualized Tripster and ...</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/timwelsh" target="_blank">Github</a>
                        </div>
                    </div>
                    </Col>
                    <Col m={6} s={12}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://avatars3.githubusercontent.com/u/45245526?s=460&v=4" />
                            <span className="card-title">Tom Erickson</span>
                        </div>
                        <div className="card-content">
                            <p>About Tom... Tom is the widget wizard of the project.</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/ericksont11" target="_blank">Github</a>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col m={6} s={12}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://avatars3.githubusercontent.com/u/44719186?s=460&v=4" />
                            <span className="card-title">Julie Ragsdale</span>
                        </div>
                        <div className="card-content">
                            <p>Julie is a web developer with a passion for design and a love for houseplants, coffee, and dogs. She designed the Tripster Life logo and ...</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/leaf-junkie" target="_blank">Github</a>
                        </div>
                    </div>
                    </Col>
                    <Col m={6} s={12}>
                    <div className="card">
                        <div className="card-image">
                            <img  src="https://avatars1.githubusercontent.com/u/20049012?s=460&v=4"/>
                            <span className="card-title">Sherry Carrasco</span>
                        </div>
                        <div className="card-content">
                            <p>About Sherry... Sherry is our kickass Project Manager.</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/scarrasco27541" target="_blank">Github</a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;
