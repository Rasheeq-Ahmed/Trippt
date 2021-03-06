import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile, updateUserProfile, getUserProfile } from '../../actions/profile_actions'
import { Link } from 'react-router-dom';
import NavBar from '../nav/navbar_container'


class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            location: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        this.props.getUserProfile(this.props.user.id)
    }


    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.setState({
                firstName: this.props.profile.firstName,
                lastName: this.props.profile.lastName,
                location: this.props.profile.location
            });
        }
    };


    handleSubmit(e) {
        e.preventDefault();
        if(!Object.values(this.props.profile).length) {
            this.props.createUserProfile(this.state)
                .then(this.props.history.goBack())
        } else {
            this.props.updateUserProfile(this.props.user.id, this.state)
                .then(this.props.history.goBack())
        }
    } 

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value })
    };    

    render() {
        return (
            <div>
                <NavBar/>
                <div id ='my-profile' className="update-profile-container">

                    <form className='update-profile-form' onSubmit={this.handleSubmit}>
                        <h1 className='form-header'>
                            {!Object.values(this.props.profile).length ? 'Create Profile' : 'Update Profile'}</h1>
                        
                        <label className='profile-name'> First Name:
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                />
                        </label>
                        <label className='profile-name'> Last Name: 
                            <input type="text"
                                value={this.state.lastName} 
                                onChange={this.update('lastName')}
                                />
                        </label>
                        <label> 
                            <label className='form-location'> San Francisco, CA
                                <input value="San Francisco, CA"                          
                                    name='location' 
                                    type="radio"
                                    checked={ this.state.location === 'San Francisco, CA' ? true : false} 
                                    onChange={this.update('location')}/>
                            </label>
                        
                            <label className='form-location' id='new-york'> New York, NY
                                <input value="New York, NY"      
                                    name='location' 
                                    type="radio"
                                    checked={this.state.location === 'New York, NY' ? true : false} 
                                    onChange={this.update('location')}/>
                            </label>
                        </label>
                        <div className='form-btn-container'>
                            {!Object.values(this.props.profile).length ? 
                                <button
                                    className='form-btn'
                                    type='submit'>
                                        Create Profile</button> : 
                                <button
                                    className='form-btn'
                                    type='submit'> 
                                        Update Profile</button>}

                                <Link to='/profile'><button className='form-btn'>Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </div>

        )}
};

const mSTP = state => {
    return {
        profile: state.profile || {},
        user: state.session.user
    }
};

const mDTP = dispatch => {
    return {
        createUserProfile: (data) => dispatch(createUserProfile(data)),
        updateUserProfile: (userId, data) => dispatch(updateUserProfile(userId, data)),
        getUserProfile: (userId) => dispatch(getUserProfile(userId))
    }
};

export default connect(mSTP, mDTP)(MyProfile)



