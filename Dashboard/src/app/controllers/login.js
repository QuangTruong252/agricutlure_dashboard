class LoginController {
    index(req, res) {
        res.render('login', { layout: 'begin' });
    };
    register(req, res) {
        res.render('register', { layout: 'begin' });
    };
};

module.exports = new LoginController;