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

    let { trip, tripId, LOCATIONS, getLocation, showTrip, showConfirmDelete } = props
    
    const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            // target.style.display ="none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
        const target = e.target;

        // target.style.display ="none";

    }



    return (
        
        <div className="trip-icon"id={props.id}
            // className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
             style={{ backgroundImage: getLocation(trip.location, LOCATIONS) ? `url(${getLocation(trip.location, LOCATIONS).url})` : null }}
        >


            <span id='remove-btn' onClick={() => showConfirmDelete(trip._id)}>&times;</span>
            <div className="rest" onClick={() => showTrip(tripId)} >
            <p id='location-name'>{trip.location}</p>

            </div>
        </div>
    )

}