import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './login_session.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.demoEmail = "trippt@trippt.com";
    this.demoPassword = "password";
  }

  // Once the user has been authenticated, redirect to the Tweets page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/trips');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  demoLogin() {
    const email = this.demoEmail;
    const password = this.demoPassword;
    const Speed = 50;

    document.getElementById("demo-button").disabled = true;
    this.setState({ email: "", password: "" });

    for (let i = 0; i < email.length; i++) {
      setTimeout(() => {
        this.setState({ email: this.state.email + email[i] });
      }, i * Speed);
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => {
        this.setState({ password: this.state.password + password[j] });
      }, (email.length * Speed) + j * Speed);
    }
    setTimeout(() => {
      this.props.login(this.state).then(() => this.props.history.push("/trips"));
    }, (email.length * Speed) + (password.length * Speed) + Speed);
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(() => this.props.history.push('/trips')) 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="header"><Link to="/">Trippt</Link></div>
        <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <span id="welcome-back">Welcome Back!</span>
          <div className="login-inner-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <span id="sign-up">Don't have an account, <span id="sign-up-link"><Link to="/signup">Sign up!</Link></span></span>
            <br/>

            <input id="submit" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
          <button id="demo-submit" onSubmit={this.handleSubmit} id="demo-button" className="demo-btn" onClick={this.demoLogin}>
              Demo Login
            </button>
        </form>
        
        <div className="travel-pic">
              <img src="https://www.itl.cat/pngfile/big/209-2095289_laguna-beach-california-wallpaper-high-resolution-travel-images.jpg" />
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);