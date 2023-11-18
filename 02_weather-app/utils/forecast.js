const request = require('request');

const { config } = require('../config/config');

const forecast = async (latitude, longitude, callback) => {
    const url = `${config.weatherstack.API_HOST}${config.weatherstack.CURRENT_PATH}?access_key=${config.weatherstack.ACCESS_KEY}&query=${latitude},${longitude}`;
    await request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connecto to weather services', undefined);
        } else if (body.error) {
            const { info } = body.error;
            callback(info, undefined);
        } else {
            const { weather_descriptions: description, temperature } = body.current;
            callback(undefined, description[0] + ". It is currently " + temperature + " degress out.");
        }
    });
};

module.exports = {
    forecast
};