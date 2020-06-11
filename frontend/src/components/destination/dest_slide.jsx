import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createTrip } from '../../actions/trip_actions'
import './dest_slide.css'

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { landing: this.props.data };
    }


    render() {
        let { user, createTrip } = this.props

        return (

            <div className='slides'>
                {
                    this.state.landing.map((loc, index) =>
                        <div className='city-container' key={index}>



                            <div className='slide' style={{ backgroundImage: `url(${loc.url})` }}>
                                <Link className='city-link' to={`/attractions/${loc.locationId}/${loc.location}`}>
                                    <h1 className='slide-city'>{loc.location}</h1>
                                </Link>
                                <button className={user ? "btn-show" : ""}
                                    onClick={() => createTrip({ location: loc.location, locationId: loc.locationId })}
                                >Add To My Trips </button>
                            </div>

                        </div>
                    )}
            </div>
        )
    }
}

const mSTP = state => {
    return {
        user: state.session.isAuthenticated
    }
};

const mDTP = dispatch => {
    return {
        createTrip: (data) => dispatch(createTrip(data))
    }
}
export default connect(mSTP, mDTP)(Slide);