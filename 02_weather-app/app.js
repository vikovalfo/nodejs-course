'use-strict';

const geocode = require('./utils/geocode');

geocode.geocode('Philadelphia', (error, data) => {
    if (error) console.log('Error', error);
    if (data) console.log('Data', data);
});