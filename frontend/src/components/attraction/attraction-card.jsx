import React from 'react'
import {Link} from 'react-router-dom'
import '../test/carry.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {

        if (!this.props.attraction || !this.props.attraction.photo) {
            return null;
        }
        {console.log(this.props.tripId)}
        let {key, activeIndex} = this.props
        return (
            <div className='card' style={{
                backgroundImage: `url(${this.props.attraction.photo.images.small.url})`
            }}>
                <p>{this.props.attraction.name}</p>
                
                {/* <Link to={`/attraction/${this.props.attraction.location_id}/${this.props.attraction.name}`}>Click</Link> */}
            </div>
        )
    }
}


export default Card;
