import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile, updateUserProfile } from '../../actions/profile_actions'

class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.profile.firstName,
            lastName: '',
            location: ''
        }
    }


    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };





    render() {
        console.log(this.state)
        return (
            <div className="update-profile-container">
                <form className='update-profile-form'>
                    <label> First Name:
                        <input type="text"
                               onChange={this.update('firstName')}
                               required
                               />
                    </label>
                    <label> Last Name: 
                        <input type="text" 
                               onChange={this.update('lastName')}
                               required
                               />
                    </label>
                    <label> Location: 
                        <br/>
                        <label> San Francisco
                            <input value="San Francisco" name='location' type="radio" onChange={this.update('location')}/>
                        </label>
                        <br/>
                        <label> New York
                            <input value="New York" name='location' type="radio" onChange={this.update('location')}/>
                        </label>
                    </label>
                    <br/>

                    {!Object.values(this.props.profile) ? 
                        <button onClick={()=> this.props.createUserProfile(this.state)}>Create Profile</button> : 
                        <button onClick={()=> this.props.updateUserProfile(this.props.user.id, this.state)}> Update Profile </button>}
                </form>
            </div>
        )
    }
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
        updateUserProfile: (userId, data) => dispatch(updateUserProfile(userId, data))
    }
};

export default connect(mSTP, mDTP)(MyProfile)



