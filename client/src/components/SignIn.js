import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import * as actions from '../actions';
import CustomInput from './CustomInput';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  async onSubmit(formData) {
    await this.props.signIn(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  async responseGoogle(res) {
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  async responseFacebook(res) {
    await this.props.oauthFacebook(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container'>
        <div className='card hoverable ' style={{ width:450, padding:20, margin:'0 auto', marginTop:'10vh' }}>
          <div className='center-align'>
            <div className='light-blue lighten-1' style={{ margin:0, padding:10 }}>
              <span className='card-title white-text'><h4>Login</h4></span>
            </div>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <Field
                name='email'
                type='text'
                id='email'
                placeholder='Email'
                component={ CustomInput } />
              <Field
                name='password'
                type='password'
                id='password'
                placeholder='Password'
                component={ CustomInput } />

              { this.props.errorMessage ? 
              <div className='alert alert-danger'>
                { this.props.errorMessage }
              </div> : null }
              <br></br>
              <div className='center-align'>
                <button type='submit' className='btn red accent-1'>Login</button>
              </div>
            </div>
          </form>
          <div className='center-align'>
            <p>Don't have an account yet? Sign up for one <a href='/signup'>here</a>!</p>
          </div>
          {/* <div className='col'>
            <div className='text-center'>
              <div className='alert alert-primary'>
                Or sign in using third-party services
              </div>
              <FacebookLogin
                appId='string'
                render={renderProps => (
                  <button style={{ marginRight: 15 }} className='btn btn-primary' onClick={renderProps.onClick}>Facebook</button>
                )}
                fields='name,email,picture'
                callback={this.responseFacebook}
                cssClass='btn btn-outline-primary'
              />
              <GoogleLogin 
                clientId='string'
                render={renderProps => (
                  <button className='btn btn-danger' onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                className='btn btn-outline-danger'
              />
            </div>
          </div> */}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SignIn)
