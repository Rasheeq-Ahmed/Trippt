import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const AttractionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ATTRACTIONS:
            return Object.assign({}, state, { [action.city]: action.attractions.data.data });
        case RECEIVE_ATTRACTION:
            return Object.assign({}, state, {[action.attraction.data.name]: action.attraction.data});
        default:
            return state;
    }
};

export default AttractionReducer