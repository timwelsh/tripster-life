import React, { Component, useState } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './pages/CheckoutForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AUTH from './utils/AUTH';
import Landing from './pages/Landing';
import Dashboard from './components/Dashboard';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  
  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null
    };
  }
  
	componentDidMount() {
		AUTH.getUser().then(response => {
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	login = (username, password) => {
		AUTH.login(username, password).then(response => {
      console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
	}


	render() {
		if (this.state.complete) return <h1>Purchase Complete</h1>;
		return (

			<div className='App'>

				{/* Code for Stripe when ready */}
				{/* <StripeProvider apiKey='pk_test_ou8oZm0fhBw9ueXnkneQtPt400MTOGCqug'>
					<div className='example'>
						<h1> React Stripe Elements Example</h1>
						<Elements>
							<CheckoutForm />
						</Elements>
					</div>
				</StripeProvider> */}

        { this.state.loggedIn && (
          <div>
            <Header user={this.state.user} logout={this.logout}/>
            <div className='main-view'>
              <Switch>
                <Route exact path='/' component={Landing} />
								<Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/benefits' component={Benefits} />
								<Route exact path='/contact' component={Contact} />
                {/* <Route component={NoMatch} /> */}
              </Switch>
            </div>
						<Footer />
          </div>
        )}
        { !this.state.loggedIn && (
					<div>
						<Header />
						<div className='auth-wrapper' style={{paddingTop:40}}>
							<Route exact path='/' component={() => <LoginForm login={this.login}/>} />
							<Route exact path='/dashboard' component={Dashboard}/>
							<Route exact path='/about' component={About} />
							<Route exact path='/benefits' component={Benefits} />
							<Route exact path='/contact' component={Contact} />
							{/* <Route component={NoMatch} /> */}
							{/* <Route exact path='/books' component={() => <LoginForm user={this.login}/>} /> */}
							<Route exact path='/signup' component={SignupForm} />
						</div>
						<Footer />
					</div>
        )}
			</div>
		)
	}
}

export default App;
