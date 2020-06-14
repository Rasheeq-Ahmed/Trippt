import React from 'react'

export const TripIcon = (props) => {

    let {trip, tripId, LOCATIONS, getLocation, showTrip, removeTrip} = props

    return (
        <div className="trip-icon"
             style={{ backgroundImage: getLocation(trip.location, LOCATIONS) ? `url(${getLocation(trip.location, LOCATIONS).url})` : null }}
        >
            <p id='location-name'
               onClick={() => showTrip(tripId)}
            >{trip.location}</p>
            <p id='remove-btn' onClick={() => removeTrip(trip._id)}>&times;</p>
        </div>
    )

}