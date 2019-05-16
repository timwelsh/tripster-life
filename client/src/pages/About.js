import React, { Component } from "react";
import tim from "../utils/tim.png";
class About extends Component {

    render() {
        return (
            <div>
                <h4>Meet the Tripsters</h4>
                <div class="row">
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src={tim} />
                        <span class="card-title">Tim Welsh</span>
                        </div>
                        <div class="card-content">
                        <p>about...</p>
                        </div>
                        <div class="card-action">
                        <a href="https://github.com/timwelsh">Github</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src="https://avatars3.githubusercontent.com/u/45245526?s=460&v=4" />
                        <span class="card-title">Tom Erickson</span>
                        </div>
                        <div class="card-content">
                        <p>about...</p>
                        </div>
                        <div class="card-action">
                        <a href="https://github.com/ericksont11">Github</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src="https://avatars3.githubusercontent.com/u/44719186?s=460&v=4" />
                        <span class="card-title">Julie Ragsdale</span>
                        </div>
                        <div class="card-content">
                        <p>about...</p>
                        </div>
                        <div class="card-action">
                        <a href="#">Github</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src="https://avatars1.githubusercontent.com/u/20049012?s=460&v=4" />
                        <span class="card-title">Sherry Carrasco</span>
                        </div>
                        <div class="card-content">
                        <p>about...</p>
                        </div>
                        <div class="card-action">
                        <a href="https://github.com/scarrasco27541">Github</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;