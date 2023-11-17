'use-strict';
const request = require('request');

const { config } = require('./config');

const weatherstackURL = `${config.weatherstack.API_HOST}${config.weatherstack.CURRENT_PATH}?access_key=${config.weatherstack.ACCESS_KEY}&query=${config.weatherstack.LOCATION}`;
const mapboxURL = `${config.mapbox.API_HOST}${config.mapbox.PLACES_PATH}${config.mapbox.LOCATION}?access_token=${config.mapbox.ACCESS_KEY}&limit=${config.mapbox.LIMIT}`;

const weatherApp = async () => {
    await request({ url: weatherstackURL, json: true }, (error, response) => {
        if (response.statusCode === 200) {
            const current = response.body['current'];
            console.log(`It\'s currently ${current.temperature} degrees out there, is a ${current.precip}% chances of rain.`);
        } else console.log(response.statusCode, response.statusMessage);
    });

    await request({ url: mapboxURL, json: true }, (error, response) => {
        if (response.statusCode === 200) {
            const latitude = response.body.features[0].center[0];
            const longitude = response.body.features[0].center[1];
            console.log(latitude, longitude);
        } else console.log(response.statusCode, response.statusMessage);
    });
};

weatherApp();