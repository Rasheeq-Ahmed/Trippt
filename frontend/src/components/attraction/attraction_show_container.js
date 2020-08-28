import { connect } from 'react-redux';
import { getAttraction, getPhotos } from '../../actions/attraction_actions';
import { updateTrip, removeAttrac } from '../../actions/trip_actions';
import { getUserTrips } from '../../actions/trip_actions'
import AttractionShow from './attraction_show';

const mapStateToProps = (state, ownProps) => {
    let locationId = ownProps.match.params.locationId;
    let locationName = ownProps.match.params.locationName;
    let tripId = ownProps.match.params.tripId

    return {
      user: state.session.user,
      attractions: state.attractions || {},
      tripAttractions: state.trips || {},
      locationId,
      locationName,
      tripId,
      loading: state.ui.loading,
      photos: state.photos[locationId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttraction: (locationId) => dispatch(getAttraction(locationId)),
        updateTrip: (tripId, data) => dispatch(updateTrip(tripId, data)),
        removeAttrac: (tripId, attracId) => dispatch(removeAttrac(tripId, attracId)),
        getUserTrips: (userId) => dispatch(getUserTrips(userId)),
        getPhotos: (locationId) => dispatch(getPhotos(locationId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionShow);