import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container'
import './profile.css';
import "../nav/navbar.css";
import { LOCATIONS } from '../../assets/locations';
import {AttractionModal} from './attraction_modal';
import { TripIcon, ConfirmDelete } from './trip_icon';
// import Board from './boards';
// import MyProfile from './update_profile'



class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          profile: '',
          current: null,
          show: false,
          // trips: this.props.trips
          confirmDelete: false,
          showProfile: false
        }
        this.showTrip = this.showTrip.bind(this);
        this.closeTrip = this.closeTrip.bind(this);
        this.outsideClose = this.outsideClose.bind(this);

        
        this.showConfirmDelete = this.showConfirmDelete.bind(this);
        this.closeConfirmDelete = this.closeConfirmDelete.bind(this);
        
    }

  componentDidMount() {
    this.props.getUserTrips(this.props.user.id);
    this.props.getUserProfile(this.props.user.id);
  };

  showTrip(tripId) {
    this.setState({ show: !this.state.show, current: tripId })
  };

  closeTrip() {
    this.setState({ show: false, current: null })
  };

  outsideClose(e) {
    let modal = document.getElementById("modal-container");
    if (e.target === modal) {
      this.setState({ show: false })
    }
  }

  showConfirmDelete(tripId) {
    this.setState({current: tripId, confirmDelete: true})
  }

  closeConfirmDelete() {
    this.setState({confirmDelete: false, current: null})
  }


  randomTrip() {
    let randLocation = Math.floor(Math.random() * LOCATIONS.length)
    let location = LOCATIONS[randLocation]
    this.props.createTrip({location: location.location, locationId: location.locationId})
  }


  getLocation(locationName, locations) {
    for(let i = 0; i < locations.length; i ++) {
      let location = locations[i]
        if (location.location === locationName) {
          return location
        }
    }
    return null
  }


    render () {
      if (!this.props.trips) return null;
        return (
          <div className="prof-all">
            <div className="prof-header">
              <NavBar />
            </div>
            <div className="prof-container">
              <div className={this.props.profile.location === 'New York, NY' ? 'prof-banner-ny' : 'prof-banner-sf'}>
                {/* <img src="https://i.imgur.com/jA0jVwf.jpg" alt="" /> */}
                <div className="prof-pic">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                    className="prof-img"
                  />
                </div>
                <div className="prof-details">
                  <ul>
                    <li>{this.props.profile.firstName} {this.props.profile.lastName}</li>
                    <li>{this.props.profile.handle}</li>
                    <li>{this.props.profile.location}</li>
                  </ul>
                </div>
              </div>
              <div className="prof-body">
                <div className="prof-right">
                  <div className="prof-right-header">
                    <div className="prof-tabs">
                      {/* <Link to="/create">
                        <button className="tablinks">Trips</button>
                      </Link> */}
                      <div className="tablinks dropdown">
                        <button>Add Trips</button>
                        <ul className="dropdown-content-1">
                          {LOCATIONS.map((loc, idx) => (
                            <li
                              onClick={() =>
                                this.props.createTrip({
                                  location: loc.location,
                                  locationId: loc.locationId,
                                })
                              }
                              key={idx}
                            >
                              {loc.location}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        className="tablinks"
                        onClick={() => this.randomTrip()}
                      >
                        Surprise Me!
                      </button>
                      <div className="tablinks dropdown">
                        <button>Destinations</button>
                        <ul className="dropdown-content-2">
                          {LOCATIONS.map((loc, idx) => (
                            <Link 
                              key={idx}
                              to={`/attractions/${loc.locationId}/${loc.location}`}>
                                <li>{loc.location}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <Link to='/profile/update'><button>Profile Info</button></Link>
                    </div>
                  </div>
                  <div className="prof-right-body">
                    <div className="trips">
                      <h1 className="myTrips">My Trips</h1>
                      <ConfirmDelete
                        closeConfirmDelete={this.closeConfirmDelete}
                        removeTrip={this.props.removeTrip}
                        tripId={this.state.current}
                        confirmDelete={this.state.confirmDelete}
                      />
                      <div className="trips-container">
                        {/* <div className="top-trips">
                          <Board id='board-1' className="board">
                          </Board> 
                        </div> */}
                        {/* <Board id="board-2" className="board"></Board>
                        <Board className="all-trips"> */}
                          {Object.keys(this.props.trips).map((tripId, idx) => (
                            <div className="card-con" key={idx}>
                              <TripIcon
                                id={idx}
                                className="carD"
                                draggable="true"
                                getLocation={this.getLocation}
                                tripId={tripId}
                                category="all"
                                trip={this.props.trips[tripId]}
                                LOCATIONS={LOCATIONS}
                                showTrip={this.showTrip}
                                showConfirmDelete={this.showConfirmDelete}
                              />
                              <AttractionModal
                                removeAttrac={this.props.removeAttrac}
                                tripId={tripId}
                                trip={this.props.trips[tripId]}
                                show={this.state.show}
                                closeTrip={this.closeTrip}
                                outsideClose={this.outsideClose}
                                current={this.state.current}
                              />
                            </div>
                          ))}
                        {/* </Board> */}
                      </div>
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