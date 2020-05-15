import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container'
import './profile.css'
import "../nav/navbar.css";


class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserTrips(this.props.user.id)
    };


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
                      <Link to="/destination">
                        <button className="tablinks">Destinations</button>
                      </Link>
                      <button className="tablinks">Other</button>
                    </div>
                  </div>
                  <div className="prof-right-body">
                    <div className="trips">
                      <ul>
                        {this.props.trips.map((trip, idx) => (
                          <div key={trip._id}>
                            <h2>Trip {idx + 1}</h2>
                            <h3>{trip.location}</h3>
                            <ul id="trip" className="tabcontent">
                              <li>Food: 🍔🍜🍱</li>
                              <li>Things To Do: 🗺️🏝️🌆</li>
                            </ul>
                            <button
                              onClick={() => this.props.removeTrip(trip._id)}
                            >
                              Delete
                            </button>
                          </div>
                        ))}
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