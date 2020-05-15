import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container'
import '../attraction/attraction.css';


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
      <div className="att-all" >
        <div className="att-header">
          <NavBar />
        </div>

        <div className="att-body">
          <div className="page-title">Nightlife in Dubai</div>
          <div className="gallery">
            {this.props.nightlife.map((place, idx) => (
              <div className="gallery-image">
                <Link to={`/attractions/${place.location_id}`}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="att-footer"></div>
      </div >
      )
  }
}

export default NightLife;