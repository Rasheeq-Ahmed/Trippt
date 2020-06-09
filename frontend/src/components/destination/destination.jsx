import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import "./destination.css"
import { LOCATIONS } from "../../assets/locations"
import Slider from "../carousel/slider"


class Destination extends React.Component{

  render(){
    return(
      <div className= 'dest-all'>
        
        <div className="dest-header">
        <NavBar />
        </div>

        <div className="dest-body">
          <div className="dest-title">
            <h1>Discover Your Next Adventure</h1>
          </div>
          <div className="dest-slides">
          <Slider data={ LOCATIONS } showLoader={ this.props.showLoader}/>
          </div>

        </div>

        <div className="dest-footer">

        </div>
      



      
      </div>
    )
  }
}

export default Destination