import React from 'react'
import { Link } from 'react-router-dom'

export const Trip = (props) => {
    return (
        <div>
            {props.trips.map((trip, idx) => (
                <div className='trip-container' key={idx}>
                    <div className="trip-header">
                        <h3 className='trip-city'> My Trip to {trip.location}</h3>
                        <div className='header-actions'>
                            <button>
                                <Link to={`/attractions/${trip.locationId}/${trip.location}/${trip._id}`}>Find Attractions</Link>
                            </button>
                            <button onClick={() => props.removeTrip(trip._id)}> Remove Trip </button>
                        </div>
                    </div>
                    <ul id="trip">
                        {trip.attractions ? trip.attractions.map((att, idx) => (
                            <div key={idx} className='attrac-container'>
                                <img src={`${att.photo.images.small.url}`}
                                    alt="" />
                                <div className='attrac-details'>
                                    <h2 id ='attrac-name'>{att.name}</h2>
                                    <p id='attrac-ranking'>{att.ranking}</p> 
                                    <p id='attrac-address'>Address: {att.address_obj.street1}</p>
                                    <p id='attrac-description'>Description: {att.description}</p>
                                    <div className="attrac-actions">
                                        <Link
                                            to={`/attraction/${att.location_id}/${att.name}/${trip._id}`}>
                                            Details </Link>
                                        <a href={att.website} target="_blank">Website</a>
                                        <a href={att.booking.url} target="_blank">Book</a>
                                        <p onClick={() => props.removeAttrac(trip._id, att.location_id)}>Remove</p>
                                    </div>
                                </div> 
                               
                            </div>
                        )) : null}
                    </ul>

                </div>
            ))}
        </div>
    )
}