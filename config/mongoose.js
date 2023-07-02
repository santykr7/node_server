const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codeial_dev');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting DB'))

db.once('open',function() {
    console.log('Successful :::: Connected to DB ')
})

module.exports = db