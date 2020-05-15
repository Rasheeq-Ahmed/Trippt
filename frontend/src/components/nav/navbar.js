import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="user-login-signup">
                <Link to='/trips'>Itinerary</Link>
                <Link><button onClick={this.logoutUser}>Logout</button></Link>
            </div>
        );
      } else {
        return (
            <div className="user-login-signup">
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Signup</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="homepage-header">
            <div className="app-name"><Link to="/">Trippt</Link></div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;