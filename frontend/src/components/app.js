import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';
import Trip from './trip/trip_show'
import CreateTrip from './trip/trip_create_container'
import ProfilePage from './user/profile_container'


import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Destination from './destination/destination'


const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/trips" component={Trip}/>
      <ProtectedRoute exact path={`/create`} component={CreateTrip}/>
      <ProtectedRoute exact path="/destination" component={Destination}/>
      <ProtectedRoute path="/profile" component={ProfilePage}/>
    </Switch>
  </div>
);

export default App;