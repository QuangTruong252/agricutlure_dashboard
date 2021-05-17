
class SettingsController {
    index(req,res) {
        res.render('settings');
    };
};

module.exports = new SettingsController;