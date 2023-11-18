
const request = require('request');

const { config } = require('../config/config');

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
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            });
        }
    });
};

module.exports = {
    geocode,
};