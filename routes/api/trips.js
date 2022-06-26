const express = require('express');
const router = express.Router();
const allTrips = require('../../AllTrips.js');
// const Trips = require('../../Trips.js');
const updateAllTrips = require('./updatedAllTrips.js');
const trips = require('../../Trips.js');
const airports = require("./airports.js");

router.get('/all', (req, res) => {
    res.json(allTrips);
});

// The form will ask for the following:
// Cost
// Number of adults
// Start date
// End date
// Starting location

router.post('/', (req, res) => {
    // updateAllTrips(req);
    const adults = req.body.adults;
    // const startDate = req.query.startDate;
    // const endDate = req.query.endDate;
    const airportStartCode = req.body.iata;

    // Shuffle the allTrips array
    allTrips.sort(() => Math.random() - 0.5); // idk what the hell this does, ill assume that it randomizes the array
    // OH NEVERMIND I UNDERSTAND NOW
    
    trips[0] = allTrips[0];
    trips[1] = allTrips[1];
    trips[2] = allTrips[2];
    trips[3] = allTrips[3];

    let latStart;
    let longStart;

    // for (let i = 0; i < airports.length; i++) {
    //     if (airports[i].iata === airportStartCode) {
    //         latStart = airports[i].lat;
    //         longStart = airports[i].lon;
    //         break;
    //     }
    // }

    for (const thing in airports) {
        if (thing.iata === airportStartCode) {
            latStart = thing.lat;
            longStart = thing.lon;
            break;
        }
    }

    trips.forEach(trip => {
        let latEnd = trip.latitude;
        let longEnd = trip.longitude;
        let tripDistance = distance(latStart, longStart, latEnd, longEnd);
        trip.price = tripDistance * 0.14;
    });

    let counter = 0;
    trips.forEach(async trip => {
        await updateAllTrips(airportStartCode, trip).then(hotelList => {
            // console.log("ADDING IT???");
            // console.log("THIS IS HOTEL LIST");
            // console.log(typeof(hotelList));
            trip.hotels = {...hotelList};
            counter++;
            if (counter === 4) {
                res.redirect('/');
            }
        }).catch(error => {
            res.status(400).json({msg: `Error ${error}`});
        });
    });

    // res.redirect('/');

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

// Function to calculate the distance in miles between two coordinates of latitude and longitude
function distance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))/2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

module.exports = router;