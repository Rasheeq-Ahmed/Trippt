import React from 'react';
import { Link } from 'react-router-dom';
import './attraction_show.css'


class AttractionShow extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.getAttraction(this.props.locationId)
  // };

  


  render(){
    // if (!this.props.attraction) {
    //   return null;
    // }

        
    // const getPhotos = (photos) => {
    //   for(var key in photos){
    //     if(key === "images"){
    //       return photos[key];
    //     }
    //   }
    // }

    // const getImages = (obj) => {
    //   for(var key in obj){
    //     if(key === "medium"){
    //       return obj[key]
    //     }
    //   }
    // }

    // const getUrl = (obj) => {
    //   for(var key in obj){
    //     if(key === 'url'){
    //       return obj[key]
    //     }
    //   }
    // }

    return(
        <div className="show">
        <div className="show-header">
          <h1>
            <Link to="/">Trippt</Link>
          </h1>
        </div>
        <div className="show-body">
          <div className="show-inner-body">
            
          </div>
        </div>

        <div className="show-footer"></div>
      </div>
        
      //   <div className="show-photo">
      //     <img src={`${getUrl(getImages(getPhotos(this.props.attraction.photo)))}`} alt=""/>
      //   </div>
      //   <div>{this.props.attraction.name}
      //     {/* {console.log(this.props)} */}
      //     <div>{this.props.attraction.address}</div>
      //     <div>{this.props.attraction.description}</div>
      //     <div>{this.props.attraction.website}</div>
      //     <div>{this.props.attraction.ranking}</div>
      //     <div>{this.props.attraction.rating}</div>
      //     <div>{this.props.attraction.recommended_visit_length}</div>
      //   </div>
      // </div>
    )
  }
}

export default AttractionShow;