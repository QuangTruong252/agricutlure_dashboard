
class AnalyticsController {
    index(req,res) {
        res.render('analytics');
    };
};

module.exports = new AnalyticsController;