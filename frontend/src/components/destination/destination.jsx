import React from 'react';
import { connect } from "react-redux"
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import "./destination.css"
import { LOCATIONS } from "../../assets/locations"
import { getUserTrips, removeTrip } from "../../actions/trip_actions"
import Slide from "./dest_slide"
import TripsModal from "./trips_modal"


class Destination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      trips: {}
    }

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.props.getUserTrips(this.props.user.id)
    this.setState({trips: this.props.trips})
    
  }

  componentDidUpdate(prevProps) {
    if(prevProps.trips !== this.props.trips) {
      this.setState({trips: this.props.trips, show: true})
    }
  }



  showModal() {
    this.setState({ show: !this.state.show })
  };

  closeModal() {
    this.setState({ show: false })
  };

  render(){
    let {trips, show} = this.state
    console.log(this.state.trips)
    return(
      <div className= 'dest-all'>
        
        <div className="dest-header">
          <NavBar />
        </div>
        
        {this.props.signedIn ? <TripsModal 
                              show={this.state.show}
                              closeModal={this.closeModal}
                              removeTrip={this.props.removeTrip}
                              trips={this.state.trips}
                              /> : null}
        <div className="dest-body">
          <div className="dest-title">
            <h1>Discover Your Next Adventure</h1>
            {this.props.signedIn ? 
                <button onClick={()=>this.showModal()}
                        className="modal-btn"
                  >My Trips { `(${trips ? Object.keys(trips).length : null})`}
                </button> : null}
          </div>
          <div className="dest-slides">
          <Slide data={ LOCATIONS }/>
          </div>

        </div>
           <div className="dest-footer"></div>
      </div>
    )
  }
}

const mSTP = state => {
  return {
    signedIn: state.session.isAuthenticated,
    user: state.session.user,
    trips: state.trips
  }
}

const mDTP = dispatch => {
  return {
    getUserTrips: (user_id) => dispatch(getUserTrips(user_id)),
    removeTrip: (id) => dispatch(removeTrip(id)),
  }
}

export default connect(mSTP, mDTP)(Destination)