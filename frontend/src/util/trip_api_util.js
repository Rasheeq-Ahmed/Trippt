import axios from 'axios';

export const getTrips = () => {
    return axios.get(`/api/trips/`)
};

export const getTrip = (id) => {
    return axios.get(`/api/trips/${id}`)
};

export const getUserTrips = (user_id) => {
    return axios.get(`/api/trips/user/${user_id}`)
    // .then(trips => console.log(trips))
};

export const createTrip = (data) => {
    return axios.post(`/api/trips/`, data)
};

export const removeTrip = (id) => {
    return axios.delete(`/api/trips/${id}`)
};

export const updateTrip = (data) => {
    return axios.patch(`/api/trips/${data.id}`, data)
};