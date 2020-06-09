import React from 'react';
import { Link } from 'react-router-dom';
import './attraction_show.css'
import NavBar from '../nav/navbar_container';
import Loader from '../loader/loader'
import { urlencoded } from 'body-parser';


class AttractionShow extends React.Component{
  constructor(props){
    super(props);

    this.findAttraction = this.findAttraction.bind(this)
  }

  componentDidMount(){
    let {tripAttractions, tripId, locationId} = this.props
    let foundAttraction = tripAttractions[tripId] ? this.findAttraction(tripAttractions[tripId].attractions, locationId) : null
    if (!tripAttractions || !foundAttraction) {
      this.props.getAttraction(this.props.locationId)
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





  render(){
    let {tripAttractions, getAttraction, tripId, locationId, locationName, loading} = this.props

    if(loading) return(<Loader/>);

    // let attraction = this.props.attractions[this.props.locationName]
    let attraction;
    
    let attractions = tripAttractions[tripId]
    
    if (!attractions) {
      attractions = this.props.attractions
      attraction = attractions[locationName]
    } else {
      attraction = this.findAttraction(attractions.attractions, locationId);
    }
    
    if (!attraction) return null;
        
    const getPhotos = (photos) => {
      for(var key in photos){
        if(key === "images"){
          return photos[key];
        }
      }
    }

    const getImages = (obj) => {
      for(var key in obj){
        if(key === "large"){
          return obj[key]
        }
      }
    }

    const getUrl = (obj) => {
      for(var key in obj){
        if(key === 'url'){
          return obj[key]
        }
      }
    }

    
    return (
      <div className="show-all">
        {/* {console.log(attractions)}
        {console.log(attraction)} */}
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
              <button id='trip-btn'
                onClick={
                  () => this.props.updateTrip(this.props.tripId, attraction)}
                className={!this.props.tripId ? "btn-hide" : ""}
                >Add To Trip</button>
        
            </div>
            </div>
            <div className="show-right">
              <div className="show-photo">
                <img className='photo'
                  src={`${getUrl(
                    getImages(getPhotos(attraction.photo))
                  )}`}
                  alt=""
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