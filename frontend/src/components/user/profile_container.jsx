import { connect } from 'react-redux';
import ProfilePage from './profile';
import { createTrip, getUserTrips, removeTrip, removeAttrac, updateTrip} from '../../actions/trip_actions'
import { getAttractions, getAttraction } from '../../actions/attraction_actions'

const mSTP = state => ({
    user: state.session.user,
    trips: Object.values(state.trips) || [],
    attractions: state.attractions || {}
});

const mDTP = dispatch => ({
    getUserTrips: (user_id) => dispatch(getUserTrips(user_id)),
    getAttractions: (locationId, city) => dispatch(getAttractions(locationId, city)),
    getAttraction: (locationId) => dispatch(getAttraction(locationId)),
    removeTrip: (id) => dispatch(removeTrip(id)),
    createTrip: (data) => dispatch(createTrip(data)),
    removeAttrac: (tripId, attracId) => dispatch(removeAttrac(tripId, attracId)),
    updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data))


});

export default connect(mSTP, mDTP)(ProfilePage)