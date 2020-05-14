import React from 'react';
import './attraction.css'


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

    function result(photos){
      for(var key in photos){
        if(key === "images"){
          return photos[key];
        }
      }
    }

    function another(obj){
      for(var key in obj){
        if(key === "large"){
          return obj[key]
        }
      }
    }

    function oneMore(obj){
      for(var key in obj){
        if(key === 'url'){
          return obj[key]
        }
      }
    }


    return(
      <div>
      {/* <div>{console.log(this.props.attractions.slice(0,10))}</div> */}
      <div>
        {this.props.attractions.map((place, idx) => (
          <div key={idx}>
            <span>{place.name}</span>
            {oneMore((another(result(place.photo)))) !== undefined} ? <img className="picture" src={`${oneMore((another(result(place.photo))))}`} alt=""/> : {""}
            
            {/* {console.log(result(place.photo))} */}
            {console.log(another(result(place.photo)))}
            {/* <span>{result(place.photo).map((pic,idx) => (
              <div key={idx}>
                <span>{console.log(pic.large)}</span>
              </div>
            ))}
            </span> */}

          </div>
        ))}
      </div>
      </div>
      )
  }
}

export default Attraction