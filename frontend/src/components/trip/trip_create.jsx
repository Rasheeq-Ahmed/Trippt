import React from 'react';
// import { Link } from 'react-router-dom';


class CreateTrip extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: ''
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
            <div>

                <form onSubmit={this.handleSubmit}>
                    <button onClick={() => this.setState({location: 'Dubai'})}>Dubai</button>
                </form>
                <button onClick={this.handleGetAttraction}>Get Attractions</button>
                {this.props.attractions.map((attr, idx) => (
                    <li key={idx}>{attr.name}</li>
                ))}

                <div>
                    {this.props.trips.map((trip, idx) => (
                        <div key={trip._id}>
                            <h2>Trip {idx + 1}</h2>
                            <h3>{trip.location}</h3>
                            <ul id='trip' className="tabcontent">
                                <li>Food:  🍔🍜🍱</li>
                                <li>Things To Do: 🗺️🏝️🌆</li>
                            </ul>
                            <button onClick={() => this.props.removeTrip(trip._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CreateTrip