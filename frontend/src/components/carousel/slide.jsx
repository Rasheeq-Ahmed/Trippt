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
            <section>
                {
                    this.state.landing.map((loc, index) =>
                        <div className={
                            index === this.props.activeIndex ? 'active' : 'inactive'}
                            key={index}>
                            
                            <Link to={`/attractions/${loc.locationId}/${loc.location}`} ><h1>{loc.location}</h1><img id="photo" src={`${loc.url}`} alt=""/></Link>
                        </div>
                    )}
            </section>
        )
    }
}
export default Slide;