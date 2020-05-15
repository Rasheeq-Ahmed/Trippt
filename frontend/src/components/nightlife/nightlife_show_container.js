import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attraction_actions'
import NightlifeShow from './nightlife_show';

const mapStateToProps = (state, ownProps) => {
  return {
    //  user: state.session.user
    attraction: state.attractions || {},
    locationId: ownProps.match.params.locationId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAttraction: (locationId) => dispatch(getAttraction(locationId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NightlifeShow);