import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attraction_actions';
import { updateTrip } from '../../actions/trip_actions';
import AttractionShow from './attraction_show';

const mapStateToProps = (state, ownProps) => {
    return {
      //  user: state.session.user
      attractions: state.attractions || {},
      locationId: ownProps.match.params.locationId,
      locationName: ownProps.match.params.locationName,
      tripId: ownProps.match.params.tripId,
      loading: state.ui.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttraction: (locationId) => dispatch(getAttraction(locationId)),
        updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionShow);