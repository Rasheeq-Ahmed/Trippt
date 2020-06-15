import React from 'react'
import './trips_modal.css'
import { Link } from 'react-router-dom'
import { LOCATIONS } from "../../assets/locations"

class TripModal extends React.Component {

    findPhoto(tripName, locations) {
        for(let i = 0; i < locations.length; i ++) {
            if (locations[i].location === tripName) {
                return locations[i].url
            }
        }
        return
    }

    render() {
        if (!this.props.show) {
            return null
        }

        const outsideClick = (e) => {
            let modal = document.getElementById("container");
            if (e.target === modal) {
                this.props.closeModal()
            }
        }

        return (
            <div className="dest-modal-container" id="container" onClick={(e)=>outsideClick(e)}>
                <div className={"dest-modal"}
                     id="modal">
                    <div className="dest-modal-header">
                        <h2>My Trips</h2>

                        <div className='dest-modal-actions'>
                            <button
                                className="dest-modal-close-btn"
                                onClick={() => { this.props.closeModal() }}>
                                &times;</button>
                        </div>
                    </div>
                    <div className="dest-modal-content">
                        {Object.values(this.props.trips).map((trip, idx) => (
                            <div key={idx} className="content-item">
                                <div>

                                </div>
                                <p>{trip.location}</p>
                                <p>Attractions: {trip.attractions.length}</p>
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