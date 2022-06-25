// All prices except for hotel would be per adult
// Time is how many minutes we recommend spending there
// Link is google maps link

const trips = [
    {
        name: 'Paris',
        description: "Perfect for...?",
        startDate: "2022-07-05",
        endDate: "2022-07-13",
        price: 1200,
        adults: 2,
        hotels: [
            {
                name: 'La olives',
                stars: 3,
                price: 150,
            }
        ],
        flight: {
            name: 'Ryanair',
            price: 400,
        },
        social: [
            {
                name: "Food Bank Paris",
                description: "A food bank serving the Paris area since 1905.",
                link:''
            }
        ],
        attractions: [
            {
                name: "Eiffel Tower",
                description: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. The tower is 324 metres (1,099 ft) tall, and stands a total of 324 metres (1,099 ft) to the ground. The tower is completed in 1887.",
                time: 30,
                link: ''
            }
        ]
    }
];

module.exports = trips;