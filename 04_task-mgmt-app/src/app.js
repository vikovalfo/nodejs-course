const express = require('express');
const morgan = require('morgan');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('common'));

app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/users/all', async (_req, res) => {
    try {
        const usersFound = await User.find({});
        res.status(200).send(usersFound);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const userFound = await User.findOne({ _id });
        res.status(200).send(userFound);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    const _id = req.params.id;
    const updatedFields = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate({ _id }, { ...updatedFields }, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).send();
        }
        res.status(200).send(updatedUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        const taskSaved = await task.save();
        res.status(201).send(taskSaved);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/tasks/all', async (_req, res) => {
    try {
        const tasksFound = await Task.find({});
        res.status(200).send(tasksFound);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const taskFound = await Task.findOne({ _id });
        res.status(200).send(taskFound);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, () => console.log('Server listening on port', port));