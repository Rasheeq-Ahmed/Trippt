import React, { Component } from 'react'
import Card from './attraction-card'
import '../test/carry.css'
import { Link } from 'react-router-dom';

import { LOCATIONS } from '../../assets/locations'

class AttractionSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            attractions: this.props.attractions
        }

        this.slideLeft = this.slideLeft.bind(this)
        this.slideRight = this.slideRight.bind(this)
    }

    slideLeft() {
        let last = this.state.attractions.slice(-1)[0]
        let rest = this.state.attractions.slice(0, -1)
        // console.log(last)
        // console.log(rest)
        let attractions = [last, ...rest]
        this.setState({ attractions: attractions });
    }

    slideRight() {
        let [first, ...rest] = this.state.attractions;
        // console.log(first)
        // console.log(rest)
        let attractions = [...rest, first];
        this.setState({ attractions: attractions });
    }

    renderSlides() {
        const attractions = this.state.attractions;
        return (
            <div className="slider-cards" style={{

            }}>
                {
                    attractions.map((attraction, index) => {
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
                    {console.log(this.state.attractions)}
                </div>

            </div>
        )
    }
}

export default AttractionSlider;


