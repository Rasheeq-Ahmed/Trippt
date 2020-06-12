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
        <div className="card">
            {this.props.location.location}
            {/* <img src={`${this.props.location.url}`} alt=""/> */}
        </div>
    )
    }
}


export default Card;
