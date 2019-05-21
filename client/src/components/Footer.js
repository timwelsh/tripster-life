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
            }}>
                <div>
                    <div className='col s3 m3 l3'>
                        <p>Tripstir</p>
                        <p>
                            At Tripster Life, our intention is to instill 
                            you with wonder and excitement for the magnificent 
                            world that we share. Tripster Life is a Google 
                            Chrome extension catered towards traveling.
                        </p>
                    </div>
                    <div className='col s3 m3 l3 offset-s1 offset-m1 offset-l1'>
                        <div className='row' style={{marginBottom:0}}>
                            <p>Our Team</p>
                        </div>
                        <div className='row' style={{marginTop:0}}>
                            <div className='col'>
                                <p><a href='https://github.com/timwelsh' style={{color:'#fff'}}><i class="fab fa-github"></i> Tim Welsh</a></p>
                                <p><a href='https://github.com/ericksont11' style={{color:'#fff'}}>Tom Erickson</a></p>
                            </div>

                            <div className='col'>
                                <p><a href='https://github.com/leaf-junkie' style={{color:'#fff'}}>Julie Ragsdale</a></p>
                                <p><a href='https://github.com/scarrasco27541' style={{color:'#fff'}}>Sherry Carrasco</a></p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;