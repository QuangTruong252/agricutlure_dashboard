const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const General = new Schema ({
    date: {type: Date, default: Date.now},
    time:  String,
    data: {
        co2: {
            value: String,
        },
        temperature: {
            value: String,
            status: String,
        },
    },
});

module.exports = mongoose.model('General', General);