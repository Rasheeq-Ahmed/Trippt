import axios from 'axios'

export const getUserProfile = (user_id) => {
    return axios.get(`api/profiles/${user_id}`)
} 

export const createUserProfile = (data) => {
    return axios.post(`api/profiles/`, data)
}

export const updateUserProfile = (user_id, data) => {
    return axios.patch(`api/profiles/${user_id}`, data)
}

