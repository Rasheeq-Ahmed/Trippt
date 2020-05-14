import React from 'react';


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
      {/* <div>{console.log(this.props.attractions.slice(0,10))}</div> */}
      <div className="headline">Restaurants in Dubai</div>
      <div className="gallery">
      {console.log(this.props.restaurants.Dubai)}
        {this.props.restaurants.Dubai.map((place, idx) => (
          <figure key={idx} className="gallery-image">{place.name}
            {getUrl((getImages(getPhotos(place.photo)))) !== undefined ?
             <img className="picture" src={`${getUrl((getImages(getPhotos(place.photo))))}`} alt=""/> 
             : "" } 
          </figure>
        ))}
      </div>
      </div>
      )
  }
}

export default Restaurant;