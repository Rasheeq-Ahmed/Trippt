const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    trip: {
        type: Schema.Types.ObjectId,
        ref: 'trips'
    },

    locationId: {
        type: Number,
        required: true
    },

    locationName: {
      type: String,
      required: true  
    },

    locationImg: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Attraction = mongoose.model('attractions', AttractionSchema);
module.exports = Attraction