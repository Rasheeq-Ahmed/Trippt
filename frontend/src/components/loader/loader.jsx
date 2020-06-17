import React from 'react';
import NavBar from '../nav/navbar_container'
import LoaderGif from '../../assets/loading.gif'
import './loader.css'


class Loader extends React.Component {

    render () {

        return (
            <div className='loader-container'>
                <NavBar className='loader-navbar'/>
                <div className='loader'>
                    <img className='load-img'
                        src={LoaderGif} 
                        alt="Loading..."/>
                </div>
            </div>
        )
    };
};


export default Loader