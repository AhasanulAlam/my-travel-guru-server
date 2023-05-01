const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const destinations = require('./data/destinations.json');
const hotels = require('./data/hotels.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('My Travel Guru Server Running..');
});

app.get('/destinations', (req, res)=>{
    res.send(destinations);
});

app.get('/destinations/:city_id', (req, res) => {
    const city_id = req.params.city_id;
    console.log(city_id);
    const selectedDestination = destinations.find(d => d.city_id === city_id );
    res.send(selectedDestination);
});

app.get('/hotels', (req, res)=>{
    res.send(hotels);
});

app.get('/hotels/:city_id', (req, res)=>{
    const city_id = req.params.city_id;
    const selectedDestinationHotels = hotels.filter(h => h.city_id === city_id);
    res.send(selectedDestinationHotels);
})


app.listen(port, () =>{
    console.log(`My Travel Guru API is Running on Port: ${port}`);
});

