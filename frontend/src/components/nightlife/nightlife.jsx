import React from 'react';
import { Link } from 'react-router-dom';

class NightLife extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getNightlife(295424, 'Dubai')
  }

  

  render(){

    if (!this.props.nightlife) {
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

    // {console.log(this.props.nightlife.Dubai)}
    return(
      <div>
      <div className="headline"> <span className="exploring"><Link to="/destination">Back to exploring
      <img className="back-icon" src="https://vectorified.com/images/arrow-icon-font-29.png"/>
      </Link></span>
        <span className="category">NightLife in Dubai</span>
      </div>
      <div className="gallery">
      {/* {console.log(this.props.nightlife[0])} */}
              {this.props.nightlife.map((place, idx) => (
          <figure key={idx} className="gallery-image">{place.name}
            {getUrl((getImages(getPhotos(place.photo)))) !== undefined ?
            <Link to={`/nightlife/${place.location_id}`}><img className="picture" src={`${getUrl((getImages(getPhotos(place.photo))))}`} alt=""/></Link>
             : "" } 
          </figure>
        ))}
    
      </div>
      </div>
      )
  }
}

export default NightLife;