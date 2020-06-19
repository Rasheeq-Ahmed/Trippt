import { connect } from 'react-redux';
import ProfilePage from './profile';
import { createTrip, getUserTrips, removeTrip, removeAttrac, updateTrip} from '../../actions/trip_actions'
import { getAttractions, getAttraction } from '../../actions/attraction_actions'
import { getUserProfile } from '../../actions/profile_actions'

const mSTP = state => ({
    user: state.session.user,
    trips: state.trips || {},
    attractions: state.attractions || {},
    profile: state.profile || {}
});

const mDTP = dispatch => ({
    getUserTrips: (user_id) => dispatch(getUserTrips(user_id)),
    getAttractions: (locationId, city) => dispatch(getAttractions(locationId, city)),
    getAttraction: (locationId) => dispatch(getAttraction(locationId)),
    removeTrip: (id) => dispatch(removeTrip(id)),
    createTrip: (data) => dispatch(createTrip(data)),
    removeAttrac: (tripId, attracId) => dispatch(removeAttrac(tripId, attracId)),
    updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data)),
    getUserProfile: (userId) => dispatch(getUserProfile(userId))


});

export default connect(mSTP, mDTP)(ProfilePage)