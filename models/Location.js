const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String
    },

    latitude: {
        type: Number
    },
    
    longitude: {
        type: Number
    },

    detail: {
        type: Text
    }

});

const Location = mongoose.model('trip', LocationSchema);
module.exports = Location