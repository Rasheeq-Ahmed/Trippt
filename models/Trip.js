const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    location: {
        type: String,
        required: true
    },


    date: {
        type: Date,
        default: Date.now
    }
});

const Trip = mongoose.model('trips', TripSchema);
module.exports = Trip