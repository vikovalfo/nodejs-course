const request = require('request');

const { config } = require('../config/config');

const mapboxURL = `${config.mapbox.API_HOST}${config.mapbox.PLACES_PATH}${config.mapbox.LOCATION}?access_token=${config.mapbox.ACCESS_KEY}`;

const forecast = async (latitude, longitude, callback) => {
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