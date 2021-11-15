const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const General = new Schema ({
    date: {
        date: {
            type: String,
            default: today.getDate()
        },
        month: {
            type: String,
            default: (today.getMonth()+1)
        },
        year: {
            type: String,
            default: (today.getFullYear())
        }
    },
    time:  {
        hours: {
            type: String,
            default: today.getHours()
        },
        minutes: {
            type: String,
            default: today.getMinutes()
        },
        seconds: {
            type: String,
            default: today.getSeconds()
        }
    },
    data: {
        ph: {
            value: String,
        },
        temperature: {
            value: String,
        },
        humidity: {
            value: String,
        }
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    }
});

module.exports = mongoose.model('General', General);