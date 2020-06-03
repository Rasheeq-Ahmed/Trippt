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

  componentDidMount() {
    this.props.clearSessionErrors();
  }
  // componentWillMount() {
  //   this.props.clearSessionErrors();
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let user = {
  //     email: this.state.email,
  //     handle: this.state.handle,
  //     password: this.state.password,
  //     password2: this.state.password2
  //   };

  //   this.props.signup(user)
  //     .then(() => this.props.login(user))
  //     // .then(() => this.props.history.push('/profile')) 
  // }
  



  handleSubmit() {
    let { email, handle, password, password2} = this.state
    return (e) => {
      e.preventDefault();
      this.props.signup({ email, handle, password, password2})
        .then(res => {
          if (!res.errors) {
            this.props.login({ email, handle, password, password2 })
            .then(
            this.props.history.push('/profile')
            )
          }
        })
    };
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
          <h1><Link to="/">Trippt</Link></h1>
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
                  required
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder="Handle"
                  required
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  required
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                  required
                />
              </label>
              {this.renderErrors()}
              <span id="log-in">
                Already on Trippt,{" "}
                <span id="login-link">
                  <Link className="link-login" to="/login">Login!</Link>
                </span>
              </span>
              <div className="signup-btn">
                {/* <button type="submit" onClick={this.handleSubmit}>
                  Register Account
                </button> */}
                <button className="submit-button" onClick={this.handleSubmit()}>Sign Up</button>
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