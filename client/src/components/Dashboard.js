import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import julie from '../utils/tripster-juls.jpg'

import * as actions from '../actions';

class Dashboard extends Component {

  constructor() {
    super();
    
		this.state = {
      tasks: [
        {
          id: 1,
          title: 'renew passport',
          completed: 'false'
        },
        {
          id: 2,
          title: 'book flights',
          completed: 'false'
        },
        {
          id: 3,
          title: 'find petsitter',
          completed: 'false'
        }
      ]
    };
  }

  async componentDidMount() {
    this.props.getDashboard()
  }

  linkGoogle = async (res) => {
    console.log('Link with Google', res)  
    await this.props.linkGoogle(res.accessToken);
  }

  unlinkGoogle = async () => {
    console.log('Unlink Google')  
    await this.props.unlinkGoogle();
  }
    
  render() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.sidenav');
    //   var instances = M.Sidenav.init(elems, options);
    // });
    // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    // var collapsibleElem = document.querySelector('.collapsible');
    // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
    return (
      <div className='container'>
        <div className='row' style={{marginTop:'4rem'}}>

        <div className='col' style={{position:'relative', display:'flex', flexDirection:'row'}}>
          <div className='card hoverable' style={{width:300}}>
            <div className='card-image'>
              <img src={julie} />
            </div>
            <div className='card-content'>
              <span className='card-title'>Julie Ragsdale</span>
              <h6>My goal is to sip coffee in every country!</h6>
            </div>
            <div className='card-action'>
              {/* On click, pull up modal to update */}
              <a href='#'>Edit</a>
              {/* On click, pull up modal to delete */}
              <a href='#'>Delete</a>
            </div>
          </div>

          <div className='col' style={{display:'flex', flexDirection:'row'}}>
            <div className='todo card hoverable' style={{backgroundColor:'#fff', width:400}}>
              <div style={{margin:25}}>
                <p className='card-title'>Tasks</p>
                <div className='listContent'>
                  <form action='#'>
                    {this.state.tasks.map(task => {
                      return (
                        <div {...task}> 
                          <label>
                            <input type='checkbox' />
                            <span>{ task.title }</span>
                          </label>
                        </div>
                      )
                    })}
                  </form>
                </div>
              </div>
              <div style={{margin:25, position:'absolute', bottom:10}}>
                <a className='btn-floating btn-large waves-effect waves-light red' style={{position:'relative', float:'right'}}><i className='material-icons'>edit</i></a>
              </div>
            </div>
          </div>

          {/* <div className='col' style={{position:'relative', width:200, display:'flex', flexDirection:'row'}}>
            <div className='card hoverable' style={{padding:20}}>
              <p className='content'>Link your social media accounts</p>
              <GoogleLogin 
                clientId='499420307488-hj9l9h3amt5into76m9i0ntkaqcg9q4t.apps.googleusercontent.com'
                disabled={this.props.dashboard.methods.includes('google') ? true : false}
                render={renderProps => (
                  <button className='btn btn-danger' onClick={renderProps.onClick} disabled={renderProps.disabled}>Link with Google</button>
                )}
                onSuccess={this.linkGoogle}
                onFailure={this.linkGoogle}
              />
              <br />
              <br />
              <br />
              <p className='content'>Unlink your social media accounts</p>
              <button 
                className='btn btn-danger' 
                onClick={ () => this.unlinkGoogle() }
                disabled={ this.props.dashboard.methods.includes('google') ? false : true }
              >
                Unlink with Google
              </button>
            </div>
          </div> */}
        </div>
              
        {/* <a id='menu' className='waves-effect waves-light btn btn-floating' ><i className='material-icons'>menu</i></a>

        <div className='tap-target' data-target='menu' style={{position:'relative', marginBottom:'0'}}>
          <div className='tap-target-content'>
            <h5>Psst...</h5>
            <p>HAPPY BIRTHDAY!!</p>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    secret: state.dash.secret,
    dashboard: state.dash,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
