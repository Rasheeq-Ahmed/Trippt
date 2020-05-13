import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import CreateTrip from './trip_create';

const mapStateToProps = (state) => {
    return {
       user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTrip: (data) => dispatch(createTrip(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);