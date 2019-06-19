import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card hoverable' style={{ width:'50vw', padding:20, margin:'0 auto', marginTop:'10vh' }}>
                <div className='center-align'>
                    <div className='light-blue lighten-1' style={{ margin:0, padding:10 }}>
                    <span className='card-title white-text'><h4>Why use Tripster Life?</h4></span>
                    </div>
                </div>
                    <h6 style={{lineHeight: '150%'}}>
                    Tripster Life is a Google Chrome extension 
                    that allows you, the travel enthusiast, to 
                    view gorgeous images from select destinations 
                    across the world. The extension lives in new 
                    tabs and treats you to a gorgeous new image 
                    every day. At Tripster Life, our intention is 
                    to instill you with wonder and excitement for 
                    the magnificent world that we share. Additional 
                    widgets allow you to view the location of the 
                    image du jour, current temperature, weather forecast, 
                    local time, and other information to get you acquainted 
                    with each of your future destinations. Our app also 
                    features a countdown to your next trip! For the desk 
                    jockey in cubicle world this a nice one minute respite 
                    from their daily work to soak in the excitement of their 
                    planned trip. 
                    </h6>
                </div>
            </div>
        )
    }
}

export default Features;