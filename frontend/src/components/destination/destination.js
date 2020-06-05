import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import "./destination.css"
import { LOCATIONS } from "../../assets/locations"


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
        {LOCATIONS.map((location, idx) => (
          <Link 
              to={`/attractions/${location.locationId}/${location.location}`}
              key={idx}
              > {location.location} </Link>
        ))}
      </div>
    )
  }
}

export default Destination;