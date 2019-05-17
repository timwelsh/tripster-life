import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import * as actions from '../actions';
import CustomInput from './CustomInput';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  async onSubmit(formData) {
    await this.props.signUp(formData);
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
      <div className='card hoverable ' style={{width:450, padding:20}}>
        <span className='card-title'>Register</span>
        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="row">
                <Field
                  name="firstName"
                  type="text"
                  id="firstName"
                  label="First Name"
                  component={ CustomInput } />
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Last Name"
                  component={ CustomInput } />
              </div>
              <div className="row">
                <Field
                  name="email"
                  type="text"
                  id="email"
                  label="Email"
                  component={ CustomInput } />
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  component={ CustomInput } />
              </div>
              {/* <input 
                name="birthday"
                type="text" 
                id="birthday"
                label="Birthday"
                class="datepicker" /> */}

              { this.props.errorMessage ? 
              <div className="alert alert-danger">
                { this.props.errorMessage }
              </div> : null }

              <button type="submit" className="btn btn-primary" style={{marginTop: "1rem"}}>Register</button>
            </form>
          </div>

          <div>
          <p>Already have an account? Login <a href='/signin'>here</a>!</p>
          </div>

          {/* <div className="col">
            <div className="text-center">
              <div className="alert alert-primary">
                Or sign up using third-party services
              </div>
              <FacebookLogin
                appId="string"
                render={renderProps => (
                  <button style={{ marginRight: 15 }} className="btn btn-primary" onClick={renderProps.onClick}>Facebook</button>
                )}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="btn btn-outline-primary"
              />
              <GoogleLogin 
                clientId="string"
                render={renderProps => (
                  <button className="btn btn-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                className="btn btn-outline-danger"
              />
            </div>
          </div> */}
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
  reduxForm({ form: 'signup' })
)(SignUp)
