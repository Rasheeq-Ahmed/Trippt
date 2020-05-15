import React from 'react';
import './attraction.css';
import { Link } from 'react-router-dom';


class Attraction extends React.Component{
  constructor(props){
    super(props);
  }
   state = { show: false };

  componentDidMount(){
    this.props.getAttractions(295424, 'Dubai')
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

    return(
      <div>
      {/* <div>{console.log(this.props.attractions.slice(0,10))}</div> */}
      <div className="headline"> <span className="exploring"><Link to="/destination">Back to exploring
      <img className="back-icon" src="https://vectorified.com/images/arrow-icon-font-29.png"/>
      </Link></span>
        <span className="category">Attractions in Dubai</span>
      </div>
      <div className="gallery">
        {this.props.attractions.map((place, idx) => (
          <div className="gallery-grid" key={idx}>
            <figure className="gallery-image">{place.name}
            {getUrl((getImages(getPhotos(place.photo)))) !== null ?
             <img className="picture" src={`${getUrl((getImages(getPhotos(place.photo))))}`} alt=""/>
             : "" } 
             </figure>
            
            {/* {console.log(result(place.photo))} */}
            {/* {console.log(getImages(getPhotos(place.photo)))} */}
          </div>
        ))}
      </div>
      </div>
      )
  }
}

export default Attraction