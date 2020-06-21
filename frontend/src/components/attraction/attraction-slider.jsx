import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from './attraction-card'
import '../test/carry.css'

import { LOCATIONS } from '../../assets/locations'

class AttractionSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: this.props.attractions,
      attraction: this.props.attractions[0],
      activeIndex: this.props.activeIndex,
    };

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight = () => {
    let [first, ...rest] = this.state.attractions;
    // console.log(first);
    // console.log(rest);
    let attractions = [...rest, first];
    this.setState({
      attractions: attractions,
      activeIndex: this.state.activeIndex + 1,
    });
  };
    // const newIndex = this.props.activeIndex + 1;
  //    let [first, ...rest] = this.state.attractions;
  //    let attractions = [...rest, first];

  //       this.setState({
  //         activeIndex: this.state.activeIndex + 1,
  //         attraction: this.state.attractions[this.props.activeIndex],
  //         attractions: this.state.attractions
  //       });

  
  // };

  slideLeft = () => {
    // const newIndex = this.state.location.index - 1;
    if (this.state.activeIndex === 0) {
      this.setState({ activeIndex: this.state.attractions.length - 1 });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
        attraction: this.state.attractions[this.props.activeIndex],
      });
    }
  };



  render() {
    // console.log(this.state.activeIndex);
    // console.log(this.state.attractions);
    let sliderStyle = {
      transform: `translateX(${
        (this.state.activeIndex * -100) / this.state.attractions.length
      }%)`,
      transition: "1s",
    };
    // console.log(this.state.location.index)
    const { attractions, attraction,activeIndex } = this.state;
    // console.log(location.index)
    return (
      <div className="test-all">
          <div className="control-cont">

        <div className="carry-controls">
          <button
            className="slide-btn"
            onClick={() => this.slideLeft()}
            // disabled={this.state.activeIndex === 0}
            >
            &lt;
          </button>
          <button
            className="slide-btn"
            onClick={() => this.slideRight()}
            // disabled={this.state.activeIndex === attractions.length - 2}
            >
            &gt;
          </button>
        </div>
        </div>
        <div className="test-slider">
          <div className="test-slider-wrapper" style={sliderStyle}>
            {attractions.map((attraction, index) => {

              if(attraction.name) {
                return (
                  <div className="card-contain">
                    {/* <Link
                      to={
                        this.props.tripId
                          ? `/attraction/${attraction.location_id}/${attraction.name}/${this.props.tripId}`
                          : `/attraction/${attraction.location_id}/${attraction.name}`
                      }
                    > */}
                      <Card
                        attraction={attraction}
                        key={index}
                        activeIndex={activeIndex}
                      />
                    {/* </Link> */}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AttractionSlider;


