import React from 'react'
import { Link } from 'react-router-dom';
import NotFound from '../../assets/image-not-found.png'


export const AttractionModal = (props) => {


        let { trip, tripId, removeAttrac, show, closeTrip, outsideClose, current } = props
        if (!show || (current !== tripId) ) { 
            return null
        }
        return (
            <div id="modal-container" className='modal-container' onClick={(e)=>outsideClose(e)}>
                    <div className='trip-container'>
                        <div className="trip-header">
                            <h3 className='trip-city'> My Trip to {trip.location}
                            <button id="trip-city-btn" onClick={()=> closeTrip()}>&times;</button></h3>
                            
                        </div>
                        <div className='trip-header-2'>
                            <p className='attrac-count '>Places to go {`(${trip.attractions.length})`}</p>
                            <Link to={`/attractions/${trip.locationId}/${trip.location}/${trip._id}`}>
                                     {trip.attractions.length ? 'Find More...' : 'Find Attractions'}
                                </Link>
                        </div>
                        <ul id="trip" className='attrac-ul'>
                            {trip.attractions ? trip.attractions.map((att, idx) => (
                                <div key={idx} className='attrac-container'>
                                    <Link
                                        to={`/attraction/${att.location_id}/${att.name}/${trip._id}`}>
                                    <img
                                        className='attrac-photo' 
                                        src={`${att.photo ? att.photo.images.small.url : NotFound}`}
                                        alt="" />
                                        </Link>

                                    <div className='attrac-details'>
                                         <Link
                                        to={`/attraction/${att.location_id}/${att.name}/${trip._id}`}>
                                        <h2 id ='attrac-name'>{att.name}</h2>
                                        </Link>
                                        <p id='attrac-ranking'>{att.ranking}</p> 
                                        <p id='attrac-address'>Address: {att.address_obj.street1 ? att.address_obj.street1 : att.address}</p>
                                        <p id='attrac-description'>Description: {att.description}</p>
                                        <div className="attrac-actions">
                                            <Link
                                                to={`/attraction/${att.location_id}/${att.name}/${trip._id}`}>
                                                Details </Link>
                                            <a href={att.website} target="_blank">Website</a>
                                            <a href={att.booking ? att.booking.url : null} target="_blank">Book</a>
                                            <p onClick={() => removeAttrac(trip._id, att.location_id)}>Remove Attraction</p>
                                        </div>
                                    </div> 
                                   
                                </div>
                            )) : null}
                        </ul>
    
                    </div>
            </div>
        
        )
     
}