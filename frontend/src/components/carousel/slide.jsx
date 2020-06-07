import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './slider.css'

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { landing: this.props.data };
    }
    render() {
        return (

            
            <div className='slides'>
                {
                    this.state.landing.map((loc, index) =>
                        <div className={
                            index === this.props.activeIndex ? 'active' : 'inactive'}
                            key={index}>
                            
                            <Link to={`/attractions/${loc.locationId}/${loc.location}`}>
                                <ul className="cities">
                                <li className="city">

                                <div className='slide' style={{ backgroundImage: `url(${loc.url})`}}>
                                <h1 className='slide-city'>{loc.location}</h1>

                                {/* <img id="slide-photo" src={`${loc.url}`} alt=""/> */}
                                </div>
                                </li>
                                </ul>
                                </Link>
                        </div>
                    )}
            </div>
        )
    }
}
export default Slide;