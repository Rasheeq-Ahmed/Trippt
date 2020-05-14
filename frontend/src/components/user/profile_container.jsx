import { connect } from 'react-redux';
import ProfilePage from './profile';
import { getUserTrips } from '../../actions/trip_actions'

const mSTP = state => ({
    user: state.session.user,
    trips: Object.values(state.trips)
});

const mDTP = dispatch => ({
    getUserTrips: (user_id) => dispatch(getUserTrips(user_id))
});

export default connect(mSTP, mDTP)(ProfilePage)