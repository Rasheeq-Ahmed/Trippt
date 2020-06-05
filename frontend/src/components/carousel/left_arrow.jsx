import React, { Component } from 'react';

class LeftArrow extends Component {
    render() {
        return (
            <div className='backArrow' onClick={this.props.goToPrevSlide}>
                {/* <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i> */}
                <p>←</p>
            </div>
        )
    }
}
export default LeftArrow;