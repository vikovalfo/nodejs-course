const express = require('express');

const router = new express.Router();

const userController = require('./user.controller');

router.post('', userController.createHandler);
router.get('/all', userController.getAllHandler);
router.get('/:id', userController.getHandler);
router.patch('/:id', userController.updateHandler);
router.delete('/:id', userController.deleteHandler);

module.exports = router;