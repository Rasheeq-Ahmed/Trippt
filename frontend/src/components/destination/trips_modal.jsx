import React from 'react'
import './trips_modal.css'
import { Link } from 'react-router-dom'

class TripModal extends React.Component {

    render() {
        if (!this.props.show) {
            return null
        }
        return (

            <div className="modal" id="modal">
                <h2>My Trips</h2>
                <div className="content">{this.props.children}</div>
                {Object.values(this.props.trips).map((trip, idx) => (
                    <div key={idx} id="trip-container">
                        {trip.location} 
                        <p onClick={()=> this.props.removeTrip(trip._id)}>remove</p>
                    </div>
                ))}
                <div className='actions'>
                    <button
                        className="toggle-button"
                        onClick={() => { this.props.closeModal() }}>

                        Stay </button>
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default TripModal