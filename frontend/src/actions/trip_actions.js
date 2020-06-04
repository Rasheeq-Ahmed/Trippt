import * as tripAPIUtils from '../util/trip_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_USER_TRIPS = 'RECEIVE_USER_TRIPS'
export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const REMOVE_TRIP = 'REMOVE_TRIP';

const receiveTrips = (trips) => ({
    type: RECEIVE_TRIPS,
    trips
});

const receiveUserTrips = (trips) => ({
    type: RECEIVE_USER_TRIPS,
    trips
});

const receiveTrip = (trip) => {
    return {
        type: RECEIVE_TRIP,
        trip
    }
};

const deleteTrip = (id) => {
    return {
        type: REMOVE_TRIP,
        id
    }
};

export const getTrips = () => dispatch => (
    tripAPIUtils.getTrips()
        .then((trips) => dispatch(receiveTrips(trips)))
);

export const getTrip = (id) => dispatch => (
    tripAPIUtils.getTrip(id)
        .then((trip) => dispatch(receiveTrip(trip)))
);

export const getUserTrips = (user_id) => dispatch => (
    tripAPIUtils.getUserTrips(user_id)
        .then((trips) => dispatch(receiveUserTrips(trips)))
);

export const createTrip = (data) => dispatch => {
    return tripAPIUtils.createTrip(data)
        .then((trip) => dispatch(receiveTrip(trip)))
};

export const updateTrip = (tripId, data) => dispatch => {
    debugger
    return tripAPIUtils.updateTrip(tripId, data)
        .then((trip) => dispatch(receiveTrip(trip)))
};

export const removeTrip = (id) => dispatch => {
   return  tripAPIUtils.removeTrip(id)
        .then(() => dispatch(deleteTrip(id)))

};