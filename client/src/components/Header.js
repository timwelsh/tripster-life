import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../utils/logo-new.png';

import * as actions from '../actions';

const style = {
  zIndex:"1"
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <div style={style}>
          <nav>
            {/* <Link className="navbar-brand" to="/">Tripster Life</Link> */}
            <div className="nav-wrapper light-blue darken-1"style={{zIndex:"11"}}>
              <a href="/" className="brand-logo">
                <img src={Logo} style={{ maxWidth:250, position:"absolute", top:-15, left:-45}}/>
              </a>

              {/* <ul className="left">
                <li key="dashboard">
                  <Link to="/dashboard">Welcome Profile Dashboard</Link>
                </li>
              </ul> */}

            <ul className="right hide-on-med-and-down">
              { !this.props.isAuth ?
                [<li key="features">
                  <Link to="/features">Features</Link>
                </li>,
                <li key="about">
                  <Link to="/about">About</Link>
                </li>, 
                <li key="contact">
                  <Link to="/contact">Contact</Link>
                </li>,
                <li key="signup">
                  <Link to="/signup">Register</Link>
                </li>,
                <li key="signin">
                  <Link to="/signin">Login</Link>
                </li>] : null }
              
              { this.props.isAuth ?
                [<li key="features">
                  <Link to="/features">Features</Link>
                </li>,
                <li key="about">
                  <Link to="/about">About</Link>
                </li>, 
                <li key="contact">
                  <Link to="/contact">Contact</Link>
                </li>,
                <li key="deashboard">
                  <Link to="/dashboard">Dashboard</Link>
                </li>,
                <li className="nav-item">
                    <Link to="/" onClick={this.signOut}>Sign Out</Link>
                </li>] : null }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, actions)(Header);


