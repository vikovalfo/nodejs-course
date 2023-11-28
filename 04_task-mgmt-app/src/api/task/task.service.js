const Task = require('./task.model');

const create = async (task) => {
    return new Task(task).save();
};

const getAll = async () => {
    return await Task.find({});
};

const get = async (_id) => {
    await Task.findOne({ _id: _id });
};

const update = async (id, task) => {
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(task);
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return { error: 'Invalid updates!' };
    }

    const updatedTask = await Task.findByIdAndUpdate({ _id: id }, { ...task }, { new: true, runValidators: true });
    if (!updatedTask) {
        return null;
    }
    return updatedTask;
};

const remove = async (id) => {
    const taskDeleted = await Task.findByIdAndDelete({ _id: id });

    if (!taskDeleted) {
        return { error: 'Task does not exist!' };
    }

    return { message: 'Task deleted!' };
};

module.exports = {
    create,
    getAll,
    get,
    update,
    remove
}