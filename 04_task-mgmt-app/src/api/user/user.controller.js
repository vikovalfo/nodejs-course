const userService = require('./user.service');

const createHandler = async (req, res) => {
    try {
        const result = await userService.create(req.body);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getAllHandler = async (_req, res) => {
    try {
        const result = await userService.getAll();
        res.status(200).send(result);
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

module.exports = {
    createHandler,
    getAllHandler,
    getHandler,
    updateHandler,
    deleteHandler
};