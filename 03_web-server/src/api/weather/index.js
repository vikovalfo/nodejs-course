const express = require('express');
const router = express.Router();

const weatherService = require('./weather.controller');

router.get('', weatherService.homeHandler);
router.get('/weather', weatherService.weatherHandler);
router.get('/about', weatherService.aboutHandler);
router.get('/help', weatherService.helpHandler);
router.get('/help/*', weatherService.helpErrorHandler);
router.get('*', weatherService.errorHandler);

module.exports = router;