import React, { Component } from 'react'
import Card from './attraction-card'
import './attraction.css'
import { Link } from 'react-router-dom';


class NightlifeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nightlives: this.props.nightlives,
      nightlife: this.props.nightlives[0],
      activeIndex: this.props.activeIndex,
    };

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight = () => {
    // const newIndex = this.props.activeIndex + 1;
    if (this.state.activeIndex === this.state.nightlives.length - 1) {
      this.setState({ activeIndex: 0 });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
        nightlife: this.state.nightlives[this.props.activeIndex],
      });
    }
  };

  slideLeft = () => {
    // const newIndex = this.state.location.index - 1;
    if (this.state.activeIndex === 0) {
      this.setState({ activeIndex: this.state.nightlives.length - 1 });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
        nightlife: this.state.nightlives[this.props.activeIndex],
      });
    }
  };

  render() {
    console.log(this.state.activeIndex);
    console.log(this.state.nightlives);
    let sliderStyle = {
      transform: `translateX(${
        (this.state.activeIndex * -100) / this.state.nightlives.length
      }%)`,
      transition: "1s",
    };
    // console.log(this.state.location.index)
    const { nightlives, nightlife, activeIndex } = this.state;
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
              // disabled={this.state.activeIndex === attractions.length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="test-slider">
          <div className="test-slider-wrapper" style={sliderStyle}>
            {nightlives.map((nightlife, index) => {
              return (
                <div className="card-contain">
                  <Link
                    to={
                      this.props.tripId
                        ? `/attraction/${nightlife.location_id}/${nightlife.name}/${this.props.tripId}`
                        : `/attraction/${nightlife.location_id}/${nightlife.name}`
                    }
                  >
                    <Card
                      attraction={nightlife}
                      key={index}
                      activeIndex={activeIndex}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NightlifeSlider;


