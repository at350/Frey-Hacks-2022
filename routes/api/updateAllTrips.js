const AllTrips = require('../../AllTrips.js');
const axios = require('axios');

// Loop through allTrips and update flight data

module.exports = (req) => {
    for (let i = 0; i < AllTrips.length; i++) {
        let trip = allTrips[i];
        const options = {
            method: 'GET',
            url: 'https://hotel-price-aggregator.p.rapidapi.com/search',
            params: {q: trip.name},
            headers: {
                'X-RapidAPI-Key': '55952a2328msh42648699cd5dbf5p16e024jsn7df7c9cf178b',
                'X-RapidAPI-Host': 'hotel-price-aggregator.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        // Do async stuff here
        // When weird API stuff happens
        // Cool down for a bit
        

        // Make sure to update everything with info from req too
    }
};
