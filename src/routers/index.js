const authRoute = require('./authUser');
const generalRoute = require('./general');
const userRoute = require('./user');
const predictRoute = require('./predict');



function route(app) {
    app.use('/api/auth', authRoute);
    app.use('/api/user', userRoute);
    app.use('/api/generals', generalRoute);
    app.use('/api/predict', predictRoute);
};

module.exports = route;