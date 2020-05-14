import { connect } from 'react-redux';
import { createTrip, getUserTrips, removeTrip} from '../../actions/trip_actions';
import { getAttractions } from '../../actions/attraction_actions'
import CreateTrip from './trip_create';

const mapStateToProps = (state, ownProps) => {
    return {
       user: state.session.user,
       trips: Object.values(state.trips),
       attractions: state.attractions[ownProps.match.params.location] || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTrip: (data) => dispatch(createTrip(data)),
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city)),
        getUserTrips: (user_id) => dispatch(getUserTrips(user_id)),
        removeTrip: (id) => dispatch(removeTrip(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);