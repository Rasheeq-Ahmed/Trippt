import React from 'react';
import { Link } from 'react-router-dom';
import './attraction_show.css'
import NavBar from '../nav/navbar_container';
import { urlencoded } from 'body-parser';


class AttractionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAttraction(this.props.locationId)
  };



  render(){
    let attraction = this.props.attractions[this.props.locationName]
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
              <a
                href={attraction.website}
                target="_blank"
              >{`Visit ${attraction.name}'s website`}</a>

              <div className="att-des">
                {" "}
                {attraction.description}
              </div>
              <button 
                onClick={() => this.props.updateTrip(this.props.tripId, attraction)}
                className={!this.props.tripId ? "btn-hide" : ""}
                >Add to my trip</button>
        
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