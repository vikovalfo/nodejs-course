const User = require('./user.model');

const create = async (user) => {
    return new User(user).save();
};

const getAll = async () => {
    return await User.find({});
};

const get = async (id) => {
    return await User.findOne({ _id: id });
};

const update = async (id, user) => {
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const updates = Object.keys(user);
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return { error: 'Invalid updates!' };
    }

    const updatedUser = await User.findByIdAndUpdate({ _id: id }, { ...user }, { new: true, runValidators: true });
    if (!updatedUser) {
        return { error: 'User does not exist!' };
    }

    return updatedUser;
};

const remove = async (id) => {
    const userDeleted = await User.findByIdAndDelete({ _id: id });

    if (!userDeleted) {
        return { error: 'User does not exist!' };
    }

    return { message: 'User deleted!' };

};

module.exports = {
    create,
    getAll,
    get,
    update,
    remove
}