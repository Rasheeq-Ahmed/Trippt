import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-background">
        <NavBar />
        <h1 className="destination">Choose Your Next Destination</h1>
        <img className="dubai" src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Dubai"></img>
        <h1 className="city"><Link to="/destination" >Dubai</Link></h1> 
        <footer className="footer">
          Copyright &copy; 2020 Trippt
        </footer>
      </div>
    );
  }
}

export default MainPage;