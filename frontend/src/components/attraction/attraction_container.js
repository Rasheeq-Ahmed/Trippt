import { connect } from 'react-redux';
import { getAttractions, getAttraction } from '../../actions/attraction_actions'
import { getRestaurants } from '../../actions/restaurant_actions'
import { getNightlife } from '../../actions/nightlife_actions'
import { updateTrip, getUserTrips, createTrip } from '../../actions/trip_actions';
import Attraction from './attraction';

const mapStateToProps = (state, ownProps) => {
    return {
      attractions: state.attractions || {},
      restaurants: state.restaurants || {},
      nightlife: state.nightlife || {},
      locationId: ownProps.match.params.locationId,
      locationName: ownProps.match.params.locationName,
      tripId: ownProps.match.params.tripId,
      loggedIn: state.session.isAuthenticated,
      userTrips: state.trips || {},
      user: state.session.user,   
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city)),
        getAttraction: (locationId) => dispatch(getAttraction(locationId)),
        getRestaurants: (locationId, city) => dispatch(getRestaurants(locationId, city)),
        getNightlife: (locationId, city) => dispatch(getNightlife(locationId, city)),
        updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data)),
        getUserTrips: (user_id) => dispatch(getUserTrips(user_id)),
        createTrip: (data) => dispatch(createTrip(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attraction);