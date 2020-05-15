import { RECEIVE_NIGHTLIFE} from '../actions/nightlife_actions';

const NightlifeReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NIGHTLIFE:
            return Object.assign({}, state, {[action.city]: action.nightlife.data.data});
    
        default:
            return state;
    }
};

export default NightlifeReducer