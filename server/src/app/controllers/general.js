const General = require('../models/General');

exports.getAllGeneral = async(req, res, next) => {
    try {
        const generals = await General.find({user: req.userId}).populate('user', 'username');
        res.json({
            success: true,
            generals,
        },
        200
    );
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    };
};

exports.createGeneral = async (req, res, next) => {
    // Structure data send from edge
    const { temperature ,oil , co2} = req.body;

    // Simple check
    if (!temperature || !oil || !co2)
    return res
        .status(400)
        .json({ success: false, message: "Data loss!!!" });
    try {
        const newGeneral = new General({
            data: {
                temperature: {
                    value: temperature,
                },
                oil: {
                    value: oil,
                },
                co2: {
                    value: co2,
                 },
            },
            user: req.userId,
        });
        await newGeneral.save();
        res.json({
            success: true,
            message: "Created new general successfull!!!",
            general: newGeneral,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Inccorect server" });
    }
    

}

