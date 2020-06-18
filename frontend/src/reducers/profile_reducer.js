import { RECEIVE_USER_PROFILE } from '../actions/profile_actions'
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions'

const ProfileReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_USER_PROFILE:
            
            return Object.assign({}, state, action.data.data);

        case RECEIVE_USER_LOGOUT:
            return {};
            
        default:
            return state;
    }
}

export default ProfileReducer