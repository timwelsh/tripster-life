import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import userImage from 

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

  // linkFacebook = async (res) => {
  //   console.log('Link with Facebook', res)  
  //   await this.props.linkFacebook(res.accessToken);
  // }

  linkGoogle = async (res) => {
    console.log('Link with Google', res)  
    await this.props.linkGoogle(res.accessToken);
  }

  unlinkGoogle = async () => {
    console.log('Unlink Google')  
    await this.props.unlinkGoogle();
  }
  
  // unlinkFacebook = async (res) => {
  //   console.log('Unlink Facebook')  
  //   await this.props.unlinkFacebook();
  // }

  
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
          <div className="col s12 m4">
            <div className="card hoverable" style={{width:300}}>
              <div className="card-image">
                <img src='http://www.myptzone.com/assets/1/18/placeholder_male.png?9'/>
                <span className="card-title">John Doe</span>
              </div>
              <div className="card-content">
                <p>My goal is to sip coffee in every country!</p>
              </div>
              <div className="card-action">
                {/* On click, pull up modal to update */}
                <a href="#">Edit</a>
                {/* On click, pull up modal to delete */}
                <a href="#">Delete</a>
                <a href="#"></a>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='card hoverable' style={{padding:20, width:300}}>
                  <p className='content'>Link your social media accounts</p>
                  {/* <FacebookLogin
                    appId="171335970085090"
                    disabled={true}
                    render={renderProps => (
                      <button style={{ marginRight: 15 }} className="btn btn-primary" onClick={renderProps.onClick} disabled={this.props.dashboard.methods.includes('facebook') ? true : false}>Link with Facebook</button>
                    )}
                    fields="name,email,picture"
                    callback={this.linkFacebook}
                    cssClass="btn btn-outline-primary"
                  /> */}
                  <GoogleLogin 
                    clientId="499420307488-hj9l9h3amt5into76m9i0ntkaqcg9q4t.apps.googleusercontent.com"
                    disabled={this.props.dashboard.methods.includes('google') ? true : false}
                    render={renderProps => (
                      <button className="btn btn-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>Link with Google</button>
                    )}
                    onSuccess={this.linkGoogle}
                    onFailure={this.linkGoogle}
                  />
                  <br />
                  <br />
                  <br />
                  <p className='content'>Unlink your social media accounts</p>
                  {/* <button 
                    style={{ marginRight: 15 }} 
                    className="btn btn-primary" 
                    onClick={ () => this.unlinkFacebook() } 
                    disabled={ this.props.dashboard.methods.includes('facebook') ? false : true }
                  >
                    Unlink with Facebook
                  </button> */}
                  <button 
                    className="btn btn-danger" 
                    onClick={ () => this.unlinkGoogle() }
                    disabled={ this.props.dashboard.methods.includes('google') ? false : true }
                  >
                    Unlink with Google
                  </button>
                {/* <h3 style={{visibility:'hidden'}}>{this.props.secret}</h3> */}
                </div>
              </div>
            </div>
          </div>
          
          <div className='col s8 todo card hoverable' style={{backgroundColor:'#fff'}}>
            <div style={{margin:15}}>
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
            <div style={{float:'right', margin:15}}>
              <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
          </div>
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
