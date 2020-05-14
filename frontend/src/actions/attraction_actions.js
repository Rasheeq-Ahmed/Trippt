import * as AttAPIUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';

const receiveAttractions = (attractions, city) => {
    return {
        type: RECEIVE_ATTRACTIONS,
        attractions,
        city
    }
};

export const getAttractions = (locationId,city) => dispatch => {
    return AttAPIUtil.getAttractions(locationId)
        .then((attractions) => dispatch(receiveAttractions(attractions, city)))
        // .then(attractions => console.log(attractions))
        .catch(error => console.log(error))
};