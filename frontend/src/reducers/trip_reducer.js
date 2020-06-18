import { RECEIVE_TRIPS, RECEIVE_TRIP, REMOVE_TRIP, RECEIVE_USER_TRIPS, REMOVE_ATTRAC } from '../actions/trip_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions'

const TripReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {}
    switch (action.type) {
        case RECEIVE_TRIPS:
            
            return Object.assign({}, action.trips);
        
        case RECEIVE_TRIP:
            return Object.assign({}, state, {[action.trip.data._id]: action.trip.data});
            
        case RECEIVE_USER_TRIPS:
            
            action.trips.data.forEach(trip => {
                nextState[trip._id] = trip
            })
            return nextState;
        
        case REMOVE_ATTRAC:
            nextState = Object.assign({}, state)
            let attractions = nextState[action.tripId].attractions
            let newAttractions = attractions.filter(attrac => attrac.location_id !== action.attracId)
            nextState[action.tripId].attractions = newAttractions
            return nextState
        
        case REMOVE_TRIP:
            nextState = Object.assign({}, state)
            delete nextState[action.id]
            return nextState;
        
        case RECEIVE_USER_LOGOUT:
            return {}

        default:
            return state;
    }
};

export default TripReducer