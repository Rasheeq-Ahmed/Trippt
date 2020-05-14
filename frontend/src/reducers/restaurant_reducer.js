import { RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return Object.assign({}, state, {[action.city]: action.restaurants.data.data});
    
        default:
            return state;
    }
};

export default RestaurantReducer