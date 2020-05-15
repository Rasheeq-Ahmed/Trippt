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
import NightLife from './nightlife/nightlife_container';
import AttractionShow from './attraction/attraction_show_container'

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
    <Route exact path="/" component={MainPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/trips" component={Trip} />
    <ProtectedRoute exact path={`/create`} component={CreateTrip} />
    <Route exact path="/destination" component={Destination} />
    {/* <Route path="/:locationId" component={AttractionShow} /> */}
    <Route path="/attractions" component={Attraction} />
    <Route path="/restaurants" component={Restaurant} />
    <Route path="/nightlife" component={NightLife} />
    <ProtectedRoute path="/profile" component={ProfilePage} />
    <Route path="/show" component={AttractionShow}/>
    </Switch>
  </div>
);

export default App;