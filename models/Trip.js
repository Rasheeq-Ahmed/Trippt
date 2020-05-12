const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    itinerary: {
        type: Schema.Types.ObjectId,
        ref: 'itinerary'
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

const Trip = mongoose.model('trip', TripSchema);
module.exports = Trip