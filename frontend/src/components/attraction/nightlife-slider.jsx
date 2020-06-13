import React, { Component } from 'react'
import Card from './attraction-card'
import '../test/carry.css'
import { Link } from 'react-router-dom';


class NightlifeSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nightlife: this.props.nightlife
    }

    this.slideLeft = this.slideLeft.bind(this)
    this.slideRight = this.slideRight.bind(this)
  }

  slideLeft() {
    let last = this.state.nightlife.slice(-1)[0]
    let rest = this.state.nightlife.slice(0, -1)
    // console.log(last)
    // console.log(rest)
    let nightlife = [last, ...rest]
    this.setState({ nightlife: nightlife });
  }

  slideRight() {
    let [first, ...rest] = this.state.nightlife;
    // console.log(first)
    // console.log(rest)
    let nightlife = [...rest, first];
    this.setState({ nightlife: nightlife });
  }

  renderSlides() {
    const nightlife = this.state.nightlife;
    return (
      <div className="slider-cards" style={{

      }}>
        {
          nightlife.map((attraction, index) => {
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
    { console.log(this.state) }
    { console.log(this.props) }
    return (
      <div className="carry-all">
        <div className="carry-controls">
          <button className="slide-btn" onClick={this.slideLeft}>{"<"}</button>
          <button className="slide-btn" onClick={this.slideRight}>{">"}</button>

        </div>
        <div className="carry-container">
          {this.renderSlides()}
          {/* {console.log(this.state.nightlife)} */}
        </div>

      </div>
    )
  }
}

export default NightlifeSlider;


