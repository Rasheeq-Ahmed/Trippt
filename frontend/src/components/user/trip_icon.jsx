import React from 'react'

export const TripIcon = (props) => {

    let {trip, tripId, LOCATIONS, getLocation, showTrip, removeTrip} = props
    
    const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            // target.style.display ="none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
        const target = e.target

        // target.style.display ="none";

    }



    return (
        <div className="trip-icon" id={props.id}
            // className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
             style={{ backgroundImage: getLocation(trip.location, LOCATIONS) ? `url(${getLocation(trip.location, LOCATIONS).url})` : null }}
        >
            <p id='location-name'
               onClick={() => showTrip(tripId)}
            >{trip.location}</p>
            <p id='remove-btn' onClick={() => removeTrip(trip._id)}>&times;</p>
        </div>
    )

}