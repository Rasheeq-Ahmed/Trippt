import React from 'react';

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
      <div className="headline">NightLife in Dubai</div>
      <div className="gallery">
      {/* {console.log(this.props.nightlife[0])} */}
              {this.props.nightlife.map((place, idx) => (
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

export default NightLife;