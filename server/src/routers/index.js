const authRoute = require('./authUser');
const generalRoute = require('./general');
const userRoute = require('./user');


function route(app) {
    app.use('/api/auth', authRoute);
    app.use('/api/user', userRoute);
    app.use('/api/generals', generalRoute);
};

module.exports = route;