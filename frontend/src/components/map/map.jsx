import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './map.css'

function Map() {
    return <GoogleMap defaultZoom={10} 
        defaultCenter={{ lat: 37.773972, lng: -122.431297}}/>
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))



// class Map extends React.Component {

//     componentDidMount() {
//         let mapOptions = {
//             center: {
//                 lat: this.props.lat,
//                 lng: this.props.lng
//             },
//             zoom: 13
//         }
//         const map = this.refs.map
//         this.map = new google.maps.Map(map, mapOptions)
//     }

//     render() {
//         return (
//             <div className='map' ref='map'>

//             </div>
//         )
//     }

// }

// export default withRouter(Map)