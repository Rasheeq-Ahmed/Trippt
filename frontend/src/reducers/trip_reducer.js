import { RECEIVE_TRIPS, RECEIVE_TRIP, REMOVE_TRIP } from '../actions/trip_actions';

const TripReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TRIPS:
            
            return Object.assign({}, action.trips);

        case RECEIVE_TRIP:

            return Object.assign({}, state, {[action.trip.id]: action.trip});
        
        case REMOVE_TRIP:
            let nextState = Object.assign({}, state)
            delete nextState[action.id]
            return nextState;
    
        default:
            return state;
    }
};

export default TripReducer