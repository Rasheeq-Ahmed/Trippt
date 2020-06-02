import React from 'react';
import { Link } from 'react-router-dom';
import './attraction_show.css'
import NavBar from '../nav/navbar';
import { urlencoded } from 'body-parser';


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
      <div className="show-all">
        <div className="show-header">
          <NavBar />
        </div>
        <div className="show-body">
          <div className="show-content">
            <div className="show-left">
              <span className="att-name">{this.props.attraction.name} </span>
              <span className="att-add">
                {" "}
                Address: {this.props.attraction.address}
              </span>
              <span>Ranking: {this.props.attraction.ranking}</span>
              <span>Rating: {this.props.attraction.rating}</span>
              <span>
                Recommended Visit Length:{" "}
                {this.props.attraction.recommended_visit_length}
              </span>
              <a
                href={this.props.attraction.website}
                target="_blank"
              >{`Visit ${this.props.attraction.name}'s website`}</a>

              <div className="att-des">
                {" "}
                {this.props.attraction.description}
              </div>
              <button>Add to my trip</button>
            </div>
            <div className="show-right">
              <div className="show-photo">
                <img className='photo'
                  src={`${getUrl(
                    getImages(getPhotos(this.props.attraction.photo))
                  )}`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="show-footer"></div>
        </div>
      </div>
    );
  }
}

export default AttractionShow;