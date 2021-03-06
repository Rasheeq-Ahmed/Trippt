const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    handle: {
        type: String,
        ref: 'users'
    },

    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    location: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('profiles', ProfileSchema);
module.exports = Profile