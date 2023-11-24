const { MongoClient, ObjectID } = require('mongodb');

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

    const db = client.db(connectionData.database);

/*     db.collection('users').updateOne({
        _id: new ObjectID("655f9da7141f2d0008101418")
    }, { $set: { name: 'Lawrence' } })
        .then(data => console.log(data))
        .catch(() => console.log('Error updating')); */
    
/*     db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: { completed: true }
    })
        .then(result => console.log(result))
        .catch(err => console.log(err)); */
});