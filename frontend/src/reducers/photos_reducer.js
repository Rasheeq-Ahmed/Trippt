import { RECEIVE_PHOTOS } from '../actions/attraction_actions';

const PhotoReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, { [action.locationId]: action.photos.data.data });
        default:
            return state;
    }
};

export default PhotoReducer