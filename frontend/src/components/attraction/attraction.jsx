import React from 'react';
import './attraction.css';
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container';


class Attraction extends React.Component{
  constructor(props){
    super(props);
  }
   state = { show: false };

  componentDidMount(){
    this.props.getAttractions(this.props.locationId, this.props.locationName)
  }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  

  render(){

    if (!this.props.attractions[this.props.locationName]) {
      return null;
    }
    // data -> photo -> images -> url: "img src"
    
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
            {this.props.attractions[this.props.locationName].map((place, idx) => (
              <div key={idx} className="gallery-image">
                  <Link to={`/attractions/${place.location_id}`}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="att-footer"></div>
      </div>
    );
  }
}

export default Attraction