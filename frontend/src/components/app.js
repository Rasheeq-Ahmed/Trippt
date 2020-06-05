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
import NightlifeShow from './nightlife/nightlife_show_container'
import RestaurantShow from './restaurant/restaurant_show_container'
import About from './main/about';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>

      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/trips" component={Trip} /> */}
      <ProtectedRoute exact path={`/create`} component={CreateTrip} />
      <ProtectedRoute exact path="/profile" component={ProfilePage} />
      <Route exact path="/destination" component={Destination} />
      {/* <Route exact path="/attractions" component={Attraction} /> */}
      <Route exact path="/attractions/:locationId/:locationName" component={Attraction} />
      <Route exact path="/attraction/:locationId/:locationName" component={AttractionShow} />
      <ProtectedRoute exact path="/attractions/:locationId/:locationName/:tripId" component={Attraction}/>
      <ProtectedRoute exact path="/attraction/:locationId/:locationName/:tripId" component={AttractionShow} />
      <Route exact path="/restaurants/" component={Restaurant} />
      <Route exact path="/restaurants/:locationId" component={RestaurantShow} />
      <Route exact path="/nightlife/" component={NightLife} />
      <Route exact path="/nightlife/:locationId" component={NightlifeShow} />
      {/* <Route path="/show" component={AttractionShow}/> */}
    </Switch>
  </div>
);

export default App;