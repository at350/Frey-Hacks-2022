// All prices except for hotel would be per adult
// Time is how many minutes we recommend spending there
// Link is google maps link

const trips = [
    {
        name: 'Paris',
        description: "Paris is the capital of France on the Seine River. Its neoclassical architecture dates fro the modernization of the Napoleonic era, which continued under Naopleon III when the bridges and boulevards of the \"City of Love\" were built.",
        link:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2004_in_Paris_%28cc%29.jpg/640px-2004_in_Paris_%28cc%29.jpg',
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=48.85378779646817~2.344064655152124&lvl=9.192303196746868&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        // startDate: "2022-07-05",
        // endDate: "2022-07-13",
        // price: 1200,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'La olives',
        //         stars: 3,
        //         price: 150,
        //     }
        // ],
        // flight: {
        //     name: 'Ryanair',
        //     price: 400,
        // },
        social: [
            {
                // REPLACE THIS
                name: "WICE (Where Internationals Connect in English)",
                description: "Over the decades, Projects that began at WICE and continue to this day are the highly-esteemed Paris Writers’ Workshop, and the innovative literary journal Upstairs at Duroc. WICE has been at the center of the Anglophone community in Paris. WICE’s special projects for our members have included books on the French healthcare system, a professional women’s conference, and a job fair for English-speakers in Paris. WICE’s range of courses evolves with the needs and interests of our community. What was once an organization geared toward continuing education for women, now welcomes everyone for walking tours, museum visits, and classes in creative writing, visual arts, cooking, wine and more.",
                link:'https://www.wice-paris.org/WICE-About',
                time: 120
            }, 
            {
                name: "Cancer Support France", 
                description: "This charity assists English-speaking people in France being treated for cancer. Volunteers are trained to support those with cancer and their families and caregivers, and also to help with fundraising events.", 
                link: "https://cancersupportfrance.org/how-you-can-help-us",
                time: 180
            }, 
            {
                name: "Je m’Engage", 
                description: "Run by the City of Paris to encourage not only volunteer work, but also to foster greater civic participation and community-building. They host regular information events in Paris where you can browse the tables to get brochures and meet the local organizations looking for volunteers.", 
                link: "https://jemengage.paris.fr/",
            }, 
            {
                name: "Secours Catholique", 
                description: "A charity created by the Catholic priest Monseigneur Rodhain in 1946 after the horrors of the occupation during WWII. Today the organization is one of the largest in France, with local and international humanitarian projects. They recruit regularly for short and long-term missions in France and overseas.", 
                link: 'https://www.secours-catholique.org/donnez-du-temps-au-secours-catholique'
            }
        ],
        attractions: [
            {
                // ADD MORE ATTRACTIONS
                name: "Eiffel Tower",
                description: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. The tower is 324 metres (1,099 ft) tall, and stands a total of 324 metres (1,099 ft) to the ground. The tower is completed in 1887.",
                time: 30,
                link:'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
            }, 
            {
                name: "Musée du Louvre", 
                description: "A sumptuous palace that was once the home of France's kings, the Louvre is the most important of Paris' top museums. Visitors enter the museum in the courtyard of the palace at the Pyramid du Louvre, the glass pyramid designed by Ieoh Ming Pei in 1917. The Musée du Louvre displays thousands of artworks, many of which are considered masterpieces, from antiquities to European paintings of the 15th to 19th centuries.", 
                time: 180, 
                link: "https://timesofindia.indiatimes.com/travel/paris/muse-du-louvre/ps44842285.cms"
            }, 
            {
                name: "Cathédrale Notre-Dame de Paris", 
                description: "Notre-Dame stands in the heart of Paris on the Île-de-la-Cité next to the Latin Quarter. An island in the Seine River, the Île-de-la-Cité is the historical and geographical center of Paris. On this small plot of land, the Romans built the Gallo-Roman city of Lutetia, and from the 6th century to the 14th century, the Kings of France resided here. This impressive medieval monument is a triumph of Gothic architecture. The ornately decorated facade creates a breathtaking impression with its profusion of sculptures and gargoyles, while elaborate flying buttresses provide structural integrity for the enormous building.", 
                time: 120, 
                link: "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_77884/node_77888/cath%C3%A9drale-notre-dame-de-paris-vue-depuis-le-parvis-%7C-630x405-%7C-%C2%A9-leiflinding/11884072-6-fre-FR/Cath%C3%A9drale-Notre-Dame-de-Paris-Vue-depuis-le-parvis-%7C-630x405-%7C-%C2%A9-LeifLinding.jpg"
            }, 
            {
                name: "Palais Garnier, Opéra National de Paris", 
                description: "Commissioned by Napoleon III in 1860, the Palais Garnier Opera House was designed by Charles Garnier in an exuberant Baroque style. Garnier worked tirelessly on the project for over a decade, from 1862 to 1875. Today, this show-stopping landmark is a symbol of Napoleon's Imperial regime. The facade features classical columns and eight sculptures representing allegorical figures: Poetry, Music, Idyll, Recitation, Song, Drama, and Dance. The loggia depicts busts of composers, including Rossini, Beethoven, and Mozart, while the cupola is topped with a statue of Apollo with allegorical figures of Poetry and Music.", 
                time: 180, 
                link: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Paris_Opera_full_frontal_architecture%2C_May_2009.jpg"
            }, 
            {
                name: "Avenue des Champs-Élysées", 
                description: "The most monumental boulevard in Paris used to be a desolate field of marshland until the 17th century, when it was landscaped by André Le Nôtre. A century later, the Parisian city planner Baron Haussmann designed the boulevard's elegant buildings.", 
                time: 60, 
                link: "https://youimg1.tripcdn.com/target/100n1f000001gpe52A381.jpg?proc=source%2Ftrip"
            }
        ]
    }
];

module.exports = trips;