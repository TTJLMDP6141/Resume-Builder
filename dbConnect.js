const mongoose = require('mongoose');
const URL = 'mongodb+srv://tusharjadhav2515:tushar@cluster0.s52ue7m.mongodb.net/Resume-Builder';
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})