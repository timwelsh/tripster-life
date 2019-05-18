import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import userImage from 

import * as actions from '../actions';

class Dashboard extends Component {
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
      <div className='row'>

        {/* SIDENAV */}
        <div className='col'>
          <div className='sidenav'>
            <nav>
              <ul id="slide-out" className="sidenav">
                <li>
                  <div className="user-view">
                    <div className="background">
                    <img src="images/office.jpg" />
                    </div>
                    <img className="circle" src="i" />
                    <span className="white-text name"></span>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                  </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </nav>
          </div>
        </div>
        <br/>
        <div className='row'>

          <div className='col'>
            <img src=''/>
          </div>

          <div className='col'>
            <div className='card hoverable' style={{padding:20, width:400}}>
              <p className='card-title'>Link your social media accounts</p>
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
              <p className='card-title'>Unlink your social media accounts</p>
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
