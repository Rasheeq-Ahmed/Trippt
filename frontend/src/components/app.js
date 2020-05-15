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
import Attraction from './attraction/attraction_container';
import Restaurant from './restaurant/restaurant_container';
import NightLife from './nightlife/nightlife_container'

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/trips" component={Trip}/>
      <ProtectedRoute exact path={`/create/:location`} component={CreateTrip}/>
      <Route exact path="/destination" component={Destination}/>
      <Route path="/attractions/:location" component={Attraction}/>
      <Route path="/restaurants/:location" component={Restaurant}/>
      <Route path="/nightlife/:location" component={NightLife}/>
      <ProtectedRoute path="/profile" component={ProfilePage}/>
    </Switch>
  </div>
);

export default App;