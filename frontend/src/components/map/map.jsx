import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import './map.css'


export const WrappedMap = withScriptjs(withGoogleMap((props) => 

    <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: props.lat, lng: props.lng }}> 

        <Marker position={{ lat: props.lat, lng: props.lng }}/>
    </GoogleMap>
))



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