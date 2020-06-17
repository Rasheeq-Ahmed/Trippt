
import { RECEIVE_ATTRACTION, 
         RECEIVE_ATTRACTIONS,
         LOADING_ATTRACTION,
         LOADING_ATTRACTIONS
        } from "../actions/attraction_actions"
import { RECEIVE_USER_TRIPS } from "../actions/trip_actions";

const initialState = {
    loading: false
};

const UIReducer = (state = initialState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ATTRACTIONS:
            return Object.assign({}, state, { loading: false });
        case LOADING_ATTRACTIONS:
            return Object.assign({}, state, { loading: true });
        case RECEIVE_ATTRACTION:
            return Object.assign({}, state, { loading: false });
        case LOADING_ATTRACTION:
            return Object.assign({}, state, { loading: true });
        case RECEIVE_USER_TRIPS:
            return Object.assign({}, state, { loading: false});
        default:
            return state;
    }
}

export default UIReducer