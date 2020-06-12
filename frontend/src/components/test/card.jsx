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
        <div className="card" style={{ backgroundImage: `url(${this.props.location.url})` }}>
            <h1>
                {this.props.location.location}
            </h1>
            {/* <img src={`${this.props.location.url}`} alt=""/> */}
        </div>
    )
    }
}


export default Card;
