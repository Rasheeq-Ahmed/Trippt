import React from 'react'
import './test.css'
function CARD(props) {
    return (
      <div
        className="testCard"
        style={{
          ...styles.card,
          //   backgroundColor: props.color,
          left: `${props.x}px`,
            top: `${props.y}px`,
          zIndex: props.zIndex,
          transform: `translate(-50%, -50%) scale(${props.scale})`,
          backgroundImage: `url(${props.location.url})`,
        }}
      >
        {/* {console.log(props)} */}

        <h2 className="">{props.location.location}</h2>
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
     width: "15em",
    //  backgroundColor: "red",
    //  border: "2px solid black",
    //  boxSizing: "border-box",
    //  backgroundImageSize: 'cover'
    
   },
 };

export default CARD;
