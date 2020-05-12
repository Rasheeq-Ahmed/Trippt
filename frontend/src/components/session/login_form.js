import React from 'react';
import { withRouter } from 'react-router-dom';

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
      this.props.login(this.state).then(() => this.props.history.push("/"));
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
        <form onSubmit={this.handleSubmit}>
          <div>
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
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
          <button onSubmit={this.handleSubmit} id="demo-button" className="demo-btn" onClick={this.demoLogin}>
              Demo Login
            </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);