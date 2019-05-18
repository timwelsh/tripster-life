import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../utils/logo-1.png';

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
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img src={Logo} style={{ maxWidth:225, position:"absolute", top:-25, left:-45, zIndex:"10"}}/>
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
            
            { !this.props.isAuth ?
              [
                <li><Link to="/signin">Sign in</Link></li>,
                <li><Link to="/about">About</Link></li>,
                <li><Link to="/benefits">Benefits</Link></li>,
                <li><Link to="/contact">Contact</Link></li>,
                ] : null }

            { this.props.isAuth ?
              [
                <li><Link to="/signout">Sign out</Link></li>,
                <li><Link to="/about">About</Link></li>,
                <li><Link to="/benefits">Benefits</Link></li>,
                <li><Link to="/contact">Contact</Link></li>,
                ] : null }
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          { !this.props.isAuth ?
            [
              <li><Link to="/signout">Sign out</Link></li>,
              <li><Link to="/about">About</Link></li>,
              <li><Link to="/benefits">Benefits</Link></li>,
              <li><Link to="/contact">Contact</Link></li>,
            ] : null 
          }

          { this.props.isAuth ?
            [
              <li><Link to="/signout">Sign out</Link></li>,
              <li><Link to="/about">About</Link></li>,
              <li><Link to="/benefits">Benefits</Link></li>,
              <li><Link to="/contact">Contact</Link></li>,
            ] : null 
          }
        </ul>
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