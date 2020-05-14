import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./signup_session.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/trips');
  //   }

  //   this.setState({errors: nextProps.errors})
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user)
      .then(() => this.props.history.push('/trips'))
  }

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
      <div className="signup-all">
        {/* < img src='https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg'
        className="background-img"/> */}

        <div className="signup-header">
          <h1>Trippt</h1>
        </div>
        <div className="signup-body">
          <div className="signup-inner-body">
            <form className="signup-form">
              <label>
                <input
                  className="signup-input"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder="Handle"
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
              </label>
              {this.renderErrors()}
              <span id="log-in">
                Already on Trippt,{" "}
                <span id="login-link">
                  <Link to="/login">Login!</Link>
                </span>
              </span>
              <div className="signup-btn">
                <button type="submit" onClick={this.handleSubmit}>
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="signup-footer"></div>
      </div>
    );
  }
}

export default withRouter(SignupForm);