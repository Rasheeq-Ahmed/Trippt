import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './attraction_show.css'
import NavBar from '../nav/navbar_container';
import Loader from '../loader/loader';
import NotFound from '../../assets/image-not-found.png'

import {WrappedMap} from '../map/map'


class AttractionShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      foundAttraction: false
    }

    this.findAttraction = this.findAttraction.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount(){
    let {tripAttractions, tripId, locationId, user, getUserTrips, getAttraction} = this.props

    if (user.id) {
      getUserTrips(user.id)
    }

    let foundAttraction = tripAttractions[tripId] ? 
      this.findAttraction(tripAttractions[tripId].attractions, locationId) : null

    if (!tripAttractions || !foundAttraction) {
      getAttraction(locationId)
    }

    if (foundAttraction) {
      this.setState({foundAttraction: true})
    }
    
  };

  findAttraction(attractions, attractionId) {
    if (!attractions) return null
    for(let i = 0; i < attractions.length; i ++) {
      let attraction = attractions[i]
      if (attraction.location_id === attractionId) {
        return attraction
      }
    }
    return null
  };

  disableButton() {
    let addBtn = document.getElementById('trip-btn')
    if (addBtn) {
      addBtn.disabled = true
      addBtn.innerText = "Added to Trip"
    } 
  }

  goBack() {
    this.props.history.goBack()
  }

  render(){
    
    let {tripAttractions, tripId, locationId, locationName, loading} = this.props

    if(loading) return(<Loader/>);


    // let attraction = this.props.attractions[this.props.locationName]
    let attraction;
    let attractions = tripAttractions[tripId]
    let foundAttraction = tripAttractions[tripId] ? this.findAttraction(tripAttractions[tripId].attractions, locationId) : null

    if (!attractions || !foundAttraction) {
      attractions = this.props.attractions
      attraction = attractions[locationName]
    } else {
      attraction = this.findAttraction(attractions.attractions, locationId);
    }
    
    if (!attraction) return null;

    let addBtn = document.getElementById('trip-btn')
    if (addBtn && foundAttraction) {
       addBtn.disabled = true
    } 
    
    return (
      <div className="show-all">
        <div className="show-header">
          <NavBar />
        </div>
        <div className="show-body">
          <div className="show-content">
            <div className="show-left">
              <div className="left-top">
              <div className="att-details">

              <span className="att-name">{attraction.name} </span>
              <span className="att-add">
                {" "}
                Address: {attraction.address}
              </span>
              <span>Ranking: {attraction.ranking}</span>
              <span>Rating: {attraction.rating}</span>
              <span>
                Recommended Visit Length:{" "}
                {attraction.recommended_visit_length}
              </span>
              <a className='att-web'
                href={attraction.website}
                target="_blank"
                >{`Visit ${attraction.name}'s website`}</a>

                </div>
              </div>
              <div className="left-bot">

              <div className="att-des">
                {" "}
                {attraction.description}
              </div>
              <div className='attraction-action'>
                <button id="back-btn" onClick={()=>this.goBack()}>Back</button>
                <button id={this.state.foundAttraction || foundAttraction  ? 'no-cursor' : 'trip-btn' }
                  onClick={() => { this.props.updateTrip(tripId, attraction); this.disableButton(); this.setState({foundAttraction: true}) }
                  }
                  disabled={foundAttraction ? true : false}
                  className={(!this.props.tripId) ? "btn-hide" : ""}
                >{foundAttraction ? "Added to Trip" : "Add to my Trip"}</button>
              </div>
        
            </div>
            </div>
            <div className="show-right">
              <div className="show-photo">
                {/* <Map lat={parseInt(attraction.latitude)} lng={parseInt(attraction.longitude)}/> */}
                {/* <img className='photo'
                  src={`${attraction.photo ? attraction.photo.images.large.url : NotFound}`}
                  alt=""
                /> */}
                <WrappedMap 
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                  loadingElement={<div style={{height: "100%"}}/>}
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                  lat={Number(attraction.latitude)}
                  lng={Number(attraction.longitude)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="show-footer">

        </div>
      </div>
    );
  }
}

export default AttractionShow;