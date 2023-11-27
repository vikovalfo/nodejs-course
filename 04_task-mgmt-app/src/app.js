const express = require('express');
const morgan = require('morgan');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(200).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(200).send(task);
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.use(morgan('common'));

app.listen(port, () => console.log('Server listening on port ', port));