import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attraction_actions';
import { updateTrip } from '../../actions/trip_actions';
import AttractionShow from './attraction_show';

const mapStateToProps = (state, ownProps) => {
    return {
      //  user: state.session.user
      attraction: state.attractions || {},
      locationId: ownProps.match.params.locationId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttraction: (locationId) => dispatch(getAttraction(locationId)),
        updateTrip: (data) => dispatch(updateTrip(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionShow);