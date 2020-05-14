import React from 'react'
import './profile.css'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserTrips(this.props.user.id)
    };

    componentWillUnmount() {
        this.props.getUserTrips(this.props.user.id)
    };

    tabClick() {

    }

    render () {
    
        return (

            <div className="prof-all">
                <div className="prof-banner">
                    <img src="https://i.imgur.com/67Lhwke.jpg" alt=""/>
                </div>
                <div className="prof-body">
                    <div className="prof-left">
                        <div className="prof-pic">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="prof-img"/>
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
                                <button className="tablinks" onClick=''>Trips</button>
                                <button className="tablinks" onClick=''>Destinations</button>
                                <button className="tablinks" onClick=''>Other</button>
                            </div>
                            
                        </div>
                        <div className="prof-right-body">
                            <div className="trips">
                                <ul>
                                    {this.props.trips.map((trip, idx) => (
                                        <div key={idx}>
                                            <h2>Trip {idx+1}</h2>
                                            <h3>{trip.location}</h3>
                                            <ul id='trip' className="tabcontent">
                                                <li>Food:  🍔🍜🍱</li>
                                                <li>Things To Do: 🗺️🏝️🌆</li>
                                            </ul>
                                            <button onClick={()=>this.props.removeTrip(trip._id)}>Delete</button>
                                        </div>
                                    ))}
                                {/* <h2>Trip 1</h2>
                                <div id='trip' className="tabcontent">
                                    <li>Food:  🍔🍜🍱</li>
                                    <li>Things To Do: 🗺️🏝️🌆</li>
                                </div>
                                <h2>Trip 2</h2>

                                <div id='trip' className="tabcontent">
                                        <li>Food:  🍔🍜🍱</li>
                                        <li>Things To Do: 🗺️🏝️🌆</li>
                                </div>
                                <h2>Trip 3</h2>

                                <div id='trip' className="tabcontent">
                                        <li>Food:  🍔🍜🍱</li>
                                        <li>Things To Do: 🗺️🏝️🌆</li>
                                </div> */}
                                </ul>
                            </div>



                            {/* <div id="destination" className="tabcontent">
                                <h3>Destination 1</h3>
                                <p> Details of Destination 1</p>
                            </div>
                            <div id='other' className="tabcontent">
                                <h3>Other 1</h3>
                                <p> Details of Other 1</p>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
            )

    }




}

export default ProfilePage;