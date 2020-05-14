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
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTrip(this.state)
    }
    
    handleGetAttraction(e) {
        e.preventDefault()
        this.props.getAttractions(295424, 'Dubai')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <button onClick={() => this.setState({location: 'Dubai'})}>Dubai</button>
                    <button onClick={this.handleGetAttraction}>Get</button>
                </form>
            </div>
        )
    }
}

export default CreateTrip