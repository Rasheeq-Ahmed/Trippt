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
    this.props.getAttractions(295424)
  }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  

  render(){

    if (!this.props.attractions) {
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
          <div className="page-title">Attractions in Dubai</div>
          <div className="gallery">
            {this.props.attractions.map((place, idx) => (
              <div className="gallery-image">
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