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
                <div>
                    {this.props.trips.map((trip, idx) => (
                        <li key={idx}>{trip.location + " " + trip.date} </li>
                    ))}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={() => this.setState({location: 'Dubai'})}>Dubai</button>
                </form>
                <button onClick={this.handleGetAttraction}>Get Attractions</button>

            </div>
        )
    }
}

export default CreateTrip