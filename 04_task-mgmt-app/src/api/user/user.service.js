const User = require('./user.model');

const create = async (user) => {
    const userCreated = await User(user).save();
    const token = await userCreated.generateAuthToken();
    return { userCreated, token };
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

    const userFound = await User.findById({ _id: id });
    updates.forEach(update => userFound[update] = user[update]);
    const userUpdated = await userFound.save();

    if (!userUpdated) {
        return { error: 'User does not exist!' };
    }

    return userUpdated;
};

const remove = async (id) => {
    const userDeleted = await User.findByIdAndDelete({ _id: id });

    if (!userDeleted) {
        return { error: 'User does not exist!' };
    }

    return { message: 'User deleted!' };

};

const auth = async ({ email, password }) => {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    return { user, token };
};

module.exports = {
    create,
    get,
    update,
    remove,
    auth
}