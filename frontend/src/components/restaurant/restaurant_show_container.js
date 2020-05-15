import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attraction_actions'
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  return {
    attraction: state.attractions || {},
    locationId: ownProps.match.params.locationId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAttraction: (locationId) => dispatch(getAttraction(locationId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);