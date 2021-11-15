const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PredictSchema = new Schema({
    date: {
        type: String,
    },
    crop_recomentation: {
        type: String,
    },
    time_forecast: {
        type: String,
    },
    regresstion: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    }
});

module.exports = mongoose.model('predicts', PredictSchema);