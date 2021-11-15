const Predict = require("../models/Predict");

exports.predictData = async (req, res, next) => {
  // Structure data send from edge
  const { crop_recomentation, time_forecast, regresstion } = req.body;
  console.log({ crop_recomentation, time_forecast, regresstion });

  // Simple check
  if (!crop_recomentation || !time_forecast || !regresstion)
    return res.status(400).json({ success: false, message: "Data loss!!!" });
  try {
    const newPredict = new Predict({
      crop_recomentation: crop_recomentation,
      time_forecast: time_forecast,
      regresstion: regresstion,
      user: req.userId,
    });
    console.log(newPredict);
    await newPredict.save();
    res.json({
      success: true,
      message: "Created new predict successfull!!!",
      predict: newPredict,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Inccorect server" });
  }
};

exports.getPredict = async (req, res, next) => {
  try {
    const predicts = await Predict.find({ user: req.userId })
      .limit(10)
      .populate("user", "username");
    res.json(
      {
        success: true,
        predicts,
      },
      200
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
