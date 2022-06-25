const express = require('express');
const router = express.Router();
const allTrips = require('../../AllTrips.js');
// const Trips = require('../../Trips.js');
const updateAllTrips = require('./updateAllTrips.js');


router.get('/all', (req, res) => {
    res.json(allTrips);
});

router.get('/', (req, res) => {
    updateAllTrips(req);
    // Shuffle the allTrips array
    allTrips.sort(() => Math.random() - 0.5); // idk what the hell this does, ill assume that it randomizes the array
    // Find all trips that are less than cost
    const filteredTrips = allTrips.filter(trip => trip.price < parseInt(req.params.cost)); 
    // Return 404 if no trips are found, might want to change this!
    if (filteredTrips.length === 0) {
        res.status(404).json({ message: 'No trips found' });
    }
    // Return the filtered trips
    res.json(filteredTrips);
});

module.exports = router;