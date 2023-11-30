const userService = require('./user.service');

const createHandler = async (req, res) => {
    try {
        const result = await userService.create(req.body);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getMeHandler = async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getHandler = async (req, res) => {
    try {
        const result = await userService.get(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateHandler = async (req, res) => {
    try {
        const result = await userService.update(req.params.id, req.body);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
};

const deleteHandler = async (req, res) => {
    try {
        const result = await userService.remove(req.params.id)
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
};

const authHandler = async (req, res) => {
    try {
        const result = await userService.auth(req.body);
        res.status(200).send(result)
    } catch (e) {
        res.status(401).send(e);
    }
};

const logoutHandler = async (req, res) => {
    try {
        const result = await userService.logout(req.user, req.token);
        res.status(200).send(result);
    } catch (e) {
        res.status(401).send(e);
    }
};

const logoutAllHandler = async (req, res) => {
    try {
        const result = await userService.logoutAll(req.user);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = {
    createHandler,
    getMeHandler,
    getHandler,
    updateHandler,
    deleteHandler,
    authHandler,
    logoutHandler,
    logoutAllHandler
};