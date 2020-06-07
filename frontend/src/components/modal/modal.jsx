import React from 'react'
import './modal.css'
import {Link} from 'react-router-dom'

class Modal extends React.Component {
    constructor() {
        super()

    }

    render() {
        if (!this.props.show) {
            return null
        }
        return (

            <div className="modal" id="modal">
                <h2>Modal Window</h2>
                <div className="content">{this.props.children}</div>
                <p>Attractions has been added to your Trips</p>
                <div className='actions'>
                    <button
                        className="toggle-button"
                        onClick={() => { this.props.closeModal() }}>

                        Stay </button>
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Modal