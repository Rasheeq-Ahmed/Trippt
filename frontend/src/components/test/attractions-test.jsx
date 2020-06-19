import React, { Component } from 'react'
import NavBar from '../nav/navbar_container';
import Deck from './deck'
// import './test.css'
import { LOCATIONS } from "../../assets/locations";


class Testing extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        let locations = LOCATIONS;
        console.log(locations)
        return (
            <div className="testing-all">
                    <Deck locations={locations}/>
                    {/* <Deck locations={locations}/>
                    <Deck locations={locations}/> */}
            </div>
        )
    }
}

export default Testing;
