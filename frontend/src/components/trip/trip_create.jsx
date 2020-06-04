import React from 'react';
import NavBar from '../nav/navbar_container';
// import { Link } from 'react-router-dom';
import './create.css'

const locations = [
    { location: 'Dubai', locationId: 295424 },
    { location: 'San Francisco', locationId: 60713 },
    { location: 'Paris', locationId: 187147 },
    { location: 'New York', locationId: 60763 },
    { location: 'Tokyo', locationId: 298184 },
    { location: 'Sydney', locationId: 255060 },  
]

class CreateTrip extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            locationId: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGetAttraction = this.handleGetAttraction.bind(this)
        // this.handleGetUserTrips = this.handleGetUserTrips.bind(this)
    };

    componentDidMount() {
        this.props.getUserTrips(this.props.user.id)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTrip(this.state)
    };
    
    handleGetAttraction(e) {
        e.preventDefault();
        this.props.getAttractions(295424, 'Dubai')
    };



    // handleGetUserTrips(e) {
    //     e.preventDefault();
    //     this.props.getUserTrips("5ebb148fc8bb6da76244a817")
    // };

    render() {
        return (



             <div className="create-all">
        <div className="create-header">
         <NavBar/>
        </div>
        <div className="create-body">
          <div className="create-content">
              <div className="content-inner">
               <form onSubmit={this.handleSubmit}>
                   {locations.map((loc, idx) => (
                       <button 
                            onClick={() => this.setState({location: loc.location, locationId: loc.locationId  })}
                            key={idx}
                            >{loc.location}</button>
                   ))}
                </form>
              </div>
            <div className='content-inner2'>
              <div>
                    {this.props.trips.map((trip, idx) => (
                        <div key={trip._id}>
                            <h2>Trip {idx + 1}</h2>
                            <h3 id="locationName">{trip.location}</h3>
                            <ul id='trip' className="tabcontent">
                                <li>Food:  🍔🍜🍱</li>
                                <li>Things To Do: 🗺️🏝️🌆</li>
                            </ul>

                            <button onClick={() => this.props.removeTrip(trip._id)}>Delete</button>
                        </div>
                    ))}
                </div>
              </div>
          </div>
        </div>

        <div className="create-footer"></div>
      </div>
      
        )
    }
}

export default CreateTrip