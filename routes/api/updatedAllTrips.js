const AllTrips = require('../../AllTrips.js');
const axios = require('axios');

// Loop through allTrips and update flight data

// module.exports = async (airportStartCode, shortenedTrips) => {
//     for (let i = 0; i < shortenedTrips.length; i++) {
//         let trip = shortenedTrips[i];
//         const options = {
//             method: 'GET',
//             url: 'https://hotel-price-aggregator.p.rapidapi.com/search',
//             params: {q: trip.name},
//             headers: {
//                 'X-RapidAPI-Key': '55952a2328msh42648699cd5dbf5p16e024jsn7df7c9cf178b',
//                 'X-RapidAPI-Host': 'hotel-price-aggregator.p.rapidapi.com'
//             }
//         };

//         await axios.request(options).then(function (response) {
//             // console.log(response.data);
//             trip.hotels = response.data;
//         }).catch(function (error) {
//             console.error(error);
//         });

//         // const options2 = {
//         // method: 'GET',
//         // url: 'https://distanceto.p.rapidapi.com/get',
//         // params: {route: `[{"t":"${airportStartCode}"},{"t":"${trip.name}}]`, car: 'false'},
//         // headers: {
//         //     'X-RapidAPI-Key': '55952a2328msh42648699cd5dbf5p16e024jsn7df7c9cf178b',
//         //     'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
//         // }
//         // };

//         // await axios.request(options2).then(function (response) {
//         //     console.log(response.data);
//         //     trip.flightDist = response.data.steps.distance.flight[0].distance;
//         // }).catch(function (error) {
//         //     console.error(error);
//         // });
//     }
//     console.log(shortenedTrips);
//     return shortenedTrips;
// };

module.exports = async (airportStartCode, justOneTrip) => {
        const options = {
            method: 'GET',
            url: 'https://hotel-price-aggregator.p.rapidapi.com/search',
            params: {q: justOneTrip.name},
            headers: {
                'X-RapidAPI-Key': '59e0516923msh35fa7a4fe8f71a6p1bc76ejsn19a411fca866',
                'X-RapidAPI-Host': 'hotel-price-aggregator.p.rapidapi.com'
            }
        };
        let data;

        await axios.request(options).then(function (response) {
            // console.log(response.data);
            data = response.data;
        }).catch(function (error) {
            console.error(error);
        });

        return data;
};
