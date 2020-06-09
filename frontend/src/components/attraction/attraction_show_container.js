import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attraction_actions';
import { updateTrip, removeAttrac } from '../../actions/trip_actions';
import AttractionShow from './attraction_show';

const mapStateToProps = (state, ownProps) => {
    let tripAttractions = state.trips;
    let locationId = ownProps.match.params.locationId;
    let locationName = ownProps.match.params.locationName;
    let tripId = ownProps.match.params.tripId

    return {
      //  user: state.session.user
      attractions: tripAttractions || state.attractions || {},
      locationId,
      locationName,
      tripId,
      loading: state.ui.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttraction: (locationId) => dispatch(getAttraction(locationId)),
        updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data)),
        removeAttrac: (tripId, attracId) => dispatch(removeAttrac(tripId, attracId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionShow);