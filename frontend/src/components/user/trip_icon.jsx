import React from 'react'

export const ConfirmDelete = (props) => {
    if(!props.confirmDelete) return null;

    return (
        <div className='confirm-delete-container'>
            <div className='confirm-delete'>
                <h1 id="confirm-delete-msg">Are you sure you want to delete this trip?</h1>
                <span className='confirm-delete-actions'>
                    <button onClick={() => {props.removeTrip(props.tripId); props.closeConfirmDelete()}}>Yes</button>
                    <button onClick={() => props.closeConfirmDelete() }>No</button>
                </span>
            </div>
        </div>
    )
}

export const TripIcon = (props) => {

    let {trip, tripId, LOCATIONS, getLocation, showTrip, showConfirmDelete} = props

    return (
        <div className="trip-icon"
             style={{ backgroundImage: getLocation(trip.location, LOCATIONS) ? `url(${getLocation(trip.location, LOCATIONS).url})` : null }}
        >
            <p id='location-name'
               onClick={() => showTrip(tripId)}
            >{trip.location}</p>
            <p id='remove-btn' onClick={() => showConfirmDelete(trip._id)}>&times;</p>
        </div>
    )

}