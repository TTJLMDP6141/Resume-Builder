const mongoose = require('mongoose');
const URL = 'mongodb+srv://jadhav:tu1111@cluster0.s52ue7m.mongodb.net/Resume';
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})
