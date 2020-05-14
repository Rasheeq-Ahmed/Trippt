import * as ResAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

const receiveRestaurants = (restaurants, city) => {
    return {
        type: RECEIVE_RESTAURANTS,
        restaurants,
        city
    }
};

export const getRestaurants = (locationId, city) => dispatch => {
    return ResAPIUtil.getRestaurants(locationId)
        .then((restaurants) => dispatch(receiveRestaurants(restaurants, city)))
        .catch(error => console.log(error))
};