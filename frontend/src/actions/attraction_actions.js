import * as AttAPIUtil from '../util/attraction_api_util';
import * as SAttAPIUtil from '../util/single_attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';

const receiveAttractions = (attractions) => {
    return {
        type: RECEIVE_ATTRACTIONS,
        attractions
    }
};

const receiveAttraction = (attraction) => {
    return {
        type: RECEIVE_ATTRACTION,
        attraction,
    }
};



export const getAttractions = (locationId) => dispatch => {
    return AttAPIUtil.getAttractions(locationId)
        .then((attractions) => dispatch(receiveAttractions(attractions)))
        // .then(attractions => console.log(attractions))
        .catch(error => console.log(error))
};

export const getAttraction = (locationId) => dispatch => {
    return SAttAPIUtil.getAttraction(locationId)
        .then((attraction) => dispatch(receiveAttraction(attraction)))
        .catch(error => console.log(error))
};
