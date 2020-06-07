import React from 'react'
import './modal'

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
                <div className='actions'>
                    <button
                        className="toggle-button"
                        onClick={() => { this.props.closeModal() }}>

                        Close </button>
                </div>
            </div>
        )
    }
};

export default Modal