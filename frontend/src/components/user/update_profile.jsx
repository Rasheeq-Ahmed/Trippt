import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile, updateUserProfile } from '../../actions/profile_actions'

class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            location: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.setState({
                firstName: this.props.profile.firstName,
                lastName: this.props.profile.lastName,
                location: this.props.profile.location
            })
        }
    };

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    outsideClose(e) {
        let profile = document.getElementById("my-profile");
        if (e.target === profile) {
            this.props.showProfile()
        }
    }
    

    render() {
        if(!this.props.show) return null
        return (
            <div id ='my-profile' className="update-profile-container" onClick={(e)=>this.outsideClose(e)}>
                <form className='update-profile-form'>
                    <label> First Name:
                        <input type="text"
                               value={`${this.state.firstName}`}
                               onChange={this.update('firstName')}
                               />
                    </label>
                    <label> Last Name: 
                        <input type="text"
                               value={this.state.lastName} 
                               onChange={this.update('lastName')}
                               />
                    </label>
                    <label> Location: 
                        <br/>
                        <label> San Francisco
                            <input value="San Francisco" 
                                   name='location' 
                                   type="radio"
                                   checked={ this.state.location === 'San Francisco' ? true : false} 
                                   onChange={this.update('location')}/>
                        </label>
                        <br/>
                        <label> New York
                            <input value="New York" 
                                   name='location' 
                                   type="radio"
                                   checked={this.state.location === 'New York' ? true : false} 
                                   onChange={this.update('location')}/>
                        </label>
                    </label>
                    <br/>

                    {!this.props.profile.firstName && !this.props.profile.lastName ? 
                        <button 
                            onClick={()=> {this.props.createUserProfile(this.state);
                                           this.props.showProfile()}}>
                                Create Profile</button> : 
                        <button 
                            onClick={()=> this.props.updateUserProfile(this.props.user.id, this.state)}> 
                                Update Profile </button>}

                        <button onClick={()=> this.props.showProfile()}>Close</button>
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



