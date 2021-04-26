const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const URL = 'mongodb+srv://quangtruong:Anhvip252@clusterdacn.xxcqu.mongodb.net/?retryWrites=true&w=majority';
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