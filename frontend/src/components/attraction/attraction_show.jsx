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
    if (!this.props.attractions) {
      this.props.getAttraction(this.props.locationId)
    }
  };

  findAttraction(attractions, attractionId) {
    for(let i = 0; i < attractions.length; i ++) {
      let attraction = attractions[i]
      if (attraction.location_id === attractionId) {
        return attraction
      }
    }
    return null
  };





  render(){

    if(this.props.loading) return(<Loader/>);

    let api = this.props.attractions[this.props.locationName];
    let state = this.props.attractions[this.props.tripId]
    let haveTrip = this.findAttraction(state.attractions, this.props.locationId)
    
    let attraction = !state ? api : haveTrip

    if (!attraction) {
      return null;
    }

        
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
                  haveTrip ? () => this.props.removeAttrac(this.props.tripId, this.props.locationId) :
                  () => this.props.updateTrip(this.props.tripId, attraction)}
                // className={(haveTrip) ? "btn-hide" : ""}
                >{haveTrip ? "Remove Trip" : "Add Trip"}</button>
        
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