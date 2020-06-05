import { LOCATIONS } from "../../assets/locations";
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './slider.css'

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { landing: LOCATIONS };
    }
    render() {
        return (
            <section>
                {
                    this.state.landing.map((s, index) =>
                        <div className={
                            index === this.props.activeIndex ? 'active' : 'inactive'}
                            key={index}>
                            
                            <Link to={`/attractions/${s.locationId}/${s.location}`} ><h1>{s.location}</h1><img id="photo" src={`${s.url}`} alt=""/></Link>
                        </div>
                    )}
            </section>
        )
    }
}
export default Slide;