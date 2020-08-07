import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './map.css'

class Map extends React.Component {

    componentDidMount() {
        let mapOptions = {
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            },
            zoom: 13
        }
        const map = this.refs.map
        this.map = new google.maps.Map(map, mapOptions )
    }

    render() {
        return (
            <div className='map' ref='map'>

            </div>
        )
    }

}

export default withRouter(Map)