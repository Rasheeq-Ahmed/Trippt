import React from 'react';
import { connect } from 'react-redux'
import './loader.css'

class Loader extends React.Component {

    render () {

        return (
            <div className='loader-container'>
                <div className='loader'>
                    <img src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif" alt=""/>
                </div>
            </div>
        )
    };
};


export default Loader