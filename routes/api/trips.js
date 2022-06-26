const express = require('express');
const router = express.Router();
const allTrips = require('../../AllTrips.js');
// const Trips = require('../../Trips.js');
const updateAllTrips = require('./updatedAllTrips.js');
const Trips = require('../../Trips.js');

router.get('/all', (req, res) => {
    res.json(allTrips);
});

// The form will ask for the following:
// Cost
// Number of adults
// Start date
// End date
// Starting location

router.get('/', (req, res) => {
    // updateAllTrips(req);
    const adults = req.query.adults;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const airportStartCode = req.query.airportStartCode;

    // Shuffle the allTrips array
    allTrips.sort(() => Math.random() - 0.5); // idk what the hell this does, ill assume that it randomizes the array
    // OH NEVERMIND I UNDERSTAND NOW
    let returnedTrips = allTrips.slice(0, 1);
    returnedTrips.forEach(async trip => {
        await updateAllTrips(airportStartCode, trip).then(hotelList => {
            // console.log("ADDING IT???");
            // console.log("THIS IS HOTEL LIST");
            // console.log(typeof(hotelList));
            trip.hotels = {...hotelList};
            Trips = returnedTrips;
            res.json(returnedTrips);
        }).catch(error => {
            res.error({msg: error.message});
        });
        console.log(trip);
    })
    // updateAllTrips(airportStartCode, returnedTrips).then((returned) => {
    //     returnedTrips = returned;
    // });
    
    // Find all trips that are less than cost
    // const filteredTrips = allTrips.filter(trip => trip.price < parseInt(cost)); 

    // Return 404 if no trips are found, might want to change this!
    // if (filteredTrips.length === 0) {
        // res.status(404).json({ message: 'No trips found' });
    // }
    // Return the filtered trips
    // res.json(filteredTrips);


    // console.log("THIS IS IT");
    // console.log(returnedTrips);
    // res.json(returnedTrips);
});

module.exports = router;