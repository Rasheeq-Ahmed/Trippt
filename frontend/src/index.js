import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import './reset.css'
import "font-awesome/css/font-awesome.css";


import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

//Window Testing Only//
import * as AttAPIUtil from './util/attraction_api_util';
import * as TripAPIUtil from './util/trip_api_util';
import * as Attraction from './actions/attraction_actions'
import {createUserProfile, getUserProfile, updateUserProfile} from './actions/profile_actions';
//Window Testing Only//


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');


  //Window Testing Only//

  window.dispatch = store.dispatch
  window.getState = store.getState
  window.getAttractions = AttAPIUtil.getAttractions
  window.getAttraction = AttAPIUtil.getAttraction
  window.getUserTrips = TripAPIUtil.getUserTrips
  window.updateTrip = TripAPIUtil.updateTrip
  window.createUserProfile = createUserProfile
  window.getUserProfile = getUserProfile
  window.updateUserProfile = updateUserProfile
  window.getPhotos = Attraction.getPhotos

  // window.getAttractions = getAttractions
  //Window Testing Only//

  ReactDOM.render(<Root store={store} />, root);
});