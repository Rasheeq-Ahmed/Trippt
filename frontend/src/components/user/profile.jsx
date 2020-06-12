import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container'
import './profile.css'
import "../nav/navbar.css";
import { LOCATIONS } from '../../assets/locations'
import {Trip} from './trip'


class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          location: '',
          locationId: '',
        }
    }

    componentDidMount() {
        this.props.getUserTrips(this.props.user.id)
    };

    randomTrip() {
      let randLocation = Math.floor(Math.random() * LOCATIONS.length)
      let location = LOCATIONS[randLocation]
      this.props.createTrip({location: location.location, locationId: location.locationId})
    }




    tabClick() {

    }

    render () {
    
        return (
          <div className="prof-all">
            <div className="prof-header">
              <NavBar />
            </div>
            <div className="prof-container">
              <div className="prof-banner">
                {/* <img src="https://i.imgur.com/jA0jVwf.jpg" alt="" /> */}
              </div>
              <div className="prof-body">
                <div className="prof-left">
                  <div className="prof-pic">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt=""
                      className="prof-img"
                    />
                  </div>
                  <div className="prof-details">
                    <ul>
                      <h2>Full Name</h2>
                      <h4>@Username</h4>
                      <p>San Franciso, CA</p>
                    </ul>
                  </div>
                </div>

                <div className="prof-right">
                  <div className="prof-right-header">
                    <div className="prof-tabs">
                      <Link to="/create">
                        <button className="tablinks">Trips</button>
                      </Link>
                      <div className="tablinks dropdown">
                        <button>Add Trips</button>
                          <ul className='dropdown-content'>
                            {LOCATIONS.map((loc, idx) => (
                              <li
                                onClick={() => this.props.createTrip({ location: loc.location, locationId: loc.locationId })}
                                key={idx}
                              >{loc.location}</li>
                            ))}
                          </ul>
                        </div>
                      <Link to="/destination">
                        <button className="tablinks">Destinations</button>
                      </Link>
                      <button className="tablinks" onClick={()=>this.randomTrip()}>Trippt Me</button>
                    </div>
                  </div>
                  <div className="prof-right-body">
                    <div className="trips">
                      <ul>
                        <Trip 
                            removeAttrac={this.props.removeAttrac} 
                            removeTrip={this.props.removeTrip}
                            trips={this.props.trips}/>
                        {/* {this.props.trips.map((trip, idx) => (
                          <div className='trip-container' key={trip._id}>
                            <h2 className='trip-num'>Trip {idx + 1}</h2>
                            <h3 className='trip-city'>{trip.location}</h3>
                            <ul id="trip" className="tabcontent">
                              <li>Food: 🍔🍜🍱</li>
                              <li>Things To Do: 🗺️🏝️🌆</li>
                              {trip.attractions ? trip.attractions.map((att, idx) => (
                                <div key={idx}>
                                  <Link
                                      key={idx} 
                                      to={`/attraction/${att.location_id}/${att.name}/${trip._id}`}>
                                      <img src={`${att.photo.images.thumbnail.url}`} 
                                           alt=""/>
                                      {att.name}</Link>
                                      <button onClick={()=> this.props.removeAttrac(trip._id, att.location_id)}>Remove</button>
                                </div>
                              )) : null}
                            </ul>
                            
                            <button>
                              <Link to={`/attractions/${trip.locationId}/${trip.location}/${trip._id}`}>Find Attractions</Link>
                            </button>
                            <button
                              onClick={() => this.props.removeTrip(trip._id)}
                            >
                              Delete
                            </button>

                          </div>
                        ))} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

    }




}

export default ProfilePage;