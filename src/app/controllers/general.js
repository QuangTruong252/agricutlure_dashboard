const General = require("../models/General");

exports.getAllGeneral = async (req, res, next) => {
  try {
    const generals = await General.find({ user: req.userId })
      .limit(10)
      .populate("user", "username");
    const Temperature = [];
    generals.map((general) =>
      Temperature.push(parseFloat(general.data.temperature.value))
    );
    const Humidity = [];
    generals.map((general) =>
      Humidity.push(parseFloat(general.data.humidity.value))
    );
    const ph = [];
    generals.map((general) => ph.push(parseFloat(general.data.ph.value)));

    const aveTemperature =
      Temperature.reduce((a, b) => a + b, 0) / Temperature.length || 0;
    const aveHumidity =
      Humidity.reduce((a, b) => a + b, 0) / Humidity.length || 0;
    const aveph = ph.reduce((a, b) => a + b, 0) / ph.length || 0;

    res.json(
      {
        success: true,
        generals,
        averages: {
            aveTemperature,
            aveHumidity,
            aveph
        }
      },
      200
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.createGeneral = async (req, res, next) => {
  // Structure data send from edge
  const { temperature, humidity, ph } = req.body;
  console.log({ temperature, humidity, ph });

  // Simple check
  if (!temperature || !humidity || !ph)
    return res.status(400).json({ success: false, message: "Data loss!!!" });
  try {
    const newGeneral = new General({
      data: {
        temperature: {
          value: temperature,
        },
        humidity: {
          value: humidity,
        },
        ph: {
          value: ph,
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
};
