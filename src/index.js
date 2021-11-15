const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const route = require('./routers/index');
const db = require('./config/db/index');
require("dotenv").config();

const app = express();
const port = 5000;


// Connect to DB
db.connectDB();

// Use body-parser
app.use(express.json());
app.use(cors());
// Route
// route always below if not error
route(app);

app.get("/", (req, res) => res.send("Hello Truong"));
app.listen(port, () => console.log(`Listening at port http://localhost:${port}`));