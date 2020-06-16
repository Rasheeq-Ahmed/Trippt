import React, { Component } from 'react'
import NavBar from '../nav/navbar_container';
import Carry from './carry'
// import './test.css'

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
                {/* <Carry/> */}
                </div>
                <div className="att-footer">

                </div>


            </div>
        )
    }
}

export default Testing;
