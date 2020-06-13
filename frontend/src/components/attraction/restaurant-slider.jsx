import React, { Component } from 'react'
import Card from './attraction-card'
import '../test/carry.css'
import { Link } from 'react-router-dom';


class RestaurantSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurant: this.props.restaurant
    }

    this.slideLeft = this.slideLeft.bind(this)
    this.slideRight = this.slideRight.bind(this)
  }

  slideLeft() {
    let last = this.state.restaurant.slice(-1)[0]
    let rest = this.state.restaurant.slice(0, -1)
    let restaurant = [last, ...rest]
    this.setState({ restaurant: restaurant });
  }

  slideRight() {
    let [first, ...rest] = this.state.restaurant;
    let restaurant = [...rest, first];
    this.setState({ restaurant: restaurant });
  }

  renderSlides() {
    const restaurant = this.state.restaurant;
    return (
      <div className="slider-cards" style={{

      }}>
        {
          restaurant.map((attraction, index) => {
            return (
              <div>
                <Link to={this.props.properties.userTrips ? `/attraction/${attraction.location_id}/${attraction.name}/${Object.keys(this.props.properties.userTrips)[0]}` : `/attraction/${attraction.location_id}/${attraction.name}`}>
                  <Card attraction={attraction} key={index} /></Link>

              </div>
            )
          })
        }
      </div>
    )
  }




  render() {
    return (
      <div className="carry-all">
        <div className="carry-controls">
          <button className="slide-btn" onClick={this.slideLeft}>{"<"}</button>
          <button className="slide-btn" onClick={this.slideRight}>{">"}</button>

        </div>
        <div className="carry-container">
          {this.renderSlides()}
          {/* {console.log(this.state.restaurant)} */}
        </div>

      </div>
    )
  }
}

export default RestaurantSlider;


