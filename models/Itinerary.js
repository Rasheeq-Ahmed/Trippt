const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
    trip: {
        type: Schema.Types.ObjectId,
        ref: 'trips'
    },

    activities: [],

    date: {
        type: Date,
        default: Date.now
    }
});

const Itinerary = mongoose.model('itinerary', ItinerarySchema);
module.exports = Itinerary