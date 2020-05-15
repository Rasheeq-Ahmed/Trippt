import React from 'react';
import { Link } from 'react-router-dom';
import './attraction_show.css'
import NavBar from '../nav/navbar';


class AttractionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAttraction(this.props.locationId)
  };

  


  render(){
    if (!this.props.attraction) {
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
        if(key === "medium"){
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
        <div className="show-all">
        <div className="show-header">
         <NavBar/>
        </div>
        <div className="show-body">
          <div className="show-content">
            <div className='show-left'>
        <div>{this.props.attraction.name}
          {/* {console.log(this.props)} */}
          <div>{this.props.attraction.address}</div>
          <div>{this.props.attraction.description}</div>
          <div>{this.props.attraction.website}</div>
          <div>{this.props.attraction.ranking}</div>
          <div>{this.props.attraction.rating}</div>
          <div>{this.props.attraction.recommended_visit_length}</div>
        </div>
              </div>
            <div className="show-right">
        <div className="show-photo">
          <img src={`${getUrl(getImages(getPhotos(this.props.attraction.photo)))}`} alt=""/>
        </div>
            </div>
          </div>
        </div>

        <div className="show-footer"></div>
      </div>
        
      // </div>
    )
  }
}

export default AttractionShow;