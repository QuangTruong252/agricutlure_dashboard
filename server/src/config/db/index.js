const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const URL = 'mongodb+srv://quangtruonguit:oum7i43HA3V1oJ0B@agriculturedb.ldujx.mongodb.net/agriculture_db?retryWrites=true&w=majority';
async function connectDB() {

    try {
        await mongoose.connect(URL, {
            dbName: 'agriculture_db',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect success!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }

};

module.exports = { connectDB };