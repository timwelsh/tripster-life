import React, { Component } from 'react';
import tim from '../utils/tim.png';

// const style = {
//     width: "33%"
// }

class About extends Component {

    render() {
        return (
            <div className='container'>
                <div style={{margin:'0 auto', marginTop:"4rem"}}>
                    <div className='row'>
                        <div className="col s12 m6 l3">
                            <div className="card hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={tim} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Timothy Welsh<i className="material-icons right">more_vert</i></span>
                                    <a href="https://github.com/timwelsh" target='_blank'>Github</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Tim Welsh<i className="material-icons right">close</i></span>
                                    <p>Tim conceptualized Tripster and is the group's DM (Database Master). Next trips stirring in me are sailing the Caribbean and going back to Ireland.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src='https://avatars3.githubusercontent.com/u/45245526?s=460&v=4' />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Tom Erickson<i className="material-icons right">more_vert</i></span>
                                    <a href="https://github.com/ericksont11" target='_blank'>Github</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Tom Erickson<i className="material-icons right">close</i></span>
                                    <p>Tom is our resident widget wizard, having created many of the widgets for Tripster Life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src='https://avatars3.githubusercontent.com/u/44719186?s=460&v=4' />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Julie Ragsdale<i className="material-icons right">more_vert</i></span>
                                    <a href="https://github.com/leaf-junkie" target='_blank'>Github</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Julie Ragsdale<i className="material-icons right">close</i></span>
                                    <p>Julie is the lead designer and even created our logo. She is passionate about UX/UI and design and loves houseplants, dogs, and coffee.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src='https://avatars1.githubusercontent.com/u/20049012?s=460&v=4' />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Sherry Carrasco<i className="material-icons right">more_vert</i></span>
                                    <a href="https://github.com/scarrasco27541" target='_blank'>Github</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Sherry Carrasco<i className="material-icons right">close</i></span>
                                    <p>Sherry is our kick-ass project manager as a result of the coding knowledge she has gained through this boot camp course. She is able to estimate the time it takes to complete various tasks. While the developers get excited about implementing new ideas, she keeps our metaphorical hot air balloon tethered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;