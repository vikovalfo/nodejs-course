const { request } = require('http');

const { config } = require('../02_weather-app/config/config');

const url = `${config.weatherstack.API_HOST}${config.weatherstack.CURRENT_PATH}?access_key=${config.weatherstack.ACCESS_KEY}&query=40,-75&units=f`;

const call = request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

call.on('error', (error) => {
    console.log('An error', error);
});

call.end();