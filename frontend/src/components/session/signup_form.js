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
      <div>
      <div className="header"><Link to="/">Trippt</Link></div>
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <span className="signup-trippt">
            Sign up for Trippt!
          </span>
          <span className="terms">
            By signing up, you agree to Trippt's Terms and Conditions.
          </span>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <span id="sign-up">Already on Trippt, <span id="sign-up-link"><Link to="/login">Login!</Link></span></span>
            <br/>
            <input id="submit" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
            <div className="travel-pic">
              <img src="https://www.itl.cat/pngfile/big/209-2095289_laguna-beach-california-wallpaper-high-resolution-travel-images.jpg" />
            </div>
      </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);