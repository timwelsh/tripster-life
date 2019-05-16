import React, { Component } from "react";
import tim from "../utils/tim.png";

const style = {
    width: "33%"
}

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
                        <div className="card-content">
                        <p>Tim conceptualized Tripster and is the group's DM (Database Master).</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/timwelsh">Github</a>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m7" style={style}>
                    <div className="card hoverable">
                        <div className="card-image">
                        <img src="https://avatars3.githubusercontent.com/u/45245526?s=460&v=4" />
                        <span className="card-title">Tom Erickson</span>
                        </div>
                        <div className="card-content">
                        <p>Tom is our resident widget wizard, having created many of the widgets for Tripster Life.</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/ericksont11">Github</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m7" style={style}>
                    <div className="card hoverable">
                        <div className="card-image">
                        <img src="https://avatars3.githubusercontent.com/u/44719186?s=460&v=4" />
                        <span className="card-title">Julie Ragsdale</span>
                        </div>
                        <div className="card-content">
                        <p>Julie is the lead designer and even created our logo. She is passionate about UX/UI and design and loves houseplants, dogs, and coffee.</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/leaf-junkie">Github</a>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m7" style={style}>
                    <div className="card hoverable">
                        <div className="card-image">
                        <img src="https://avatars1.githubusercontent.com/u/20049012?s=460&v=4" />
                        <span className="card-title">Sherry Carrasco</span>
                        </div>
                        <div className="card-content">
                        <p>Sherry is our kick-ass project manager. While the developers get excited about implementing new ideas, she keeps our metaphorical hot air balloon tethered.</p>
                        </div>
                        <div className="card-action">
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