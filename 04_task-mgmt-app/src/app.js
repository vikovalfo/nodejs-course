const { MongoClient } = require('mongodb');

const {connectionData} = require('./config');

const connectionURL = `${connectionData.protocol}${connectionData.user}${connectionData.password}${connectionData.hostname}${connectionData.domain}${connectionData.database}?retryWrites=true&w=majority`;

MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log(`Connected to ${connectionData.database}`);
});