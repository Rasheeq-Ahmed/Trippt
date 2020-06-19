import React, { Component } from 'react'
import Card from './attraction-card'
import './attraction.css'
import { Link } from 'react-router-dom';


class RestaurantSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: this.props.restaurants,
      restaurant: this.props.restaurants[0],
      activeIndex: this.props.activeIndex,
    };

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight = () => {
    // const newIndex = this.props.activeIndex + 1;
    if (this.state.activeIndex === this.state.restaurants.length - 1) {
      this.setState({ activeIndex: 0 });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
        restaurant: this.state.restaurants[this.props.activeIndex],
      });
    }
  };

  slideLeft = () => {
    // const newIndex = this.state.location.index - 1;
    if (this.state.activeIndex === 0) {
      this.setState({ activeIndex: this.state.restaurants.length - 1 });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
        restaurant: this.state.restaurants[this.props.activeIndex],
      });
    }
  };

  render() {
    let sliderStyle = {
      transform: `translateX(${
        (this.state.activeIndex * -100) / this.state.restaurants.length
      }%)`,
      transition: "1s",
    };
    // console.log(this.state.location.index)
    const { restaurants, restaurant, activeIndex } = this.state;
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
              // disabled={this.state.activeIndex === restaurants.length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="test-slider">
          <div className="test-slider-wrapper" style={sliderStyle}>
            {restaurants.map((restaurant, index) => {
              if(restaurant.name) {
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
                      attraction={restaurant}
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


export default RestaurantSlider;


