const User = require('./user.model');

const createHandler = async (req, res) => {
    const user = new User(req.body);

    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getAllHandler = async (_req, res) => {
    try {
        const usersFound = await User.find({});
        res.status(200).send(usersFound);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getHandler = async (req, res) => {
    const _id = req.params.id;

    try {
        const userFound = await User.findOne({ _id });
        res.status(200).send(userFound);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateHandler = async (req, res) => {
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
};

const deleteHandler = async (req, res) => {
    const _id = req.params.id;

    try {
        const userDeleted = await User.findByIdAndDelete({ _id });

        if (!userDeleted) {
            return res.send({ error: 'User does not exist!' });
        }

        res.status(200).send({ message: 'User deleted!' });
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