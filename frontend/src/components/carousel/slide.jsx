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
                            <Link className='city-link' to={`/attractions/${loc.locationId}/${loc.location}`}>
                        <div className='city-container' key={index}>
                            
                                

                                <div className='slide' style={{ backgroundImage: `url(${loc.url})`}}>
                                <h1 className='slide-city'>{loc.location}</h1>

                                {/* <img id="slide-photo" src={`${loc.url}`} alt=""/> */}
                                </div>
                                
                        </div>
                                </Link>
                    )}
            </div>
        )
    }
}
export default Slide;