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
    this.clearedErrors = false;
  }

  componentDidMount() {
    if(!this.props.errors){
      this.props.clearSessionErrors()
    } 
  }

  //Once the user has been authenticated, redirect to the Homepage
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }
    // Set or clear errors
    this.setState({ errors: nextProps.errors})
  }

  demoLogin() {
    const email = this.demoEmail;
    const password = this.demoPassword;
    const Speed = 100;

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
      this.props.login(this.state).then(() => this.props.history.push("/profile"));
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
  }


  // Render the session errors if there are any

  renderErrors() {
    return (
      <ul className='error-messages'>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-all">
        <div className="login-header">
          <h1><Link to="/">Trippt</Link></h1>
        </div>
        <div className="login-body">
          <div className="login-inner-body">
          
            <form className="login-form">
              <div className="form">

              <div className="form-top">
                <label>
                  <input
                    className="login-input"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                </label>
                <label>
                  <input
                    className="login-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    />
                </label>
              </div>
              <div className="form-mid">

                {/* {console.log(this.props)} */}
                <span>{this.renderErrors()}</span>
                <span id="sign-up">
                  Don't have an account,{" "}
                  <span id="sign-up-link">
                    <Link className="link-signup" to="/signup">sign up here!</Link>
                  </span>
                </span>
              </div>
              <div className="form-bot">
                <div className="login-btn">
                  <button type="submit" onClick={this.handleSubmit}>
                    Login
                  </button>
                  <button onClick={this.demoLogin} id="demo-button">
                    Demo Login
                  </button>
              </div>
              </div>
            </div>
            </form>
          </div>
        </div>

        <div className="login-footer"></div>
      </div>
    );
  }
}

export default withRouter(LoginForm);