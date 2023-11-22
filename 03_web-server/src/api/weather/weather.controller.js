const { forecast } = require('./forecast.service');
const { geocode } = require('./geocode.service');

const HomeFn = (_req, res) => {
    res.render('index', { title: 'Weather App' });
};

const weatherFn = (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    }
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            }); 
        })
    });
};

const aboutFn = (_req, res) => {
    res.render('about', { title: 'About', name: 'Alessa' });
};

const helpFn = (_req, res) => {
    res.render('help', { title: 'Help', message: 'May I help you?' });
};

const helpErrorFn = (_req, res) => res.render('error', { title: '404 for help', message: 'Help article not found' });

const errorFn = (_req, res) => res.render('error', { title: '404', message: 'Page not found' });

module.exports = {
    homeHandler: HomeFn,
    weatherHandler: weatherFn,
    aboutHandler: aboutFn,
    helpHandler: helpFn,
    helpErrorHandler: helpErrorFn,
    errorHandler: errorFn
};