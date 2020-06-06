import React, { Component } from 'react';

class RightArrow extends Component {
    render() {
        return (
            <div className='backArrow' onClick={this.props.goToNextSlide}>
                {/* <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i> */}
                <p>➡️</p>
            </div>
        )
    }
}
export default RightArrow;