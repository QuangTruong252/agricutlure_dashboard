const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const sass = require('node-sass');
const app = express();
const port = 3333;

// Import route
const route = require('./routers/index');
// Import DB
const db = require('./config/db/index');
// Connect to DB
db.connectDB();

app.use(express.static(path.join(__dirname,'public')));

// use morgan to log HTTP logger
app.use(morgan('combined'));
// use handlebar for code html, template engine
app.engine('hbs',exphbs({
    extname : '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

console.log('PATH: ' + path.join(__dirname,'resources/views'));

// Route
route(app);


app.listen(port, () => console.log('Listening at port http://localhost:'+ port));