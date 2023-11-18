'use-strict';
const { forecast } = require('./utils/forecast');
const { geocode } = require('./utils/geocode');

const location = process.argv[2];
if (location) {
    geocode(location, (geocodeError, geocodeData) => {
        if (geocodeError) return console.log(geocodeError);
        if (geocodeData) {
            forecast(geocodeData.latitude, geocodeData.longitude, (forecastError, forecastData) => {
                if (forecastError) return console.log('Error', forecastError);
                console.log(forecastData);
                console.log(geocodeData.location);
            });
        }
    });
} else console.log('Please provide a location as argument!');

