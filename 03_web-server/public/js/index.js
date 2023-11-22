/* it could work with selectorqueries , addeventlisteners and forms */

function fetchWeather() {
    const address = document.getElementById('address').value;
    const error = document.getElementById('error');
    const forecast = document.getElementById('forecast');
    const location = document.getElementById('location');
    fetch('http://localhost:3000/weather?address=' + address).then(response => {
        response.json().then(data => {
            document.getElementById('address').value = '';
            if (data.error) {
                error.innerText = data.error;
            } else {
                forecast.innerText =  data.forecast;
                location.innerText = data.location;
                error.innerText = '';
            }
        });
    });
}