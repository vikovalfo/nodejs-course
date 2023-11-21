const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('common'));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        forecast: 'Guadalajara is partially cloudy',
        location: 'Guadalajara, Jalisco',
        name: 'Ale',
    });
});

app.get('/about', (req, res) => {
    res.render('about', { name: 'Alessa' });
});

app.get('/help', (req, res) => {
    res.render('help', { message: 'May I help you?' });
});

app.listen(3000, () => console.log('Server running on port 3000'));