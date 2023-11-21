const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');

const publicDirectoryPath = (path.join(__dirname, '../public'));
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);

hbs.registerPartials(partialsDirectoryPath);

app.use(express.static(publicDirectoryPath));
app.use(morgan('common'));

app.get('', (_req, res) => {
    res.render('index', {
        title: 'Weather App',
        forecast: 'Guadalajara is partially cloudy',
        location: 'Guadalajara, Jalisco',
    });
});

app.get('/about', (_req, res) => {
    res.render('about', { title: 'About', name: 'Alessa' });
});

app.get('/help', (_req, res) => {
    res.render('help', { title: 'Help', message: 'May I help you?' });
});

app.get('/help/*', (_req, res) => res.render('error', { title: '404 for help', message: 'Help article not found' }));

app.get('*', (_req, res) => res.render('error', { title: '404', message: 'Page not found' }));

app.listen(3000, () => console.log('Server running on port 3000'));