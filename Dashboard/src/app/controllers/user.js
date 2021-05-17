
class UserController {
    index(req,res) {
        res.render('user');
    };
};

module.exports = new UserController;