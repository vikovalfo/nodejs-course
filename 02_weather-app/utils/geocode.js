
const request = require('request');

const { config } = require('../config/config');

const weatherstackURL = `${config.weatherstack.API_HOST}${config.weatherstack.CURRENT_PATH}?access_key=${config.weatherstack.ACCESS_KEY}&query=${config.weatherstack.LOCATION}`;
const mapboxURL = `${config.mapbox.API_HOST}${config.mapbox.PLACES_PATH}${config.mapbox.LOCATION}?access_token=${config.mapbox.ACCESS_KEY}`;

const weatherApp = async () => {
    await request({ url: weatherstackURL, json: true }, (error, response) => {
        if (response.statusCode === 200) {
            const current = response.body['current'];
            console.log(`It\'s currently ${current.temperature} degrees out there, is a ${current.precip}% chances of rain.`);
        } else console.log(response.statusCode, response.statusMessage);
    });

    await request({ url: mapboxURL, json: true }, (error, response) => {
        if (response.statusCode === 200) {
            const features = JSON.parse(response.body).features;
            const latitude = features[0].center[0];
            const longitude = features[0].center[1];
            console.log(latitude, longitude);
        } else console.log(response.statusCode, response.statusMessage);
    });
};

const geocode = async (address, callback) => {
    const url = `${config.mapbox.API_HOST}${config.mapbox.PLACES_PATH}${encodeURIComponent(address)}.json?access_token=${config.mapbox.ACCESS_KEY}`;
    await request({ url }, (error, response) => {

        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (JSON.parse(response.body).features.length === 0) {
            callback('Unable to find location, try another search...', undefined);
        } else {
            const features = JSON.parse(response.body).features;
            callback(undefined, {
                latitude: features[0].center[0],
                longitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    });
};

module.exports = {
    geocode,
    weatherApp
};