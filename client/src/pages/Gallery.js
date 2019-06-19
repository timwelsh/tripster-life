import React, {Component} from 'react';
import a from '../utils/a.jpg';

class Gallery extends Component {
    render() {
        return (
            <div className='container'>
                <div style={{margin:'0 auto', marginTop:'10vh'}}>
                    <div className='row'>
                        <div className="col s12 m6 l3"><img src={a}></img></div>
                        {/* <div className="col s12 m6 l3"><img src={ b }>2</img></div>
                        <div className="col s12 m6 l3"><img src={ c }>3</img></div>
                        <div className="col s12 m6 l3"><img src={ d }>4</img></div> */}
                    </div>
                    {/* <div className='row'>
                        <div className="col s12 m6 l3"><img src={ e }>1</img></div>
                        <div className="col s12 m6 l3"><img src={ f }>2</img></div>
                        <div className="col s12 m6 l3"><img src={ g }>3</img></div>
                        <div className="col s12 m6 l3"><img src={ h }>4</img></div>
                    </div>
                    <div className='row'>
                        <div className="col s12 m6 l3"><img src={ i }>1</img></div>
                        <div className="col s12 m6 l3"><img src={ j }>2</img></div>
                        <div className="col s12 m6 l3"><img src={ k }>3</img></div>
                        <div className="col s12 m6 l3"><img src={ l }>4</img></div>
                    </div>
                    <div className='row'>
                        <div className="col s12 m6 l3"><img src={ m }>1</img></div>
                        <div className="col s12 m6 l3"><img src={ n }>2</img></div>
                        <div className="col s12 m6 l3"><img src={ o }>3</img></div>
                        <div className="col s12 m6 l3"><img src={ p }>4</img></div>
                    </div>
                    <div className='row'>
                        <div className="col s12 m6 l3"><img src={ r }>1</img></div>
                        <div className="col s12 m6 l3"><img src={ s }>2</img></div>
                        <div className="col s12 m6 l3"><img src={ t }>3</img></div>
                        <div className="col s12 m6 l3"><img src={ u }>4</img></div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Gallery;
