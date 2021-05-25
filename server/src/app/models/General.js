const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const General = new Schema ({
    date: {
        type: String, 
        default: today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    },
    time:  {
        type: String,
        default: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    data: {
        o2: {
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