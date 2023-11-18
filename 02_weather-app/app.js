'use-strict';
const { forecast } = require('./utils/forecast');
/* const { geocode } = require('./utils/geocode');

geocode('Philadelphia', (error, data) => {
    if (error) console.log('Error', error);
    if (data) console.log('Data', data);
}); */

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) console.log('Error', error);
    if (data) console.log('Data', data);
});
