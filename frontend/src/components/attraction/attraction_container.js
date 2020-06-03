import { connect } from 'react-redux';
import { getAttractions } from '../../actions/attraction_actions'
import Attraction from './attraction';

const mapStateToProps = (state, ownProps) => {
    return {
      //  user: state.session.user
      attractions: state.attractions || {},
      locationId: ownProps.match.params.locationId,
      locationName: ownProps.match.params.locationName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attraction);