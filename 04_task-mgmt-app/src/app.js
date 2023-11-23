const { MongoClient } = require('mongodb');

const { connectionData } = require('./config');

const connectionURL = `${connectionData.protocol}${connectionData.user}${connectionData.password}${connectionData.hostname}${connectionData.domain}${connectionData.database}?retryWrites=true&w=majority`;

MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log(`Connected to ${connectionData.database}`);

    const db = client.db(connectionData.database)

/*     db.collection('users').insertOne({
        name: 'David',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user');
        }

        console.log(result.ops);
    });

    db.collection('users').insertMany([
        { name: 'Jen', age: 21 },
        { name: 'Robert', age: 32 }
    ], (_error, result) => console.log(result.ops));

    db.collection('tasks').insertMany([
        { description: 'Clean the house', completed: true },
        { description: 'Renew inspection', completed: false },
        { description: 'Pot plants', completed: false },
    ], (error, result) => {
        if (error) return console.log('Unable to insert records');
        console.log(result.ops);
    }); */
});