
const request = require('request');

const { config } = require('../config/config');

const geocode = async (address, callback) => {
    const url = `${config.mapbox.API_HOST}${config.mapbox.PLACES_PATH}${encodeURIComponent(address)}.json?access_token=${config.mapbox.ACCESS_KEY}`;
    await request({ url }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (JSON.parse(body).features.length === 0) {
            callback('Unable to find location, try another search...', undefined);
        } else {
            const feature = JSON.parse(body).features[0];

            const latitude = feature.center[1];
            const longitude = feature.center[0];
            const location = feature.place_name;

            callback(undefined, {
                latitude,
                longitude,
                location
            });
        }
    });
};

module.exports = {
    geocode,
};