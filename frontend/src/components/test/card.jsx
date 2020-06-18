import React from 'react'
// import './test.scss'

class Card extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    


    render() {
        let {location} = this.props
    return (
        <div className='test-card-all'>
            <img className="test-image" src={location.url}></img>
        </div>
    )
    }
}


export default Card;
