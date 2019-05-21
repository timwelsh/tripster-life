import React, { Component } from 'react';
import tim from '../utils/tim.png';

const style = {
    maxWidth:350,
    position:'relative'
}

const cardStyle = {
    borderRadius: 25
}

class About extends Component {

    render() {
        return (
            <div style={{ marginTop:'4rem' }}>
                <h4>Meet the Tripsters</h4>
                <div className='row container'>
                    <div className='col s12 m6'>
                    <div className='card hoverable container' style={style}>
                        <div className='card-image'>
                        <img src={tim} />
                        <span className='card-title'>Tim Welsh</span>
                        </div>
                        <div className='card-content'>
                        <p>Tim conceptualized Tripster and is the group's DM (Database Master).</p>
                        </div>
                        <div className='card-action'>
                        <a href='https://github.com/timwelsh' target='_blank'>Github</a>
                        </div>
                    </div>
                    </div>
                    <div className='col s12 m6'>
                    <div className='card hoverable' style={style}>
                        <div className='card-image'>
                        <img src='https://avatars3.githubusercontent.com/u/45245526?s=460&v=4' />
                        <span className='card-title'>Tom Erickson</span>
                        </div>
                        <div className='card-content'>
                        <p>Tom is our resident widget wizard, having created many of the widgets for Tripster Life.</p>
                        </div>
                        <div className='card-action'>
                        <a href='https://github.com/ericksont11' target='_blank'>Github</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row container'>
                    <div className='col s12 m6'>
                    <div className='card hoverable' style={style}>
                        <div className='card-image'>
                        <img src='https://avatars3.githubusercontent.com/u/44719186?s=460&v=4' />
                        <span className='card-title'>Julie Ragsdale</span>
                        </div>
                        <div className='card-content'>
                        <p>Julie is the lead designer and even created our logo. She is passionate about UX/UI and design and loves houseplants, dogs, and coffee.</p>
                        </div>
                        <div className='card-action'>
                        <a href='https://github.com/leaf-junkie' target='_blank'>Github</a>
                        </div>
                    </div>
                    </div>
                    <div className='col s12 m6'>
                    <div className='card hoverable' style={style}>
                        <div className='card-image'>
                        <img src='https://avatars1.githubusercontent.com/u/20049012?s=460&v=4' />
                        <span className='card-title'>Sherry Carrasco</span>
                        </div>
                        <div className='card-content'>
                        <p>Sherry is our kick-ass project manager. While the developers get excited about implementing new ideas, she keeps our metaphorical hot air balloon tethered.</p>
                        </div>
                        <div className='card-action'>
                        <a href='https://github.com/scarrasco27541' target='_blank'>Github</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;