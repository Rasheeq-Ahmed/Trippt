import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import './map.css'


export const Map = withScriptjs(withGoogleMap((props) => 

    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: props.lat, lng: props.lng }}> 

        <Marker position={{ lat: props.lat, lng: props.lng }}/>
    </GoogleMap>
));

