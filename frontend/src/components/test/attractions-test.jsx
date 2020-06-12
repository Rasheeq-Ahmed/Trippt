import React, { Component } from 'react'
import NavBar from '../nav/navbar_container';
import Carousel from './carousel'
import './test.css'

class Testing extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="att-all">
                <div className="att-header">
                    <NavBar/>
                </div>
                <div className="att-body">
                    <h1 className="category">Attractions</h1>
                    <Carousel/>
                    <h1 className="category">Restaurants</h1>
                    <Carousel/>
                    <h1 className="category">Nightlife</h1>
                    <Carousel/>
                </div>
                <div className="att-footer">

                </div>


            </div>
        )
    }
}

export default Testing;
