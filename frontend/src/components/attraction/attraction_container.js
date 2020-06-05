import { connect } from 'react-redux';
import { getAttractions } from '../../actions/attraction_actions'
import { updateTrip } from '../../actions/trip_actions';
import Attraction from './attraction';

const mapStateToProps = (state, ownProps) => {
    return {
      //  user: state.session.user
      attractions: state.attractions || {},
      locationId: ownProps.match.params.locationId,
      locationName: ownProps.match.params.locationName,
      tripId: ownProps.match.params.tripId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city)),
        updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attraction);