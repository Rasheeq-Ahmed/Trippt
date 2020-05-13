import React from 'react';
import Navbar from '../nav/navbar_container'

class Trip extends React.Component {

    render() {
        return (
            <div>
                <h1>My Trips</h1>
                <Navbar/>
                <div>
                    <ul>Food</ul>
                    <ul>Attractions</ul>
                    <ul>Nightlife</ul>
                    <ul>Hotels</ul>
                </div>
            </div>
        )
    }

}

export default Trip