import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './pages/CheckoutForm';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import Books from './pages/Books';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import AUTH from './utils/AUTH';

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


	constructor(props) {
		super(props);
		this.state = {complete: false};
		this.submit = this.submit.bind(this);
	}

	async submit(ev) {
		let {token} = await this.props.stripe.createToken({name: "Name"});
		let response = await fetch("/charge", {
			method: "POST",
			headers: {"Content-Type": "text/plain"},
			body: token.id
		});
		if (response.ok) this.setState({complete: true});
	}


	render() {
		if (this.state.complete) return <h1>Purchase Complete</h1>;
		return (
			<div className="App">
				<StripeProvider apiKey="pk_test_ou8oZm0fhBw9ueXnkneQtPt400MTOGCqug">
					<div className="example">
						<h1> React Stripe Elements Example</h1>
						<Elements>
							<CheckoutForm />
						</Elements>
					</div>
				</StripeProvider>

        {/* { this.state.loggedIn && (
          <div>
            <Nav user={this.state.user} logout={this.logout}/>
            <div className="main-view">
              <Switch>
                <Route exact path="/" component={() => <Books user={this.state.user}/>} />
                <Route exact path="/books" component={() => <Books user={this.state.user}/>} />
                <Route exact path="/books/:id" component={Detail} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
        { !this.state.loggedIn && (
          <div className="auth-wrapper" style={{paddingTop:40}}>
            <Route exact path="/" component={() => <LoginForm login={this.login}/>} />
            <Route exact path="/books" component={() => <LoginForm user={this.login}/>} />
            <Route exact path="/signup" component={SignupForm} />
          </div>
        )} */}
			</div>
		)
	}
}

export default App;
