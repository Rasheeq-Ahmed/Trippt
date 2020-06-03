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
        </div>
        <div className="categories">
          <span className="restaurants"><Link to="/restaurants">Restaurants</Link></span>
          <Link className="attractions" to="/attractions/295424/Dubai">Attractions</Link>
        </div>
        <div className="categories">
          <span className="nightlife"><Link to="/nightlife">NightLife</Link></span>
        </div>
      </div>
    )
  }
}

export default Destination;