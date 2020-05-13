import * as tripAPIUtils from '../util/trip_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const REMOVE_TRIP = 'REMOVE_TRIP';

const receiveTrips = (trips) => ({
    type: RECEIVE_TRIPS,
    trips
});

const receiveTrip = (trip) => ({
    type: RECEIVE_TRIP,
    trip
});

const deleteTrip = (id) => ({
    type: REMOVE_TRIP,
    id
});

export const getTrips = () => dispatch => (
    tripAPIUtils.getTrips()
        .then((trips) => dispatch(receiveTrips(trips)))
);

export const getTrip = (id) => dispatch => (
    tripAPIUtils.getTrip(id)
        .then((trip) => dispatch(receiveTrip(trip)))
);

export const createTrip = (data) => dispatch => (
    tripAPIUtils.createTrip(data)
        .then((trip) => dispatch(receiveTrip(trip)))
);

export const updateTrip = (data) => dispatch => (
    tripAPIUtils.updateTrip(data)
        .then((trip) => dispatch(receiveTrip(trip)))
);

export const removeTrip = (id) => dispatch => (
    tripAPIUtils.removeTrip(id)
        .then(() => dispatch(deleteTrip(id)))
)