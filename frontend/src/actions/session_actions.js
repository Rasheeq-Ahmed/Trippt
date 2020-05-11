import * as APIutil from '../util/session_api_util';
import jwt_decode from "jwt-decode";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";



export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});


export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
})

export const receiveErrors = () => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const signup = (user) => dispatch => {
    return APIutil.signup(user)
        .then(() => dipatch(receiveUserSignIn()))
        .catch(err = dispatch(receiveErrors(err.response.data)))
}



export const login = (user) => dispatch => {
    return APIutil.login(user.then(res =>{
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    }))
}


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIutil.setAuthToken(false)
    dispatch(logoutUser())

};