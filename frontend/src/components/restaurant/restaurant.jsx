import React from 'react';
import { Link } from 'react-router-dom';


class Restaurant extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getRestaurants(295424, 'Dubai')
  }

  

  render(){
    if (!this.props.restaurants.Dubai) {
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
    
    return(
      <div>
      <div className="headline"> <span className="exploring"><Link to="/destination">Back to exploring
      <img className="back-icon" src="https://vectorified.com/images/arrow-icon-font-29.png"/>
      </Link></span>
        <span className="category">Restaurants in Dubai</span>
      </div>
      <div className="gallery">
      {/* {console.log(this.props.restaurants.Dubai)} */}
        {this.props.restaurants.Dubai.map((place, idx) => (
          <figure key={idx} className="gallery-image">{place.name}
            {getUrl((getImages(getPhotos(place.photo)))) !== undefined ?
            <Link to={`/attractions/${place.location_id}`}><img className="picture" src={`${getUrl((getImages(getPhotos(place.photo))))}`} alt=""/></Link> 
             : "" } 
          </figure>
        ))}
      </div>
      </div>
      )
  }
}

export default Restaurant;