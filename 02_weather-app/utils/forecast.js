const request = require('request');

const { config } = require('../config/config');


const forecast = async (latitude, longitude, callback) => {
    const url = `${config.weatherstack.API_HOST}${config.weatherstack.CURRENT_PATH}?access_key=${config.weatherstack.ACCESS_KEY}&query=${latitude},${longitude}`;
    console.log(url);
    await request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connecto to weather services', undefined);
        } else if (response.body.error) {
            callback(response.body.error.info, undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.");
        }
    });
};

module.exports = {
    forecast
};