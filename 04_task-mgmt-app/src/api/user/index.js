const express = require('express');

const router = new express.Router();

const userController = require('./user.controller');
const authMiddleware = require('../../middleware/auth');

router.post('', userController.createHandler);
router.get('/me', authMiddleware, userController.getMeHandler);
router.get('/:id', userController.getHandler);
router.patch('/:id', userController.updateHandler);
router.delete('/:id', userController.deleteHandler);
router.post('/login', userController.authHandler);
router.post('/logout', authMiddleware, userController.logoutHandler);
router.post('/logoutAll', authMiddleware, userController.logoutAllHandler);

module.exports = router;