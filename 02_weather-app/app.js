'use-strict';
const { forecast } = require('./utils/forecast');
const { geocode } = require('./utils/geocode');

geocode('Guadalajara', (geocodeError, geocodeData) => {
    if (geocodeError) return console.log(geocodeError);
    if (geocodeData) {
        forecast(geocodeData.latitude, geocodeData.longitude, (forecastError, forecastData) => {
            if (forecastError) return console.log('Error', forecastError);
            console.log(forecastData);
            console.log(geocodeData.location);
        });
    }
}); 

