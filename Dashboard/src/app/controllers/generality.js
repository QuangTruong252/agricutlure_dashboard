const { render } = require('node-sass');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const General = require('../models/General');

class GeneralityController {
    // [GET] /generality
    index(req, res, next) {
        General.find({})
            .then(generals => {
                res.render('generality', {
                    generals: mutipleMongooseToObject(generals)
                });
            })
            .catch(next);
    };
    // [GET] /generality/history
    showHistory(req, res, next) {
        General.find({})
            .then(generals => {
                res.render('history-generals', {
                    generals: mutipleMongooseToObject(generals)
                });
            })
            .catch(next);
    }
};

module.exports = new GeneralityController;