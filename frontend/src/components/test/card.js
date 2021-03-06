import React from 'react'
import { Link } from "react-router-dom";
import NotFound from '../../assets/image-not-found.png'

import './test.css'
function CARD(props) {
  if(!props.location) return null;
    return (
      <div
        className="testCard"
        style={{
          ...styles.card,
          //   backgroundColor: props.color,
          left: `${props.x}px`,
          top: `${props.y}px`,
        //   zIndex: props.zIndex,
          transform: `translate(-50%, -50%) scale(${props.scale})`,
          backgroundImage: `url(${props.location.photo ? props.location.photo.images.medium.url : NotFound})`,
        }}
      >
        {/* {console.log(props)} */}
        <Link
          className="city-link "
          to={
            props.tripId
              ? `/attraction/${props.location.location_id}/${props.location.name}/${props.tripId}`
              : `/attraction/${props.location.location_id}/${props.location.name}`
          }
        >
          <div className="slide-city">
            <h1 className="card-att-name">{props.location.name}</h1>
          </div>

          {/* <Link to={`/attraction/${this.props.attraction.location_id}/${this.props.attraction.name}`}>Click</Link> */}
        </Link>

        {/* <h2 className="">{props.location.location}</h2> */}
      </div>
    );
}



 const styles = {
   card: {
     position: "absolute",
    //  top: "50%",
    //  left: "50%",
     transform: "translate(-50%, -50%)",
     height: "15em",
     width: "20em",
    //  backgroundColor: "red",
    //  border: "2px solid black",
    //  boxSizing: "border-box",
    borderRadius: '0.5em'
    //  backgroundImageSize: 'cover'
    
   },
 };

export default React.memo(CARD);
