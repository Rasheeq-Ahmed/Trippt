import React, { Component } from 'react'
import Card from './card'
import './carry.css'
import {LOCATIONS} from '../../assets/locations'

class Carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            locations: LOCATIONS,
            location: LOCATIONS[0]
        }

        this.slideLeft = this.slideLeft.bind(this)
        this.slideRight = this.slideRight.bind(this)
    }

    slideLeft() {
        let last = this.state.locations.slice(-1)[0]
        let rest = this.state.locations.slice(0, -1)
        console.log(last)
        console.log(rest)
        let locations = [last, ...rest]
        this.setState({ locations: locations });
    }

    slideRight() {
        let [first, ...rest] = this.state.locations;
        console.log(first)
        console.log(rest)
        let locations = [...rest, first];
        this.setState({ locations: locations });
    }

    renderSlides() {
        const locations = this.state.locations;
        return (
            <div className="slider-cards">
                {
                    locations.map((location, index) => {
                        return (
                            <Card location={location} key={index} />
                        )
                    })
                }
            </div>
        )
    }



    
    render() {
         let sliderStyle = {
           transform: `translateX(${
             (this.state.location.index * -100) / this.state.locations.length
           }%)`,
           transition: "1s",
         };

        // {console.log(this.state.locations)}
        // {console.log(LOCATIONS)}
        return (

            <div className="carry-all">
                <div className="carry-controls">
                    <button className="slide-btn" onClick={this.slideLeft}>{"<"}</button>
                    <button className="slide-btn" onClick={this.slideRight}>{">"}</button>

                        {/* {console.log(this.state.locations[0])} */}
                 </div>
                <div className="carry-container" style={sliderStyle}>
                {this.renderSlides()}

                </div>

            </div>
        )
    }
}

export default Carousel;


