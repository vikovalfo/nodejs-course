const config = {
    weatherstack: {
        CURRENT_PATH: 'current',
        API_HOST: 'http://api.weatherstack.com/',
        ACCESS_KEY: '9e709c4093d62f6a72bdfec12424c2e1',
        LOCATION: 'Guadalajara'
    },
    mapbox: {
        API_HOST: 'https://api.mapbox.com/geocoding/v5/',
        PLACES_PATH: 'mapbox.places/',
        LOCATION: 'Los%20Angeles.json',
        ACCESS_KEY: '',
    }
};

exports.config = config;