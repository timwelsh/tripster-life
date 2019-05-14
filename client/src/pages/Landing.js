import React, { Component } from "react";
import Header from "../components/Header";
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";
import Footer from "../components/Footer";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
        <div>
            <Header />
            {/* Display register card by default */}
            <RegisterCard />
    
            {/* If the user clicks "login" button, switch to login card */}
            <LoginCard />
            <Footer />
        </div>
        );
    }
}

export default Landing;

//   <div className="Login">
//     <form onSubmit={this.handleSubmit}>
//       <FormGroup controlId="email" bsSize="large">
//         <ControlLabel>Email</ControlLabel>
//         <FormControl
//           autoFocus
//           type="email"
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//       </FormGroup>
//       <FormGroup controlId="password" bsSize="large">
//         <ControlLabel>Password</ControlLabel>
//         <FormControl
//           value={this.state.password}
//           onChange={this.handleChange}
//           type="password"
//         />
//       </FormGroup>
//       <Button
//         block
//         bsSize="large"
//         disabled={!this.validateForm()}
//         type="submit"
//       >
//         Register
//       </Button>
//     </form>
//   </div>