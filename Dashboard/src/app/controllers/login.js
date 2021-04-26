
class LoginController {
    index(req,res) {
        res.render('login', {layout: 'begin'});
    };
};

module.exports = new LoginController;