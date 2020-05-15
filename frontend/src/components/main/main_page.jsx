import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './main_page.css'
class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-all">
        <div className="splash-header">
         <NavBar/>
        </div>
        <div className="splash-body">
          <div className="splash-inner-body">
            <div className="splash-def">
              <li className="splash-word">trippt</li>
              <li className="splash-word-type">
                <div className="splash-subtext">
                  <p>[trihpt] </p>
                  <p className="italic">noun</p>
                </div>
              </li>
              <li className="definition">
                an act of going to a place and returning; a journey or
                excursion but simpler. travel made easy
              </li>
            </div>
          </div>
        </div>

        <div className="splash-footer"></div>
      </div>
    );
  }
}

export default MainPage;