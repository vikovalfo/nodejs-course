'use-strict';

const { config } = require('./config');

const fetchCurrentWeather = async () => {
    const response = await fetch(`${config.API_HOST}${config.CURRENT_WEATHER_PATH}?access_key=${config.ACCESS_KEY}&query=${config.LOCATION}`);
    if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.current);
    }
};

fetchCurrentWeather();