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
    const { temperature ,humidity , o2} = req.body;
    console.log({ temperature ,humidity , o2});

    // Simple check
    if (!temperature || !humidity || !o2)
    return res
        .status(400)
        .json({ success: false, message: "Data loss!!!" });
    try {
        const newGeneral = new General({
            data: {
                temperature: {
                    value: temperature,
                },
                humidity: {
                    value: oil,
                },
                o2: {
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

