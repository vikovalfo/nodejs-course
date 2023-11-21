const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('common'));

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Guadalajara is partially cloudy',
        location: 'Guadalajara, Jalisco'
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));