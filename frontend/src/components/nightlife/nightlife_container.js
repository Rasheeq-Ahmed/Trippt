import { connect } from 'react-redux';
import { getNightlife } from '../../actions/nightlife_actions'
import NightLife from './nightlife';

const mapStateToProps = (state) => {
    return {
      nightlife: state.nightlife.Dubai || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getNightlife: (locationId, city) => dispatch(getNightlife(locationId, city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NightLife);