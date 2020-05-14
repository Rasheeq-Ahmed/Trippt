import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import "./destination.css"


class Destination extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <div className="headline">
          Explore Your Options
        </div>
        <div className="categories">
          <span className="restaurants">Restaurants</span>
          <span className="attractions"><Link to="/attractions/dubai">Attractions</Link></span>
        </div>
        <div className="categories">
          <span className="nightlife">NightLife</span>
        </div>
      </div>
    )
  }
}

export default Destination;