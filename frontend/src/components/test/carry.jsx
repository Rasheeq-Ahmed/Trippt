import React, { Component } from 'react'
import {LOCATIONS} from "../../assets/locations"
import Card from './card'
import './test.css'




 class Carry extends Component {
   constructor(props) {
     super(props);

     this.state = {
       locations: LOCATIONS,
       location: LOCATIONS[0],
       activeIndex: 0,
     };
     //  this.nextLocation = this.nextLocation.bind(this);
     //  this.nextLocation = this.nextLocation.bind(this);

     //      let sliderStyle = {
     //      transform: `translateX(${this.state.activeIndex * -100}%)`,
     //      transition: '0.2s'
     //  }
   }

   nextLocation = () => {
     const newIndex = this.state.location.index + 1;
     this.setState({
       location: LOCATIONS[newIndex],
     });
   };

   prevLocation = () => {
     const newIndex = this.state.location.index - 1;
     this.setState({
       location: LOCATIONS[newIndex],
     });
   };



   render() {
    //  console.log(this.state.location.index);
    let sliderStyle = {
      transform: `translateX(${(this.state.location.index * -100/this.state.locations.length)}%)`,
      transition: "1s",
    };
     // console.log(this.state.location.index)
     const { locations, location } = this.state;
     // console.log(location.index)
     return (
       <div className="test-all">
         <div className="carry-controls">
         <button
           onClick={() => this.prevLocation()}
           disabled={location.index === 0}
         >
           Prev
         </button>
         <button
           onClick={() => this.nextLocation()}
           disabled={location.index === locations.length - 1}
         >
           Next
         </button>

         </div>

         <div className="test-slider">
           <div
             className="test-slider-wrapper"
             style={sliderStyle}
           >
             {locations.map((location) => (

               <Card key={location.locationId} location={location} />
             ))}
           </div>
         </div>
       </div>
     );
   }
 }

 export default Carry;













//  class Carry extends Component {
//    constructor(props) {
//      super(props);

//      this.state = {
//        locations: LOCATIONS,
//        location: LOCATIONS[0],
//        activeIndex: 0,
//      };
//    }

//    render() {
//      const settings = {
//        dots: true,
//        infinite: true,
//        speed: 500,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        className: "test-slides",
//      };

//      console.log(this.state.location.index);
//      const { locations, location } = this.state;
//      console.log(location.index);
//      return (
//        <div className="test-all">
//          <div className="test-slider">
//            <Slider {...settings}>
//              <div className="test-slider">
//                {locations.map((location) => (
//                  <Card key={location.locationId} location={location} />
//                ))}
//              </Slider>
//            </div>
//          </div>
//        </div>
//      );
//    }
//  }

//  export default Carry;
