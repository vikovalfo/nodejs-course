const express = require('express');

const router = new express.Router();

const taskController = require('./task.controller');

router.post('', taskController.createHandler);
router.get('/all', taskController.getAllHandler);
router.get('/:id', taskController.getHandler);
router.patch('/:id', taskController.updateHandler);
router.delete('/:id', taskController.deleteHandler);

module.exports = router;