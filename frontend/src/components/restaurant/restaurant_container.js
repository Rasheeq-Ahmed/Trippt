import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/restaurant_actions'
import Restaurant from './restaurant';

const mapStateToProps = (state) => {
    return {
      restaurants: state.restaurants || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRestaurants: (locationId, city) => dispatch(getRestaurants(locationId, city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);