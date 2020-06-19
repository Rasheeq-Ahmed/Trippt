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
import MyProfile from '../components/user/update_profile'
import About from './main/about';
import Carousel from './test/carousel';
import Testing from './test/attractions-test';
import Test from './nav/test';
import Carry from './test/carry';
import Loader from './loader/loader';
import Deck from './test/deck';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>

      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path='/carry' component={Carousel}/>
      <Route exact path="/about" component={About} />
      
      <Route exact path="/tests" component={Test} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/loading" component={Loader} />

      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path={`/create`} component={CreateTrip} />
      <ProtectedRoute exact path="/profile" component={ProfilePage} />
      <ProtectedRoute exact path="/profile/update" component={MyProfile} />
      <Route exact path="/destination" component={Destination} />
      <Route exact path="/attractions/:locationId/:locationName" component={Attraction} />
      <Route exact path="/attraction/:locationId/:locationName" component={AttractionShow} />
      <ProtectedRoute exact path="/attractions/:locationId/:locationName/:tripId" component={Attraction}/>
      <ProtectedRoute exact path="/attraction/:locationId/:locationName/:tripId" component={AttractionShow} />
      <Route exact path="/restaurants/" component={Restaurant} />
      <Route exact path="/restaurants/:locationId" component={RestaurantShow} />
      <Route exact path="/nightlife/" component={NightLife} />
      <Route exact path="/nightlife/:locationId" component={NightlifeShow} />
    </Switch>
  </div>
);

export default App;