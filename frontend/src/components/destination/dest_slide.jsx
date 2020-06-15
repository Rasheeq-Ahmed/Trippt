import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createTrip } from '../../actions/trip_actions'
import './dest_slide.css'

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.data
        }
    }



    render() {
        let { location } = this.state

        return (

            <div className='slide' style={{ backgroundImage: `url(${location.url})` }}>
                 <Link className='city-link' to={`/attractions/${location.locationId}/${location.location}`}>
                     <div className='slide-city'>
                        <h2 className=''>{location.location}</h2>
                        <h1 className=''>{location.country}</h1>
                     </div>

                </Link>
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