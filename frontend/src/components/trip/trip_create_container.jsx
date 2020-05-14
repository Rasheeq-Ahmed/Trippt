import { connect } from 'react-redux';
import { createTrip, getUserTrips } from '../../actions/trip_actions';
import { getAttractions } from '../../actions/attraction_actions'
import CreateTrip from './trip_create';

const mapStateToProps = (state) => {
    return {
       user: state.session.user,
       trips: Object.values(state.trips)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTrip: (data) => dispatch(createTrip(data)),
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city)),
        getUserTrips: (user_id) => dispatch(getUserTrips(user_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);