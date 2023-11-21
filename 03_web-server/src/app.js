const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('', (req, res) => {
    res.send('hello express!');
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Guadalajara is partially cloudy',
        location: 'Guadalajara, Jalisco'
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));