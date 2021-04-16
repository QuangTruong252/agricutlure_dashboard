const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const sass = require('node-sass');
const app = express();
const port = 3333;


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

app.get('/generality', (req,res) => {
    res.render('generality');
});

app.get('/analytics', (req,res) => {
    res.render('analytics');
});




app.listen(port, () => console.log('Listening at port http://localhost:'+ port));