import React from 'react'
import './trips_modal.css'
import { Link } from 'react-router-dom'

class TripModal extends React.Component {

    render() {
        if (!this.props.show) {
            return null
        }

        const outsideClick = (e) => {
            let modal = document.getElementById("container");
            if (e.target === modal) {
                this.props.closeModal()
            }
            {console.log(modal)}
        }

        return (
            <div className="dest-modal-container" id="container" onClick={(e)=>outsideClick(e)}>
                <div className="dest-modal" id="modal">
                    <div className="dest-modal-header">
                        <h2>My Trips</h2>

                        <div className='dest-modal-actions'>
                            {/* <Link to="/profile">
                                <button>Profile</button>
                            </Link> */}
                            <button
                                className="dest-modal-close-btn"
                                onClick={() => { this.props.closeModal() }}>
                                &times;</button>
                        </div>
                    </div>
                    <div className="dest-modal-content">
                        {Object.values(this.props.trips).map((trip, idx) => (
                            <div key={idx} className="content-item">
                                {trip.location} 
                                <p className="remove-btn" onClick={()=> this.props.removeTrip(trip._id)}>remove</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default TripModal