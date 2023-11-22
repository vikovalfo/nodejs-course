const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');

const routes = require('./api/weather/index');

const publicDirectoryPath = (path.join(__dirname, '../public'));
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);

hbs.registerPartials(partialsDirectoryPath);

app.use(express.static(publicDirectoryPath));
app.use(morgan('common'));

app.use(routes);

app.listen(3000, () => console.log('Server running on port 3000'));