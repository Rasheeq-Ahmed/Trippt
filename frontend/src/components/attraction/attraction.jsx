import React from 'react';
import './attraction.css';




class Attraction extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAttractions(295424, 'Dubai')
  }

  

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
      <div className="headline">Attractions in Dubai</div>
      <div className="gallery">
        {this.props.attractions.map((place, idx) => (
          <div className="gallery-grid" key={idx}>
            <figure className="gallery-image">{place.name}
            {getUrl((getImages(getPhotos(place.photo)))) !== undefined ?
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