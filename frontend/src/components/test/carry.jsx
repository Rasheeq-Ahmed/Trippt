import React, { Component } from 'react'
import {LOCATIONS} from "../../assets/locations"
import Card from './card'
import './test.scss'

 class Carry extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              locations: LOCATIONS,
              location: LOCATIONS[0]
         }
        //  this.nextLocation = this.nextLocation.bind(this);
        //  this.nextLocation = this.nextLocation.bind(this);

     }

     nextLocation = () => {
         const newIndex = this.state.location.index + 1;
         this.setState({
             location: LOCATIONS[newIndex]
         })
     }

     prevLocation = () => {
         const newIndex = this.state.location.index - 1;
         this.setState({
             location: LOCATIONS[newIndex]
         })
     }

    render() {
        // console.log(this.state.location.index)
        const {locations, location} = this.state;
        // console.log(location.index)
        return (
            <div className='test-all'>
                <button
                onClick={()=> this.nextLocation()}
                disabled={location.index === locations.length -1}>
                    Next
                </button>
                <button
                    onClick={() => this.prevLocation()}
                    disabled={location.index === 0 }>
                    Prev
                </button>

                <div className="test-slider">
                    <div className="test-slider-wrapper" style={{
                        'transform': `translateX(-${location.index*(100/locations.length)})`
                    }}>
                       
                       {
                           locations.map(location => <Card key={location.locationId} location={location}/>)
                       }
                    </div>
                </div>
            </div>
        )
    }
}

export default Carry
