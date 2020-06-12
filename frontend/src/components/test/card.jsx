import React from 'react'
import './carry.css'

class Card extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        if (!this.props.location) {
            return null;
        }
    return (
        <div className='card' style={{ backgroundImage: `url(${this.props.location.url})` }}>
                                {/* <Link className='city-link' to={`/attractions/${this.props.location.locationId}/${this.props.location.location}`}> */}
                                    <h1 className='card-city'>{this.props.location.location}</h1>
                                {/* </Link> */}
                                {/* <button className={user ? "btn-show" : ""}
                                    onClick={() => createTrip({ location: this.props.location.location, locationId: this.props.location.locationId })}
                                >Add To My Trips </button> */}
                            </div>
    )
    }
}


export default Card;
