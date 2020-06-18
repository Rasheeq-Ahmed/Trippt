import * as profileAPIUtil from '../util/profile_api_util'

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = (data) => {
    return {
        type: RECEIVE_USER_PROFILE,
        data
    }
}

export const getUserProfile = (userId) => dispatch => {
    return profileAPIUtil.getUserProfile(userId)
        .then((profile) => dispatch(receiveUserProfile(profile)))
}

export const createUserProfile = (data) => dispatch => {
    return profileAPIUtil.createUserProfile(data)
        .then((profile) => dispatch(receiveUserProfile(profile)))
}

export const updateUserProfile = (userId, data) => dispatch => {
    return profileAPIUtil.updateUserProfile(userId, data)
        .then((profile) => dispatch(receiveUserProfile(profile)))
}

