import * as NlAPIUtil from '../util/nightlife_api_util';

export const RECEIVE_NIGHTLIFE = 'RECEIVE_NIGHTLIFE';

const receiveNightlife = (nightlife, city) => {
    return {
        type: RECEIVE_NIGHTLIFE,
        nightlife,
        city
    }
};

export const getNightlife = (locationId, city) => dispatch => {
    return NlAPIUtil.getNightlife(locationId)
        .then((nightlife) => dispatch(receiveNightlife(nightlife, city)))
        .catch(error => console.log(error))
};
