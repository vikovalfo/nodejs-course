'use-strict';
const { forecast } = require('./utils/forecast');
const { geocode } = require('./utils/geocode');

const location = process.argv[2];
if (location) {
    geocode(location, (geocodeError, { latitude, longitude, location }) => {
        if (geocodeError) return console.log(geocodeError);
        forecast(latitude, longitude, (forecastError, forecastData) => {
                if (forecastError) return console.log('Error', forecastError);
                console.log(forecastData);
                console.log(location);
            });
    });
} else console.log('Please provide a location as argument!');

