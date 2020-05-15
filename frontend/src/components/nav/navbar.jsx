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
            <div className="nav-auth">
                <Link to='/profile'><button>Profile</button></Link>
                <Link><button onClick={this.logoutUser}>Logout</button></Link>
            </div>
        );
      } else {
        return (
            <div className="nav-auth">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/signup'}><button>Signup</button></Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-all">
          <div className='nav-left'>
            <div className="app-name">
              <Link to="/">Trippt</Link>
            </div>
          </div>
          <div className="nav-right">
            { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;