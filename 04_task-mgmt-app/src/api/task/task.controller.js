const Task = require('./task.model');

const createHandler = async (req, res) => {
    const task = new Task(req.body);
    try {
        const taskSaved = await task.save();
        res.status(201).send(taskSaved);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getAllHandler = async (_req, res) => {
    try {
        const tasksFound = await Task.find({});
        res.status(200).send(tasksFound);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getHandler = async (req, res) => {
    const _id = req.params.id;
    try {
        const taskFound = await Task.findOne({ _id });
        res.status(200).send(taskFound);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateHandler = async (req, res) => {
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.send({ error: 'Invalid updates!' });
    }

    const _id = req.params.id;
    const updatedFields = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate({ _id }, { ...updatedFields }, { new: true, runValidators: true });
        if (!updatedTask) {
            return res.status(404).send();
        }
        res.status(200).send(updatedTask);
    } catch (e) {
        res.status(500).send(e);
    }
};

const deleteHandler = async (req, res) => {
    const _id = req.params.id;

    try {
        const taskDeleted = await Task.findByIdAndDelete({ _id });

        if (!taskDeleted) {
            return res.send({ error: 'Task does not exist!' });
        }

        res.status(200).send({ message: 'Task deleted!' });
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = {
    createHandler,
    getAllHandler,
    getHandler,
    updateHandler,
    deleteHandler
};