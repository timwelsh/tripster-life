import React, { Component } from "react";

class Benefits extends Component {
    render() {
        return (
            <div className='card hoverable' style={{width:600, padding:20}}>
                <span className='card-title'>Why use Tripster Life?</span>
                <p className='flow-text' style={{lineHeight: "150%"}}>
                Tripster Life is a Google Chrome extension 
                that allows you, the travel junkie, to enter 
                destinations for where you would like to go 
                in the world. The extension lives in new tabs 
                and treats you to a gorgeous new image every 
                day. At Tripster Life, our intention is to 
                instill you with wonder and excitement for the 
                magnificent world that we share. Additional widgets 
                allow you to view the location of the image du jour, 
                current temperature, weather forecast, local time, 
                and other information to get you acquainted with each 
                of your future destinations. Our app also features a 
                countdown to your next trip! For the desk jockey in 
                cubicle world this a nice one minute respite from 
                their daily work to soak in the excitement of their 
                planned trip. 
                </p>
            </div>
        )
    }
}

export default Benefits;