import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import { getAttractions } from '../../actions/attraction_actions'
import CreateTrip from './trip_create';

const mapStateToProps = (state) => {
    return {
       user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTrip: (data) => dispatch(createTrip(data)),
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);