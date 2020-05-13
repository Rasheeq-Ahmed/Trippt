import * as AttAPIUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';

const receiveAttractions = (attractions, city) => ({
    type: RECEIVE_ATTRACTIONS,
    attractions,
    city
});

export const getAttractions = (locationId) => dispatch => (
    AttAPIUtil.getAttractions(locationId)
        .then((attractions, city) => dispatch(receiveAttractions(attractions, city)))
);