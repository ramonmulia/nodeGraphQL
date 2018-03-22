const mongoose = require('./');
const { Schema } = mongoose;

module.exports = mongoose.model('Event',
    Schema({
        name: {
            type: String,
            require: true
        },
        date: Date
    }));    