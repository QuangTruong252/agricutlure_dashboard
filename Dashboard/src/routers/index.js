const generalityRoute = require('./generality');
const analyticsRoute = require('./analytics');
const userRoute = require('./user');
const settingsRoute = require('./settings');
const loginRoute = require('../routers/login');


function route(app) {
    app.use('/generality', generalityRoute);
    app.use('/analytics', analyticsRoute);
    app.use('/user', userRoute);
    app.use('/settings', settingsRoute);
    app.use('/', loginRoute);
};

module.exports = route;