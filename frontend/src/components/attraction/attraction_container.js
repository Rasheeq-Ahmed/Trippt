import { connect } from 'react-redux';
import { getAttractions } from '../../actions/attraction_actions'
import Attraction from './attraction';

const mapStateToProps = (state) => {
    return {
      //  user: state.session.user
      attractions: state.attraction.Dubai
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAttractions: (locationId, city) => dispatch(getAttractions(locationId,city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attraction);