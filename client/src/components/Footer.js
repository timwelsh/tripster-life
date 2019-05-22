import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='row light-blue darken-1' style={{
                position:'fixed', 
                width:'100vw', 
                height:125, 
                bottom:0,
                marginBottom:0,
                color:'#fff', 
                zIndex:20
            }}>
                <div className='container'>
                    <div className='col center-align'> 
                        <p>Tripster ( / trĭp · stɜr / ):</p>
                        <p>A traveler who likes visiting places that are off the beaten path. At Tripster Life, our mission is to instill you with wonder and excitement for the magnificent world that we share.</p>
                        <p>© 2019 Copyright</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;