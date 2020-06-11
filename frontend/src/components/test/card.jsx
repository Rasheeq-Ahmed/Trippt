import React from 'react'
import './carry.css'

function Card(props) {
    return (
        <div className="card">
            {props.card_num}
        </div>
    )
}


export default Card;
