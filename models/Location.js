const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String
    },

    location_id: {
        type: String
    }

});

const Location = mongoose.model('trip', LocationSchema);
module.exports = Location