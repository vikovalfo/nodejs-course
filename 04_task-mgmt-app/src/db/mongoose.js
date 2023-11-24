const mongoose = require('mongoose');
const { connectionData } = require('../config');

const connectionURL = `${connectionData.protocol}${connectionData.user}${connectionData.password}${connectionData.hostname}${connectionData.domain}${connectionData.database}`;

mongoose.connect(connectionURL)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log('Error: ', err));

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const me = new User({
    name: 'Casssandra',
    age: 27
});

me.save().then(() => console.log(me)).catch((err) => console.log('Error saving the user: ', err));