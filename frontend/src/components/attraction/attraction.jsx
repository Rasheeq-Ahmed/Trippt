import React from 'react';
import './attraction.css';
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container';


class Attraction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      attractions: this.props.attractions,
      restaurants: this.props.restaurants,
      nightlife: this.props.nightlife
    }
  }

  componentDidMount(){
    let {locationId, locationName} = this.props
    this.props.getAttractions(locationId, locationName)
    this.props.getRestaurants(locationId, locationName)
    this.props.getNightlife(locationId,locationName)
  }

  randNum(length) {
    return Math.floor(Math.random() * length)
  }

  tripptMe(tripId, ...args) {
    args.forEach(arr => {
      let rand = this.randNum(arr.length)
      this.props.updateTrip(tripId, arr[rand])
    })

  }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  

  render(){
    let attractions = this.props.attractions[this.props.locationName];
    let restaurants = this.props.restaurants[this.props.locationName];
    let nightlife = this.props.nightlife[this.props.locationName];
    if (!attractions) {
      return null;
    }
    if (!restaurants) {
      return null;
    } 

    if (!nightlife) {
      return null;
    }
    // data -> photo -> images -> url: "img src"

    let newRestaurants = restaurants.filter(res => res.name)
    
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
      <div className="att-all">
        <div className="att-header">
          <NavBar />
        </div>

        <div className="att-body">
        <div className="page-title">Attractions in {this.props.locationName}</div>
          <div className="gallery">
            <button 
                onClick={()=> this.tripptMe(this.props.tripId, attractions,newRestaurants,nightlife)}
                className={!this.props.tripId ? "btn-hide" : ""} 
            >Trippt Me</button>
            
            
            {attractions.map((place, idx) => {
              if (place.name) {
                return (
                  <div key={idx} className="gallery-image">
                    <Link to={this.props.tripId ? `/attraction/${place.location_id}/${place.name}/${this.props.tripId}` : `/attraction/${place.location_id}/${place.name}`}>
                        <div className="att"
                          style={{
                            backgroundImage: `url(${getUrl(
                              getImages(getPhotos(place.photo))
                            )})`}}>
                              <p>
                            {place.name}
                              </p>
                        </div>
                      </Link>
                      <button 
                        onClick={()=>this.props.updateTrip(this.props.tripId, place)}
                        className={!this.props.tripId ? "btn-hide" : ""}
                        > Add to Trip</button>
                  </div>
                )
              }
            })}
            {restaurants.map((place, idx) => {

              if (place.name) {
                return (
                  <div key={idx} className="gallery-image">
                    <Link to={this.props.tripId ? `/attraction/${place.location_id}/${place.name}/${this.props.tripId}` : `/attraction/${place.location_id}/${place.name}`}>
                      <div className="att"
                        style={{
                          backgroundImage: `url(${getUrl(
                            getImages(getPhotos(place.photo))
                          )})`
                        }}>
                        <p>
                          {place.name}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => this.props.updateTrip(this.props.tripId, place)}
                      className={!this.props.tripId ? "btn-hide" : ""}
                    > Add to Trip</button>
                  </div>
                )
              }
            })}
            {nightlife.map((place, idx) => {
              if (place.name) {
                return (

                <div key={idx} className="gallery-image">
                  <Link to={this.props.tripId ? `/attraction/${place.location_id}/${place.name}/${this.props.tripId}` : `/attraction/${place.location_id}/${place.name}`}>
                    <div className="att"
                      style={{
                        backgroundImage: `url(${getUrl(
                          getImages(getPhotos(place.photo))
                        )})`
                      }}>
                      <p>
                        {place.name}
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={() => this.props.updateTrip(this.props.tripId, place)}
                    className={!this.props.tripId ? "btn-hide" : ""}
                  > Add to Trip</button>
                </div>
                )
              }
              })}
          </div>
        </div>
        <div className="att-footer"></div>
      </div>
    );
  }
}

export default Attraction