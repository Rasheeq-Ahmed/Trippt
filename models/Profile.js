const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    about: {
        type: Text,
    },

    picture: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('users', ProfileSchema);
module.exports = Profile