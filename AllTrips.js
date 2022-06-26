// Basic info for all cities and trips will go here

// All the cities and trip data go in here
const AllTrips = [
    {
        name: 'Paris',
        description: "Paris is the capital of France on the Seine River. Its neoclassical architecture dates fro the modernization of the Napoleonic era, which continued under Naopleon III when the bridges and boulevards of the \"City of Love\" were built.",
        link:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2004_in_Paris_%28cc%29.jpg/640px-2004_in_Paris_%28cc%29.jpg',
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=48.85378779646817~2.344064655152124&lvl=9.192303196746868&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        latitude: 48.8566, 
        longitude:  2.3522,
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
    },
    {
        name: 'Mumbai',
        description: "Mumbai is a leading arts and entertainment capital in India with the Indian Television industry. Mumbai is one of the wealthiest cities of India as well as globally. One of the most commonly visited tourist places in Mumbai are Juhu Beach, the Queen's necklace or Marine Drive, Gateway of India, Hotel Taj, Haji Ali Dargah, Mahalaxmi temple, Siddhivinayak temple and many more.",
        // startDate: "2022-07-05",
        // endDate: "2022-07-13",
        // price: 800,
        // adults: 2,
        link: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg",
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=19.02707968084073~72.9655540715238&lvl=9.476137668536495&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        latitude: 19.0760, 
        longitude: 72.8777, 
        hotels: [
            {
                name: 'The Oberoi Mumbai',
                stars: 4.8,
                price: 140,
                //price per night
            },
            {
                name: 'Novotel Mumbai',
                stars: 4.6,
                price: 140,
            }
        ],
        flight: {
            name: 'Delta Airlines',
            price: 584,
        },
        social: [
            {
                name: "Rotaract Club Of Mumbai DownTown",
                description: "A voluntary youth club which has been running continuously since 1972."
            },
            {
                name: "Connect For",
                description: "A voluntary organisation running since 2004 which focuses on the development of the youth and the community and their education."
            }
        ],
        attractions: [
            {
                name: "Marine Drive",
                description: "No trip to Mumbai would be complete without a cruise down Marine Drive. The 3.6-kilometer-long, C-shaped boulevard offers epic views of the coast. However, just as amazing are the sightseeing opportunities on the other side of Marine Drive. The street is lined with stunning Art Deco buildings that have earned status as a UNESCO World Heritage site.",
                time: 60,
                link: 'https://image3.mouthshut.com/images/imagesp/925752514s.jpg'
            },,
            {
                name: "Taj Mahal Palace",
                description: "Tourists can find another popular site right near the Gateway of India: The Taj Mahal Palace, Mumbai and Tower. More than a century old, India's first luxury hotel is revered for the grandeur of its brownstone exterior. The windowed facade infuses its Renaissance architecture with Islamic touches, like corner turrets topped with onion domes, pointed archways, and covered balconies.",
                time: 60, 
                link: "h,ttps://upload.wikimedia.org/wikipedia/commons/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg"
            },
            {
                name: "Gateway of India",
                description: "Standing proud on the banks of the Arabian Sea at the Apollo Bunder waterfront area, the Gateway of India is one of Mumbai's most popular and treasured landmarks. The 26-meter basalt archway, which combines the architectural styles of Roman triumphal arches with traditional Hindu and Muslim designs, was built as a gesture of welcoming for King George V and Queen Mary when they visited British India in 1911.",
                time: 60,
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/1200px-Mumbai_03-2016_30_Gateway_of_India.jpg"
                // Lets add links for all attractions and social if possible?
            }
        ]
    },
    {
        name: "New York City", 
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        link: 'https://media.timeout.com/images/105829491/image.jpg',
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=40.762075762019236~-73.96789704818872&lvl=10.422435565642875&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        latitude: 40.7128, 
        longitude: -74.0060, 
        social: [
            {
                name: "New York Cares",
                description: "An organization that provides numerous volunteer opportunities around the city. Help tutor kids or make support calls for NYC!",
                time: 180
            },
            {
                name: "Habitat for Humanity",
                description: "A non-profit organization that provides shelter, food, and clothing to the homeless. HFH helps families rebuild.",
                time: 180
            },
            {
                name: "Good Shepherd Volunteers",
                description: "Educate, counsel, and advocate for the children of New York.",
                time: 120
            }
        ], 
        attractions: [
            {
                name: "Statue of Liberty",
                description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. The statue was dedicated in 1886 by the French artist Gustave Eiffel.",
                time: 150,
                link: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg"
            },
            {
                name: "Central Park",
                description: "Central Park is New York’s largest urban park and one of the biggest in the world, with 843 acres. This park is home to artificial lakes, waterfalls, meadows and wooded areas. You will also find the Central Park Zoo, among other attractions in this greenspace of New York.",
                time: 120, 
                link: "https://nypost.com/wp-content/uploads/sites/2/2018/07/central-park-conservancy.jpg?quality=75&strip=all"
            },
            {
                name: "Empire State Building",
                description: "The Empire State Building is a 102-story skyscraper in Midtown Manhattan, New York City. It was the world's tallest building, a feat not only of the United States but also of many other countries.",
                time: 60, 
                link: "https://media.timeout.com/images/101705309/image.jpg"
            },
            {
                name: "Times Square",
                description: "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood. It is referred to as the \"Crossroads of the World.\"",
                time: 100, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg"
            },
            {
                name: "The Metropolitan Museum of Art",
                description: "The \"Met\" is the largest art museum in the Western Hemisphere. Its collection consists of more than 1.5 million works, including paintings, sculptures, prints, drawings, and more.",
                time: 180, 
                link: "https://www.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg?sc_lang=en"
            },
            {
                name: "St. Patrick's Cathedral",
                description: "This sprawling cathedral sits amid the hustle and distinctively secular bustle of Rockefeller Center. But that doesn't take away from its otherworldly vibe. Whether you're religious or just making an architectural pilgrimage, you can't help but be impressed by St. Patrick's.",
                time: 60, 
                link: "https://d2y1pz2y630308.cloudfront.net/6783/pictures/2022/5/19-0316-1357.jpg"
            }
        ]
    }, 
    {
        name: "London", 
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=51.502288541807815~-0.12032371804593822&lvl=10.280518329748068&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: 'https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium', 
        latitude: 51.5072, 
        longitude: -0.1276, 
        social: [
            {
                name: "Animal Welfare Party",
                description: "An organization that works to create a better future for people, animals, and the environment.",
                time: 60
            },
            {
                name: "Link Up London",
                description: "Linking volunteers with skills to the people of London. They help charities connect with people that can help them.",
                time: 120
            },
            {
                name: "Volunteer Centre Kensington & Chelsea",
                description: "A volunteer center providing many opportunities from supporting community gardens to training mentees.",
                time: 90
            }
        ], 
        attractions: [
            {
                name: "Big Ben and Surrounding Area",
                description: "The Big Ben is a famous clock tower in London, standing at the north end of the Palace of Westminster. It is the tallest clock tower in the United Kingdom, measuring 12 metres (4 ft) in diameter. The tower is dedicated to the services of the British crown and is the official seat of the House of Commons and House of Lords.",
                time: 60, 
                link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/72.jpg"
            },
            {
                name: "Camden",
                description: "Camden is a borough in London, England, and the most populous borough in the United Kingdom. It is the second-largest borough in the United Kingdom after London, and the most populous borough in the United Kingdom. Its well-known culture is filled with vibrant goths, punks, and tourists alike.",
                time: 120, 
                link: "https://evanevanstours.com/blog/wp-content/uploads/2019/05/camden-lock-london-scaled.jpg"
            },
            {
                name: "Picadilly Circus",
                description: "Piccadilly Circus is a major London street, famous for its distinctive Victorian architecture and distinctive street lights. It is one of the most famous attractions in London, and is one of the most visited attractions in the world.",
                time: 45, 
                link: "https://cdn.britannica.com/39/99939-050-BE719726/Piccadilly-Circus-London.jpg"
            },
            {
                name: "London Eye",
                description: "The London Eye is a giant Ferris wheel situated on the South Bank of the River Thames in London, England. It is the tallest Ferris wheel in the world and is the largest Ferris wheel in London.",
                time: 30, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/1200px-London-Eye-2009.JPG"
            },
            {
                name: "Tower of London",
                description: "The Tower of London is a historic structure in London, which was the site of the London World's Fair from 1848 to 1858. It is the tallest structure in London and is the second-tallest structure in the United Kingdom.",
                time: 60, 
                link: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg"
            },
            {
                name: "London Bridge",
                description: "London Bridge is a historic bridge in London, built in 1848. It is the longest suspension bridge in the United Kingdom and the second-longest suspension bridge in the European Union.",
                time: 60, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg"
            },
            {
                name: "London Zoo",
                description: "The London Zoo is a zoo in London, England. It is the largest of the London Zoo's, and is the largest zoo in the United Kingdom. It is the largest zoo in the United Kingdom, and is the largest zoo in the European Union.",
                time: 60, 
                link: "https://cdn.getyourguide.com/img/tour/623ae01cd2459.jpeg/146.jpg"
            },
            {
                name: "Natural History Museum",
                description: "The Natural History Museum is a museum in London, England, which houses the Natural History Museum of London, the Natural History Museum of the British Museum, the Natural History Museum of the Museum of Modern Art, and the Natural History Museum of the Museum of Science.",
                time: 60, 
                link: "https://cdn.londonandpartners.com/asset/natural-history-museum_blue-whale-hintze-hall-photo-lucie-goodayle-image-courtesy-of-the-natural-history-museum_c4b9caf92a46e29762bcc2db0635f11b.jpg"
            }
        ]
    }, 
    {
        name: "Bangkok", 
        description: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=13.750734486434226~100.51615337582325&lvl=10.020245235037088&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg', 
        latitude: 13.7563, 
        longitude: 100.5018,
        social: [
            {
                name: "Friends for Asia",
                description: "Friends for Asia aims to forge meaningful connections with locals and experience culture. Work includes helping communities in need around Bangkok.",
                time: 60
            }, 
            {
                name: "Cross Cultural Foundation", 
                description: "The Cross-Cultural Foundation works to build on peace-making efforts in conflict prone areas. Their work takes on a variety of forms from petitioning governments to defend human rights’, to providing legal aid to those in need, and working hands on with victims of torture to strengthen resilience in communities. Their work is needed in Thailand’s southernmost province where conflict ensues, as well as other similar places throughout the region.",
                //https://courageouskitchen.org/2019/02/9-nonprofits-in-bangkok-you-should-know/
                time: 150
            }
        ], 
        attractions: [
            {
                name: "Grand Palace",
                description: "The Grand Palace is a historic building in the city of Bangkok, Thailand. It is the seat of the government of the Kingdom of Thailand and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://a.cdn-hotels.com/gdcs/production168/d707/c3156d7b-ce5a-4a5c-9a99-002b0ff57fe8.jpg"
            },
            {
                name: "Wat Phra Kaew Temple",
                description: "The Wat Phra Kaew Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://a.cdn-hotels.com/gdcs/production6/d726/05cbcbb9-903e-4cdb-85a2-219d442b33f5.jpg"
            },
            {
                name: "Wat Arun Temple",
                description: "The Wat Arun Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://a.cdn-hotels.com/gdcs/production50/d1634/bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg"
            },
            {
                name: "Wat Pho Temple",
                description: "The Wat Pho Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://a.cdn-hotels.com/gdcs/production82/d721/a9f1d448-a09d-4fa2-be68-10999f225da5.jpg"
            },
            {
                name: "Chao Phraya River",
                description: "The Chao Phraya River is a tributary of the Chao Phraya, the longest river in the world. It is the second-longest river in the world after the Amazon, and the second-longest river in the world after the Nile. It is the second-longest river in the world after the Nile.",
                time: 45, 
                link: "https://www.wmf.org/sites/default/files/styles/project_gallery_full_size/public/projects/gallery/tha_chao_phraya_1.jpg?itok=CPDfsTSA"
            },
            {
                name: "Rattanakosin",
                description: "Rattanakosin is a district in Bangkok, Thailand. It is the capital of the Kingdom of Thailand and the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://www.renown-travel.com/images/rattanakosin-l.jpg"
            },
            {
                name: "Bangkok Botanical Garden",
                description: "Bangkok Botanical Garden is a botanical garden in Bangkok, Thailand. It is the largest botanical garden in the world and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60, 
                link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ee/67/ec/caption.jpg?w=500&h=400&s=1"
            },
            {
                name: "Bangkok National Museum",
                description: "Bangkok National Museum is a museum in Bangkok, Thailand. It is the largest museum in the world and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60,
                link: "https://a.cdn-hotels.com/gdcs/production130/d941/4f162023-a2ee-4a53-bb5d-fd240d5bfded.jpg"
            }
        ]
    }, 
    {
        name: "Dubai", 
        description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        // social: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=25.270109038284417~55.329091178851286&lvl=10.42243556564288&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg',
        latitude: 25.2048, 
        longitude: 55.2708,
        attractions: [
            {
                name: "Burj Khalifa",
                description: "Burj Khalifa, Khalifa also spelled Khalīfah, mixed-use skyscraper in Dubai, United Arab Emirates, that is the world’s tallest building.",
                time: 60, 
                link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/b0/e9.jpg"
            },
            {
                name: "Dubai Fountain",
                description: "Dubai Fountain is a fountain in Dubai, United Arab Emirates. It is the tallest fountain in the world and is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60, 
                link: "https://cdn.getyourguide.com/img/tour/5d5531c8282ca.jpeg/146/Dubai--Fountain-Show-and-Burj-Lake-Ride-by-Traditional-Boat.jpg"
            },
            {
                name: "The Palm",
                description: "The Palm is a resort in Dubai, United Arab Emirates. It is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg/1200px-Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg"
            },
            {
                name: "Atlantis",
                description: "Atlantis is a resort in Dubai, United Arab Emirates. It is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg/1200px-Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg"
            },
            {
                name: "Dubai Miracle Garden",
                description: "Dubai Miracle Garden is a garden in Dubai, United Arab Emirates. With over 150 million flowers in full bloom, this is a perfect place for photo-ops.",
                time: 60, 
                link: "https://images-production.gardenvisit.com/uploads/images/114998/dubai_miracle_garden1_original.jpg"
            },
            {
                name: "Dubai Museum",
                description: "Dubai Museum is a museum in Dubai, United Arab Emirates. It is the oldest existing building in Dubai opened in 1971 and contains many historical exhibits.",
                time: 60, 
                link: "https://www.arabianbusiness.com/cloud/2022/02/04/Museum-of-the-Future.jpg"
            }
        ]
    }, 
    {
        name: "Beijing", 
        description: "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        // social: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=39.912710937974~116.49377222147314&lvl=8.67175700732491&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: "https://images.chinahighlights.com/allpicture/2021/07/ba7326f5e3544102917eb2c0_cut_800x500_349.jpg", 
        latitude: 39.9042, 
        longitude: 116.4074, 
        attractions: [
            {
                name: "Forbidden City",
                description: "The Forbidden City is a palace in Beijing, China. The grand halls and walls display the essence and culmination of traditional Chinese culture.",
                time: 60, 
                link: "https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg"
            },
            {
                name: "Tiananmen Square",
                description: "Tiananmen Square is a pedestrian plaza in Beijing, China. ",
                time: 40, 
                link: "https://cdn.britannica.com/59/129159-050-75E7FB3C/Tiananmen-end-Beijing.jpg"
            },
            {
                name: "Mao Zedong’s mausoleum",
                description: "Mao Zedong’s mausoleum is a mausoleum in Beijing, China. It is the tomb of Mao Zedong, the founder of the Chinese revolution.",
                time: 30, 
                link: "https://silkroadnews.org/upload/iblock/89b/89b5dca2d09bf2f1eb3b4b9281b0890e.jpeg"
            },
            {
                name: "The Temple of Heaven",
                description: "The Temple of Heaven is the largest and most representative existing masterpiece of the Ming and Qing dynasties.",
                time: 45, 
                link: "https://www.chinadiscovery.com/assets/images/travel-guide/beijing/temple-of-heaven/temple-heaven-768.jpg"
            },
            {
                name: "The Great Wall of China",
                description: "The Great Wall of China is a linear structure of stone and brick that spans the entire length of the country of China. It is the longest wall in the world.",
                time: 60, 
                link: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg"
            },
            {
                name: "Beijing Zoo",
                description: "Beijing Zoo was the first of its kind in China. It contains a diverse collection of animals, a number of exhibition halls and some sites of historical interest.",
                time: 120, 
                link: "https://images.chinahighlights.com/allpicture/2014/08/6e03bca42bf74cf6a00b9aac_cut_800x500_10.jpg"
            }
        ]
    }, 
    {
        name: "Istanbul", 
        description: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        // social: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=41.01996474204469~28.984449052445143&lvl=10.280518329748066&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg", 
        latitude: 41.0082, 
        longitude: 28.9784, 
        attractions: [
            {
                name: "Hagia Sophia",
                description: "The Hagia Sophia is an enormous architectural marvel in Istanbul, Turkey, that was originally built as a Christian basilica nearly 1,500 years ago. The Hagia Sophia is a long-enduring symbol of the cosmopolitan city.",
                time: 45, 
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1200px-Hagia_Sophia_Mars_2013.jpg"
            },
            {
                name: "The Blue Mosque",
                description: "The Blue Mosque (Called Sultanahmet Camii in Turkish) is an historical mosque in Istanbul. The mosque is known as the Blue Mosque because of blue tiles surrounding the walls of interior design.",
                time: 30, 
                link: "https://media-cdn.tripadvisor.com/media/photo-s/18/e4/05/09/the-dome-of-blue-mosque.jpg"
            },
            {
                name: "The Grand Bazaar",
                description: "The Istanbul Grand Bazaar (Kapalıçarşı) is one of the largest and oldest markets in the world, and the a great place to shop for artisan goods, jewels and clothes.",
                time: 60, 
                link: "https://www.planetware.com/wpimages/2021/03/turkey-istanbul-grand-bazaar-things-to-buy-shopping-tips-lamps-lanterns.jpg"
            },
            {
                name: "Taksim Square",
                description: "Taksim Square is a vibrant, modern area located in Istanbul's Beyoglu district. Scores of shops, restaurants and bars fill the surrounding streets.",
                time: 60, 
                link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/22/c1/a3/taksim-3-largejpg.jpg?w=1200&h=-1&s=1"
            },
            {
                name: "Dolmabache Palace",
                description: "Sitting along the Bosphorus near the Kabatas tram stop and the Besiktas ferry port, Dolmabahçe Palace's jaw-dropping beauty and historical importance impresses visitors. Built in the 19th century, the palace was used by the final Ottoman sultans as their primary residence and administrative seat.",
                time: 60, 
                link: "https://d2oa8gu31l4qdv.cloudfront.net/banner/doc/83e9f672943777a98e1fba38fbe52f53-61ceb4b7d0a7e.jpeg"
            }
        ]
    }, 
    {
        name: "Tokyo", 
        description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum). ", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=35.69653214183219~139.71319197988305&lvl=10.445996942721534&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: 'https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg',
        latitude: 35.6762, 
        longitude: 139.6503,
        social: [
            {
                name: "HandsOn Tokyo",
                description: "HandsOn Tokyo is a non-profit organization which brings foreign and local residents together to work on various charity events and social issues that benefit special needs children, elderly citizens and any other social groups in need of support.",
                time: 60
            },
            {
                name: "Shine On! Kids",
                description: "Shine On! Kids is an organization dedicated to supporting families with children battling cancer and other serious illnesses in Japan. This non-profit is aiming to create a complete patient support system in Japan by providing physical and emotional support for the affected children and their families.",
                time: 60
            },
            {
                name: "TELL (Tokyo English Live Line)",
                description: "TELL is a not-for-profit organization with over 40 years of experience of providing free English counseling services and support for mental healthcare and suicide prevention to Japan’s international community.",
                time: 60
            }
        ], 
        attractions: [
            {
                name:"Sensoji Temple",
                description: "Asakusa’s Sensoji Temple is a tremendously popular destination for visitors. Beyond the iconic Kaminarimon Gate is Nakamise Dori souvenir-shopping street, which leads to a complex of fascinating religious structures",
                time :60, 
                link: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/sensoji-temple-iStock-1083328636.jpg"
            },
            {  
                
                name: "Meiji Jingu", 
                description : "Meiji Jingu (Shinto Shrine) is set in a soothing forest only a few minutes’ walk from JR Harajuku Station. The shrine was built to commemorate the virtues of Emperor Meiji and Empress Shoken. In 2020 the shrine marks its 100th anniversary",
                time:90, 
                link: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Courtyard_of_Meiji_Shrine_20190717.jpg"
            },
            {
                name:"Hamarikyu Gardens",
                description :"Hamarikyu Gardens is a great place to relax and to reflect on the history of Tokyo when it was still called Edo. Different feudal lords used the space for various purposes, ranging from recitals and rice cultivation to military training and falconry.",
                time: 60, 
                link: "https://www.japan-guide.com/g18/3025_02.jpg"
            },
            {   
                
                name:"Edo-Tokyo Open Air Architectural Museum",
                descritpion:"Spend a day away from the bustling city streets exploring a museum of relocated historical buildings. Set in a beautiful park in Tokyo’s western suburbs",
                time: 60, 
                link: "https://www.japan-guide.com/g18/3032_01.jpg"
            }     
             

        ]
    }, 
    {
        name: "Seoul", 
        description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: [{
        //     name: "Travelodge Dongdaemun Hotel", 
        //     star: 4.1, 
        //     price: 52

        // } , 
        // {
        //     name: "Hotel ENTRA Gangam", 
        //     star: 4.2, 
        //     price: 127
        // }, 
        // {
        //     name: "Grand Hyatt Seoul",
        //     star: 4.3, 
        //     price: 380
            
        // }
        // ],
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=37.558886111949064~126.96271390977415&lvl=11.392294839827938&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: "https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg",
        latitude: 37.5665, 
        longitude: 126.9780, 
        social: [
            {
                name: "Habitat for Humanity Korea",
                description: "Habitat for Humanity Korea is a non-profit organization that provides emergency food, clothing, shelter, and other basic needs to the people of Korea.",
                time: 120
            },
            {
                name: "The Seoul Children's Hospital",
                description: "The Seoul's Children's Hospital allows volunteers to book reservations to help sick children and facilitate activities.",
                time: 240
            },
            {
                name: "World Wide Opportunities on Organic Farms (WWOOF)",
                description: "WWOOF's goals are to pursue organic farming and an eco-friendly life for farmers, volunteers, and everyday people, helping to build a sustainable world.",
                time: 180
            }
        ], 
        attractions: [
            {
                name: "North Seoul Tower", 
                description: "Rising almost 500 meters above the city, this communications and observation tower provides dramatic views of the city from its perch on the side of Mount Namsan. A cable car whisks you up the side of the mountain to the base of the tower. From here, you can go up in the tower and visit any one of four observation decks, one of which is a rotating restaurant.", 
                time: 90, 
                link: "https://tongglobalcdn.visitkorea.or.kr/cms/resource/30/2477030_image2_1.jpg"
            }, 
            {
                name: 'Bukchon Hanok Traditional Villange', 
                description: "For a taste of Korean traditional culture and architecture, a visit to the Bukchon Hanok Village is a fun and educational way to spend an afternoon. This preserved district of several ancient neighborhoods gives you a feel for what it was like to live in Korea 600 years ago. It's right in central Seoul, in the area between the Gyeongbokgung Palace and the Changdeokgung Palace. The neighborhoods of narrow streets feature hanoks or traditional Korean houses. It's a unique place, as it's a historic area, very popular with tourists, but it's also a real neighborhood because the houses are all occupied. ", 
                time: 240, 
                link: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/FotoJet-30.jpg"
            }, 
            {
                name: 'Lotte World Tower', 
                description: "One of the newest attractions in Seoul is the Lotte World Tower skyscraper. The tallest building in South Korea, it's 500 meters above the ground and currently the fifth-tallest building in the world. The vase-like shape, with gentle curves, is designed to mimic traditional Korean ceramic pieces. There are several indoor and outdoor observation areas (called Seoul Sky) at the top on the 117th-123rd floors. Views are spectacular both during the day and at night, and you can see 360-degrees around the city. On the 118th floor, there's the Sky Deck with the world's highest glass floor. Like magic, the floor changes from opaque to clear, terrifying unsuspecting visitors. Even getting to the top is fun, and the journey is done via super fast, double-decker elevators, with windows on one side and LED screens on the other three and on the ceiling.", 
                time: 90, 
                link: "https://images.adsttc.com/media/images/58e5/1944/e58e/ceb8/1100/0338/large_jpg/Overall3_LotteWorldTower_(c)Lotte_Group.jpg?1491409215"
            }, 
            {
                name: 'Gwanghwamun Gate', 
                description: "The largest and main gate to Seoul's Gyeongbokgung Palace, Gwanghwamun Gate is home to the changing of the guards ceremony (performed since 1469), which happens daily (except Tuesdays) at 10am and 2pm. The gate has undergone many renovations and rebuilding, most recently in 2010, when it was restored to its original location and reconstructed with native materials using traditional tools and building techniques.", 
                time: 30, 
                link: "https://upload.wikimedia.org/wikipedia/commons/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg"
            }, 
            {
                name: 'Cheonggyecheon', 
                description: "This natural creek that flows through central Seoul was covered over by highways in the post-Korean War economic boom. Seven miles of the creek were uncovered as part of an urban revitalization project and turned into an outdoor recreation area, opening in 2005. There are now seven miles of creek-side hiking, walking and biking trails. It really has changed the CBD of Seoul by bringing an artery of water and green into what was a very urbanized, crowded area. The creek is also home to the spectacular Seoul Lantern Festival, held each November. Ornate, lighted paper lanterns are displayed in and along the creek, and each night, thousands of people line the creek to view and enjoy the floating artwork.", 
                time: 180, 
                link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e6/33/ce/cheonggyecheon.jpg?w=1200&h=1200&s=1"
            }, 
            {
                name: "Blue House", 
                description: "The Blue House is Korea's version of the White House. It's the official residence of the Korean president, as well as the location of his and related executive offices of state. The Blue House isn't really a single building, it's an entire campus of buildings, all built in the traditional Korean style and all featuring the distinctive blue tile roofs where it gets its name.", 
                time: 150, 
                link: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Korea-Seoul-Blue_House_%28Cheongwadae%29_Reception_Center_0688%269-07_cropped.jpg"
            }
        ]
    }, 
    {
        name: "Venice", 
        description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=45.43656682405103~12.336926261439544&lvl=12.409825841593165&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg",
        latitude: 45.4408 , 
        longitude: 12.3155 , 
        social: [
            {
                name:"Italian Union of the Blind and Visually Impaired ONLUS-APS",
                description:"Founded in Genoa in 1920 by Aurelio Nicolodi, an officer who lost his sight during the First World War, for 100 years it has been promoting equality of rights throughout Italy with commitment and passion, to give light to blind, partially sighted and people with multiple disabilities",
                time:90
            },
            {
                name:"South country food pantry in venice",
                description:"The South Country Food Pantry, Inc.is an all-volunteer organization dedicated to gathering,organizing,and distributing food to those in need in Venice,Osprey,Laurel,and Nokomois,Florida",   
                time:120
            },
            {    
                name:"Women’s resource center",
                description:"the women's Resource Center is a 501(C)3 nonprofit focused on providind women of all ages and backgrounds with support,resources and services",
                time:60
            },
            { 
                name:"Fondazione Alvise Marotta",
                description:"Our Mission is to grow more and more with the projects we carry out. Helping those who need help: continuing Alvise's life project, who dreamed of a better world",
                time:90
            },
            {
                name:"Associazone Italiana per la Dnazione di Organi,T essuti e cellule PROVINCIA DI VENEZIA",
                descritpion:"It is non-partisan, non-denominational, inter-ethnic, non-profit, informed by ethical principles and those dictated by the legal system of the State.",
                time:120
            },
            {
                name:"ATENEO VENETO",
                description:"The Ateneo Veneto is the oldest active cultural institution in Venice. Founded in 1812, it has been operating for over two centuries in the exclusive pursuit of social solidarity purposes: its purpose is to cooperate in the development and dissemination of the sciences, letters, arts, in all their manifestations",
                time:60
            }
             
        ],           
        attractions: [
            {
                name: "St. Mark's Basilica",
                description: "Certainly Venice's best-known church, and one of the most easily recognized in the world, St. Mark's Basilica (Basilica di San Marco) was originally the Doge's private chapel, decorated with Byzantine art treasures that are part of the booty brought back by Venetian ships after the fall of Constantinople. The gold-backed mosaic pictures above the doorways on the façade only hint at the mosaic artistry inside, where 4,240 square meters of gold mosaics cover the domes and walls. These set a distinctly Byzantine tone to its soaring interior, but you'll find treasures from other periods, including later mosaics designed by Titian and Tintoretto - names you'll encounter all over the city.", 
                time: 200, 
                link: "https://upload.wikimedia.org/wikipedia/commons/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg"
            }, 
            {
                name: "Piazza San Marco",
                description: "The vast expanse of Venice's largest square is brought together and made to seem almost intimate by the elegant uniformity of its architecture on three sides. But more than its architectural grace, St. Mark's Square (Piazza San Marco) is loved as Venice's living room, the place everybody gathers, strolls, drinks coffee, stops to chat, meets friends and tour guides, or just passes through on the way to work or play. Three sides are framed in arcades, beneath which are fashionable shops and even more fashionable cafés. The open end is bookmarked by the erratic, exotic curves, swirls, mosaics, and lacy stone filigree of St. Mark's Basilica. Above it towers the brick shaft of the campanile. For overviews of this busy piazza, you can go to its top or to the top of the Torre dell'Orologio, where a pair of \"Moors\" strikes the hour.", 
                time: 60, 
                link: "https://www.ourescapeclause.com/wp-content/uploads/2021/08/shutterstock_1372373447-scaled.jpg"
            }, 
            {
                name: "Palazzo Ducale (Doge's Palace) and Bridge of Sighs", 
                description: "Visitors arriving in Venice once stepped ashore under the façade of this extraordinary palace. They couldn't have failed to be impressed, both by its size and the finesse of its architecture. If they were received inside by the Doges, the impression would only strengthen as they entered through the Porta della Carta, a perfect example of Venetian Gothic at its height, and ascended the monumental Scala dei Giganti and the gold-vaulted Scala d'Oro to be received in what many consider to be the palace's most beautiful chamber, Sala del Collegio. Even jaded 21st-century travelers gasp in awe at the palace's grandeur and lavish decoration. You'll see works by all the Venetian greats, including Tintoretto, whose Paradise is the largest oil painting in the world.", 
                time: 120, 
                link: "https://www.venetoinside.com/files/images/tours/veneto/palazzo-ducale-privato/2-tour-privato-ducale-CC.-by-Kotomi_.jpg"
            }, 
            {
                name: "Canale Grande", 
                description: "Sweeping through the heart of Venice in a giant reverse S curve, the Grand Canal is the principal boulevard through the city, connecting Piazza San Marco, Rialto Bridge, and the arrival points of the rail station and bridge from the mainland. Only four bridges cross its 3.8-kilometer length, but stripped-down gondolas called traghetti shuttle back and forth at several points between bridges. The Grand Canal was the address of choice for anyone who claimed any influence in Venice. Palaces of all the leading families open onto the canal, their showy Venetian Gothic and Early Renaissance facades facing the water, by which visitors arrived.", 
                time: 150, 
                link: "https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg"
            }, 
            {
                name: "Murano and Burano", 
                description: "A trip to Venice wouldn't be complete without hopping aboard a vaporetto for the ride across the lagoon to Murano, home of Venice's fabled glass workers. They were sent here in the 13th century in hope of decreasing the risk of fire from one of the glass furnaces sweeping through Venice's tightly compacted center. ", 
                time: 240, 
                link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/ec/6c.jpg"
            }
        ]

        
    }, 
    {
        name: "Hong Kong", 
        description: "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a city and special administrative region of China on the eastern Pearl River Delta in South China. ", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=22.29786958783714~114.20097961044712&lvl=11.747362416276404&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: 'https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/EBHM39.jpg?itok=PUzBwD5h',
        latitude: 22.3193, 
        longitude: 114.1694, 
        social: [
            {
                name:"HandsOn Hong Kong",
                description:"  HOHK is a comprehensive hub for volunteer work in Hong Kong. They are involved with many of the charities listed here. Scroll down to find all the information you need below",
                time:90
            },
            {
                name:"Hong Kong Alliance for Rare Diseases",
                description:"This organization aims to enhance the understanding of rare diseases among patients, carers and their families; promote self-help and mutual support and positive attitude; and promote public education on rare diseases while strengthening community awareness, understanding and support for patients, their families and related self-help organizations",
                time:60
            },
            {
                name:":Hong Kong Dog Rescue",
                description:":HKDR started out as a one-woman effort to save dogs from being put down. Founder, Sally Andersen, and many dedicated volunteers aim to rescue, rehabilitate and re-home abandoned and unwanted dogs and puppies",
                time:60
            },
            {
                name:"The Asia Society Hong Kong Center",
                description:"Support victims of sexual violence as well as to promote anti-sexual violence/gender equality education. Sign up here to learn more about volunteer positions",
                time:90
            },
            {
                name:"Autism Partnership Foundation",
                description:"BVP strives to enhance the quality of life of the visually impaired and elderly with low vision while focusing on social inclusion, social equality and social participation",
                time:60
            },
            {
                name:"The Child Development Centre ",
                description:"They provide essential early identification and interventions to children with special educational needs. Though they receive support from the government and are committed to making their services affordable for all, having volunteers in the classrooms, on the Board and steering committees, along with sponsored events help them stay afloa",
                time:60
            },
            {
                name:"Clean Air Network ",
                description:"Clean Air Network (CAN) is an independent NGO encouraging the public to speak out about the health impacts of air pollution",
                time:90
            }    
        ], 
        attractions: [
            {
                name: "Hong-Kong Skyline", 
                description: "Hong Kong has one of the most impressive and recognizable skylines in the world. The dense collection of skyscrapers, both on the island of Hong Kong and in Kowloon, combined with the surrounding mountains and harbor set this city apart. In the harbor, traditional red-sailed Chinese junk boats and the historic Star Ferry contrast sharply with the backdrop of modern high-rises. At night, the skyline changes character completely as the sky darkens and the city lights fill the scene. Two of the best places in Hong Kong to see the skyline are from the top of Victoria Peak or from the Kowloon waterfront (along the Tsim Sha Tsui Promenade near the clock tower), not far from the Star Ferry dock, where benches line the waterfront and look across to Hong Kong. The latter location is the best place to watch the nightly A Symphony of Lights laser and light show set to music.", 
                time: 120, 
                link: "https://media.timeout.com/images/105385557/image.jpg"
            }, 
            {
                name: "Victoria Peak", 
                description: "You haven't seen the best of Hong Kong until you've taken in the skyline from Victoria Peak, more commonly known as The Peak. Ride the tram to the top of this scenic viewpoint to see the skyscrapers, bustling city, harbor, and surrounding islands. The tram station is located near the entrance to Hong Kong Park by the Murray building. At the top of the tram are the Peak Tower and Peak Galleria, with shops, restaurants, and an observation deck. Most of The Peak is covered by a large park with lush greenery, nature trails, and more beautiful lookouts with views over the thriving metropolis below. A trail also leads down from The Peak to the city below, following a mix of trails through the forest and sections of road here and there.", 
                time: 200, 
                link: "https://www.chinadiscovery.com/assets/images/travel-guide/hongkong/Victoria-Peak-Tower-768.jpg"
            }, 
            {
                name: "Tian Tan Buddha Statue", 
                description: "The 34-meter-high \"Big Buddha\" sits above Lantau Island's Po Lin monastery, which was a fairly secluded place until the statue was built in 1993. This is one of the largest Buddha statues of its kind in the world and took 12 years to complete. The size is astounding, both up close and seen from a distance. The setting here is also incredible, surrounded by the green forest and views out over the ocean and islands.", 
                time: 150, 
                link: "https://image.arrivalguides.com/x/08/433d732436650975da299f2bbd2a0bf2.jpg"
            }, 
            {
                name: "Temple Street Night Market", 
                description: "A stroll through the Temple Street Night Market is another one of those all-important things to do while you're in Hong Kong. Located in Kowloon, this is the place to go to taste eclectic foods and to shop for bargains on everything from clothing and trinkets to electronics and household goods. Vendors sell gadgets of every shape and size, as well as jade jewelry and traditional Chinese crafts.", 
                time: 60, 
                link: "https://cdn.getyourguide.com/img/tour/5df8583201943.jpeg/99.jpg"
            }, 
            {
                name: "Hong Kong Disneyland", 
                description: "Hong Kong Disneyland is located on Lantau Island. Here, you'll find a wonderful world filled with fun and fantasy populated with the cast and characters from Disney movies. The park is divided into seven lands: Adventureland; Fantasyland; Toy Story Land; Tomorrowland; Grizzly Gulch; Mystic Point; and Main Street, U.S.A. Performances happen throughout the day in the various lands and feature everything from parades to musicals, right through to evening fireworks over the castle. Also on offer are a wide array of adventures, ranging from Jungle cruises to a trip to Tarzan's Treehouse, as well as water-based fun at Liki Tiki.", 
                time: 360, 
                link: "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/04/hkdlioa267497381.jpeg"
            }
        ]
    }, 
    {
        name: "Los Angeles", 
        description: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes. ", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=34.05111155306486~-118.23892653328664&lvl=13.095850643988571&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: 'https://www.tripsavvy.com/thmb/KoeNntA0et5H14VBnnQPvGoMrLQ=/2121x1413/filters:fill(auto,1)/GettyImages-947698310-1729da81e58f40058a9e45ba82532d57-2f992696318c42cbbd595ef3ec1043fd.jpg',
        latitude:34.0522 , 
        longitude: -118.2437, 
        social: [
            {
                name:"Homeboy Industries",
                description:"Homeboy Industries serves high-risk, formerly gang-involved men and women with free services and programs, and operates several social enterprises that serve as job-training sites",                
                time:60
            },
            {
                name:"Los Angeles Rescue Mission",
                description:"The Los Angeles Mission has existed for 75 years providing help, hope and opportunity to men, women and children in need.The Mission hosts the annual Thanksgiving Feast, which attracts several celebrity volunteers",
                time:60
            },
            {
                name:"Big Brother Big Sisters of America",
                description:"Big Brothers Big Sisters staff members work with their partners in the education and juvenile justice communities to find children facing adversity and assess how their programs can have the greatest impact",
                time:60
            },
            {
                name:"L.A.Works",
                description:"In 1990, L.A. Works took shape from a hope by the founders that if individuals worked together on local needs through hands-on service, they would feel empowered to address the broader racial and economic divides of their neighborhoods and cities. Their planning was only hastened by the March 1991 beating of Rodney King by members of the LAPD, which brought a combustive mix of racial tension and civil discord out in the open",
                time:90       
            },
            {
                name:"Big Sunday",
                description:"Big Sunday connects people through helping. We offer an enormous variety of opportunities and projects that unite people to improve lives, build community, and give everyone a sense of belonging.",
                time:120
            },
            {
                name:"HOPE FOR LA",
                description:"Hope for los Angeles transformed Spiritually,relationally and economically by the demonstration of Christ love",
                time:60
            }     
        ], 
        attractions: [
            {
                name: "Santa Monica Pier", 
                description: "The focal point of the iconic Santa Monica Beach, Santa Monica Pier is bursting with fun (but crowded) things to do: it includes a Ferris wheel, aquarium, fairground games and cotton candy stands. On weekends when the weather’s warm, the stretch is busy with families, beach bums and the gym bunnies who do their public workouts at the original Muscle Beach, just to the south of the pier. In recent years, the Pier has played host to a number of outdoor film and music events, which tends to bring in a (slightly) trendier clientele to the boardwalk.",
                time: 240, 
                link: "https://images.squarespace-cdn.com/content/v1/5e0e65adcd39ed279a0402fd/1627422658456-7QKPXTNQ34W2OMBTESCJ/1.jpg?format=2500w"
            }, 
            {
                name: "Disneyland", 
                description: "The venerable resort is actually comprised of two main parks: the 66-year-old Disneyland Park and the much newer Disney California Adventure, which opened its doors in 2001. Semantics aside, this themed resort is a winner with tourists and locals alike. You’ll find all your favorite characters here—including the recent arrival of the Star Wars-themed Galaxy’s Edge and the Marvel-themed Avengers Campus—along with a clutch of super fun rides and pricey food and drink. There’s not really a good time to go to avoid the crowds—it’s always busy, especially around Christmas Day—so you might need a bit of patience to appreciate the magic.", 
                time: 960, 
                link: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598"
            }, 
            {
                name: "Universal Studios & Citywalk", 
                description: "Although the rides at Universal Studios Hollywood’s hillside theme park don’t have Disneyland’s old-time charm or the sheer terror inspired by Six Flags Magic Mountain, the resort nonetheless offers some very respectable thrills and spills and an illusion of Hollywood glamour as it brings various blockbusters to life. And there are definitely some real standouts, mostly in the more thrilling lower lot. Jurassic World: The Ride breathes some new life into a dinosaur-filled classic, while the Wizarding World of Harry Potter remains a magical experience.", 
                time: 960, 
                link: "https://cdn.getyourguide.com/img/location/56bdc642c89e8.jpeg/88.jpg"
            }, 
            {
                name: "Hollywood Walk of Fame", 
                description: "Yes, you have to fight through massive crowds, suspect superheroes, and never-ending gift shops, tattoo parlors and lingerie stores to actually get to it. But there’s genuinely a lot of old Hollywood history and glamour to discover along the Walk of Fame. The veritable constellation of names immortalized on those famous five-pointed terrazzo and brass stars run from the Walk’s western end at the Hollywood and La Brea Gateway right up the Pantages Theater at Gower, and additionally on Vine from the Capitol Records Building down to Sunset, near where the original movie studios sprang up a century ago. While you’re here you probably owe yourself a pilgrimage to the Dolby Theatre, home of the Academy Awards. Or why not give yourself a break from the commotion and duck inside an actual movie palace or the historic Hollywood Roosevelt.", 
                time: 180, 
                link: "https://variety.com/wp-content/uploads/2020/09/hollywood-walk-of-fame.jpg"
            }, 
            {
                name: "Griffith Observatory", 
                description: "The vista from the Griffith Observatory is stunning, particularly at night when the whole of Los Angeles twinkles below you. Inside this hilltop landmark you’ll find a selection of exhibits, including a Foucault pendulum, Tesla coil and planetarium show. Give yourself plenty of time before the 10pm closing to line up and gaze through the 12-inch refracting telescope on the roof. Otherwise don’t worry: you can look through the far less crowded modern, reflecting telescope on the front lawn. Just a heads up that parking now costs between $8 and $10 per hour—though you can take a DASH bus up there for only 35 cents.", 
                time: 200, 
                link: "https://cdn.vox-cdn.com/thumbor/iJzD_VpHz7bVEp6XCBzQtV8Cvgk=/0x530:7360x4383/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16233836/GettyImages_1049554410.jpg"
            }
        ]
    }, 
    {
        name: "Chicago", 
        description: "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        map: 'https://www.bing.com/maps/embed?h=280&w=325&cp=41.87860616910237~-87.64776448350926&lvl=11.889279652171211&typ=d&sty=r&src=SHELL&FORM=MBEDV8',
        link: "https://www.fringechicago.com/wp-content/uploads/sites/448/2019/07/fringe-chicago-skyline.jpg",
        latitude: 41.8781, 
        longitude: -87.6298,
        social: [
            {
                name:"Volunteers of America of illinois",
                description:"VOA Illinois supports individuals, families, and communities who need it most, when they need it most",
                time:90
            },
            {
                name:"The Service Club of Chicago",
                description:"The Service Club of Chicago is a charitable organization of women which has continually served the charitable needs of Chicago and its surrounding communities since 1890.",
                time: 60
            },
            {
                name:"Boys and girls of Chicago ",
                description:"Founded in 1902, the Boys & Girls Clubs of Chicago’s mission is to enable all young people, especially those who need us most, to reach their full potential as productive, caring, responsible citizens.",
                time:240
            },
            {
                name:"Team Humanity USA",
                description:"We are committed to providing humanitarian and educational outreach to vulnerable communities in the US and abroad by responding to major emergencies, fighting disease and poverty, as well as nurturing and promoting human welfare.",
                time:300
            },
            {
                name:"Cradles to Crayons",
                description:"At Cradles to Crayons, our entire organization is driven by a focused and all-important goal: to make life better for children in need. To make this happen, it takes a wide variety of individuals and groups to come together to make a difference in their local communities. ",
                time:120
            },
            {
                name:"Ronald McDonald House Charities",
                description:"Enabling families to stay close to their hospitalized child supports the child’s health and well-being while saving families more than $9 million in hotel and food costs each year.Our Mission and Impact",
                time:600
            }
        ],        
        attractions: [
            {
                name: "Art insititute of Chicago", 
                description: "The Art Institute of Chicago is a world class museum with hundreds of thousands of artworks. The diverse collection spans thousands of years and includes pieces from a variety of media including painting, prints, photography, sculpture, decorative arts, textiles, architectural drawings and more.", 
                time: 160, 
                link: "https://media.timeout.com/images/102850781/image.jpg"
            }, 
            {
                name: "Millenium Park",
                description: "Millennium Park is part of the larger Grant Park, located in downtown Chicago bordered by Michigan Avenue to the west, Columbus Drive to the east, Randolph Street to the north, and Monroe Street to the south. Its centerpiece is a 110-ton sculpture name Cloud Gate, which has a polished, mirror-like stainless steel surface that was inspired by liquid mercury. It reflects the surroundings, including buildings, the sky, and the tourists who walk through its central arch. Another top attraction in Millennium Park is Crown Fountain, a fascinating modern interpretation of the ancient gargoyle that gives the appearance of water flowing from the mouths of projected images of Chicago citizens. Other popular things to do here include seeing a performance at the Jay Pritzker Pavilion, an outdoor concert venue, and visiting Lurie Garden, which is open to the public at no cost year-round.", 
                time: 120, 
                link: 'https://media.timeout.com/images/105650200/image.jpg'
            }, 
            {
                name: "Navy Pier", 
                description: "The Navy Pier originally opened in 1916 as an amusement area and shipping facility but is now one of Chicago's most popular tourist attractions. Today, the Navy Pier is made up of 50 acres of gardens, attractions, shops, restaurants, concert venues, and parks. There is a 150-foot Ferris wheel and an historic carousel in Navy Pier Park.", 
                time: 120, 
                link: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Navy_Pier_1190x1585.jpg'
            }, 
            {
                name: "Museum of Science and Industry", 
                description: "At the north end of Jackson Park is the Museum of Science and Industry, founded in 1933, and arguably the most impressive museum in Chicago. It is devoted to the application of natural laws in technological and industrial development. The museum is thought to be the first in the U.S. to incorporate the idea of hands-on exhibits. Visitors are encouraged to interact with hundreds of exhibits. The MSI features permanent and changing exhibits, as well as an OMNIMAX theater.", 
                time: 180,
                link: "https://media.timeout.com/images/105830929/image.jpg"
            }, 
            {
                name: "Buckingham Fountain", 
                description: "Built in 1927 as a donation from the family, the Clarence Buckingham Memorial Fountain is one of the largest in the world. Designed in the period's iconic Art Deco style, the central fountain is surrounded by four seahorses that represent Lake Michigan's four bordering states. From 8am to 11pm, the fountain bursts to life hourly, shooting 15,000 gallons of water through nearly 200 nozzles each minute to create an impressive display. After dusk, the water show is accompanied by lights, a must-see if you are in the neighborhood in the evening. The fountain is the central focal point of Grant Park, Chicago's expansive public space that contains many attractions and smaller parks like Millennium Park, comparable to Central Park, one of the top attractions in New York City.",
                time: 45, 
                link: "https://cdn.choosechicago.com/uploads/2019/06/CC_035_20120815_BUCKINGHAM_FOUNTAIN-900x599.jpg"
            }
        ]
    }, 
    {
        name: "Rio de Janerio",
        description: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: "", 
        // flight: , 
        latitude: -22.9068, 
        longitude: 43.1729, 
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=-22.909292537176214~-43.20899425943702&lvl=13.498040974594359&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://www.avianca.com/content/dam/avianca_new/destinos/semana/gig/1-porque-visitarla/destino-rio-de-janeiro-brazil-para-conocer-el-cerro-del-corcovado.jpg", 
         social: [
            {
                name:"EDUMAIS",
                description:":Founded in 2016, EduMais is an NGO that provides high-quality education to underprivileged children and teenagers in Rio de Janeiro, Brazil.",
                time:120
            },
            {
                name:"Mais caminhos",
                description:"Develop people by connecting them in an international environment.  We offer educational, cultural and fun activities to our clients and to underprivileged Brazilian children and teenagers.",
                time:90
            },
            {
                name:"Project favela",
                description:":Our priority is teaching our youngest children to be classroom ready. Teaching them self control, focus, developing their cognitive and motor skill abilities is an extremely important part of what we do",
                time:60
            },
            {
                name:"Heinrich Bool STIFTUNG",
                description:"The Heinrich Böll Foundation is a non-profit German political organization. Our fundamental principles are those of ecology and sustainability, democracy and human rights, self-determination and social justice.",
                time:200
            },
            {
                name:"REDEH-Human develpment network",
                description:"REDEH – Human Development Network , created in 1990, is a non-profit civil association, without political affiliation or religious orientation, and its mission is to promote human development that includes equality between genders, races/ethnicities, the fair and sustainable development, the protection and conservation of the environment and the promotion of cultural diversity.",
                time:180
            },
            {
                name:"Brazillian Society for Solidarity",
                description:"The Brazilian Society for Solidarity was born with the dream of stimulating the encounter of the individual with their potential so that they recognize their role in society and can build their future in a dignified way.",
                time:90
            }
        ],
        attractions: [
            {
                name: "Cristo Redentor",
                description: "The giant statue of Christ overlooking the city from the 709-meter summit of Corcovado is almost as widely recognized a symbol of Rio as the distinctive shape of Sugarloaf. The world-famous landmark was erected between 1922 and 1931, financed almost entirely by contributions from Brazilian Catholics. The Art Deco statue was created by Polish-French sculptor Paul Landowski and built by the Brazilian engineer Heitor da Silva Costa, in collaboration with the French engineer Albert Caquot. Made of reinforced concrete and soapstone, the figure itself is 30 meters tall with arms stretching 28 meters; it weighs 635 metric tons. Inside its eight-meter-high base is a chapel, where it's not uncommon to find weddings and baptisms taking place.", 
                time: 120, 
                link: "https://www.fodors.com/wp-content/uploads/2021/06/10_ChristStatuesAroundTheWorld__ChristTheRedeemerRioDeJaneiro_shutterstock_1471556486.jpg"
            }, 
            {
                name: "Sugarloaf", 
                description: "Rio de Janeiro's best-known landmark is the rock peak of Sugarloaf, towering 394 meters above the harbor. It sits on a point of land that projects out into the bay and wraps around its harbor, and is connected to the city by a low strip of land. You can take a cable car from Praça General Tibúrcio to the top of the Morro da Urca, a lower peak from which a second cableway runs to the summit of the Sugarloaf. From here, you can see the entire mountainous coast that rings the bay and its islands. Below, the 100-meter Praia da Urca beach is near the location of Rio's original nucleus, between the Morro Cara de Cão and the Sugarloaf. On Cara de Cão are three forts of which the 16th-century, star-shaped Fort São João is open to the public.", 
                time: 120, 
                link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/58/27.jpg"
            }, 
            {
                name: "Copacabana", 
                description: "Few cities are blessed with a beautiful sand beach at its heart, let alone one that stretches four kilometers along one entire side of its downtown. A few steps from its golden sands are Avenida Atlântica, Avenida Nossa Senhora de Copacabana, and the neighboring smaller streets where you'll find appealing century-old buildings, fine hotels, and popular restaurants and cafés.", 
                time: 240, 
                link : "https://oddviser.com/photo/place/1600/288.jpg"
            }, 
            {
                name: "Tijuca National Park", 
                description: "Tijuca National Park protects the Tijuca Forest and several viewpoints overlooking the city, and surrounds Cristo Redentor, the giant-sized statue of Christ on Corcovado. To explore the park, you can leave the train up to Corcovado at a midpoint and follow the road through the forest. The 3,300-hectare Tijuca Forest, one of the world's largest forests within a city, was planted in the late 1850s on land that had been destroyed by coffee plantations, to safeguard the springs that supplied Rio de Janeiro's water. Most of the trees are native species and provide habitat for Capuchin monkeys, quatis (Brazilian raccoon), colorful toucans, hawks, brilliant blue butterflies, and many other species of wildlife, which you may spot while exploring its trails and roads. Near the station of the Corcovado railway is Largo do Boticário, one of Rio's most picturesque squares, surrounded by colonial-style houses. From the pagoda-style pavilion at Morro da Vista Chinesa, 380 meters above the shore, are views of the Municipal Park, the Botanic Garden, and a long stretch of the south coast. There are more views from Mirante Dona Marta, a viewpoint on a spur of rock above Botafogo Bay. Several waterfalls drop from the forest springs, including the 30-meter Cascatinha Taunay.", 
                time: 240, 
                link: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Floresta_da_Tijuca_60.jpg"
            }, 
            {
                name: "Maracanã", 
                description: "A must-see for football (soccer) fans when a game is scheduled, Brazil's largest stadium was home to the opening and closing ceremonies of the 2016 Summer Olympic Games. It was completely renovated for the FIFA World Cup 2014 and holds more than 78,000 fans. The stadium is used for matches between Rio's major football clubs, the Flamengo, Botafogo, Fluminense, and Vasco da Gama, as well as for concerts. The brief tour would be of interest to avid fans, but others should give it a miss.", 
                time: 240, 
                link: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13CE5/production/_93352118_034360287-1.jpg"
            }
        ] 
    }, 
    {
        name: "Cairo", 
        description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 1280,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'Ramses Hilton Hotel & Casino',
        //         stars: 4.6,
        //         price: 102,
        //         //price per night
        //     },
        //     {
        //         name: 'Pyramisa Suites Hotel Cairo',
        //         stars: 4.8,
        //         price: 120,
        //     }
        // ],
        // flight: {
        //     name: 'Qatar Airways',
        //     price: 600,
        // },
        latitude: 30.0444, 
        longitude: 31.2357, 
        map:"https://www.bing.com/maps/embed?h=280&w=325&cp=30.044192252197988~31.230152560376837&lvl=12.291469982776999&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg",
        social: [
            {
                name: "Injaz Egypt",
                description: "After attending a training session, volunteers are required to help empower and develop future generations, and work with students to give them a better sense of the world. What makes this foundation unique is that it’s recognized internationally as well, and it providers volunteers with certificates in case they needed them to work with other foundations in the future. ",
                link: 'http://injaz-egypt.org/',
                time: 180
            },
            {
                name: "Egyptian Society For Mercy To Animals (ESMA)",
                description: "All of us love animals, but if you can't adopt a cat or a dog at home there is still a way to help out, and enjoy the company of these amazing creatures with the ESMA. Volunteers can spend time with animals at shelters, help in their grooming, organize and clean the shelter, temporarily adopt an animal, and more. It’s perfect for every animal lover with some extra time on their hand.",
                link: 'https://www.esmaegypt.org/',
                time: 180
            },
            {
                name: "Egyptian Food Bank",
                description: "The Egyptian food bank has several different programs to help people out, volunteers can help prepare food packages which are then sent to needing families, or do administrative duties for the organizations. Companies can also join in, as the Egyptian Food bank has a program set up for corporations, who are willing to help with their time and employees to participate. ",
                link: 'https://www.efb.eg/',
                time: 180
            }
        ], 
        attractions: [
            {
                name: "Pyramids of Giza", 
                description: "The Pyramid of Cheops (also called the Great Pyramid or Pyramid of Khufu) is the largest pyramid of the Giza group, and its interior of narrow passages can be explored, although there isn't much to see, except a plain tomb chamber with an empty sarcophagus. Directly behind the Great Pyramid is the Solar Boat Museum, which displays one of the ceremonial solar barques unearthed in the area that has been painstakingly restored to its original glory. Farther south on the plateau is the Pyramid of Chephren (also known as the Pyramid of Khefre), with an internal tunnel area, which can be entered, and the smaller Pyramid of Mycerinus (Pyramid of Menkaure). Guarding these mortuary temples is the lion-bodied and pharaoh-faced Sphinx; one of the ancient world's iconic monuments. The Giza Plateau is set to welcome another attraction when the Grand Egyptian Museum (GEM) is finally finished. When opened, it will be the biggest museum in the world devoted to exhibiting the antiquities of a single civilization, displaying a wealth of Ancient Egypt's artifacts, many of which have never been seen by the public before.", 
                time: 600, 
                link: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB.jpg"
            }, 
            {
                name: "Egyptian Museum", 
                description: "The absolutely staggering collection of antiquities displayed in Cairo's Egyptian Museum makes it one of the world's great museums. You would need a lifetime to properly see everything on show. The museum was founded in 1857 by French Egyptologist August Mariette and moved to its current home – in the distinctive powder-pink mansion in Downtown Cairo – in 1897.", 
                time: 300, 
                link: "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Egyptian_Museum.jpg"
            }, 
            {
                name: "Al-Azhar Mosque", 
                description: "Al-Azhar Mosque is the finest building of Cairo's Fatimid era and one of the city's earliest surviving mosques, completed in AD 972. It's also one of the world's oldest universities – Caliph El-Aziz bestowed it with the status of university in AD 988 (the other university vying for \"oldest\" status is in Fes) and today, Al-Azhar University is still the leading theological center of the Islamic world.", 
                time: 300,
                link: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Cairo_-_Islamic_district_-_Al_Azhar_Mosque_and_University.JPG"
            }, 
            {
                name: "Saqqara & Dahshur", 
                description: "The vast necropolis of Saqqara and the nearby site of Dahshur are home to the \"other pyramids,\" and a day trip out here is just as rewarding as a trip to Giza's pyramids. The sites are roughly 30 kilometers south of Cairo. The Step Pyramid is Saqqara's most popular tourist attraction, but the entire area is littered with gorgeously painted tombs, which are well worth spending a few hours exploring. Saqqara is so large, and its history as a burial site so vast, that excavations here continue to unearth finds that make headline grabbing news worldwide.", 
                time: 480, 
                link: "https://i.natgeofe.com/n/d0bab16f-4d02-4bfe-970c-0054f38a9dfc/02-egypt-tomb.jpg"
            }, 
            {
                name: "Al-Muizz li-Din Allah Street", 
                description: "The northern section of Al-Muizz li-Din Allah Street is rimmed by fine Mamluk buildings, which have been painstakingly restored to their former glory.", 
                time: 240, 
                link: "https://i0.wp.com/www.sacredfootsteps.org/wp-content/uploads/2020/06/Muizz_Street_-_Egypt.jpg?fit=1500%2C1056&ssl=1"
            }
        ]
    }, 
    {
        name: "San Francisco", 
        description: "San Francisco, officially the City and County of San Francisco, is a commercial and cultural center in the northern region of the U.S. state of California.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 1600,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'Handlery Union Square Hotel',
        //         stars: 4.8,
        //         price: 160,
        //         //price per night
        //     },
        //     {
        //         name: 'Riu Plaza Fishermans Wharf',
        //         stars: 4.4,
        //         price: 120,
        //     }
        // ],
        // flight: {
        //     name: 'Air Asia',
        //     price: 600,
        // },
        latitude: 37.7749, 
        longitude: -122.4194, 
        map:"https://www.bing.com/maps/embed?h=280&w=325&cp=37.7628455724045~-122.44105736277515&lvl=12.173114123960836&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://cdn.travelpulse.com/images/d3a9edf4-a957-df11-b491-006073e71405/e864929d-127a-4caf-9a15-7f9cd45160f0/630x355.jpg", 
        social: [
            {
                name: "Musicians On Call",
                description: "If you’re looking for a volunteer opportunity that rocks, Musicians On Call is playing your tune. This harmonious organization brings live and recorded music to the bedsides of patients who are facing all manner of challenging health issues.",
                time: 180
            },
            {
                name: "Shanti Project",
                description: "This special project cultivates compassion to help eliminate the isolation San Francisco’s at-risk populations face. It accepts both single and group volunteers to care for those who have life-altering or life-threatening conditions..",
                time: 180
            },
            {
                name: "Nature in the City",
                description: "As the name suggests, Nature in the City is an environmental organization that looks after San Francisco’s original locals – it aims to connect the city with its natural roots by conserving local habitats. It hosts multiple monthly meet-ups at places like Alemany Farm and Palou Phelps Park that volunteers help restore.",
                time: 180
            }
        ], 
        attractions: [
            {
                name:"Golden Gate Bridge", 
                description: "The Golden Gate Bridge is a California icon gracing San Francisco Bay. It is the most photographed site in the city, with the orange structure backed by blue water, or in many cases, peaking through low lying cloud. At night, the flood-lit structure is equally striking. Connecting San Francisco with Marin County and other districts further north, the Golden Gate Bridge was, at one time, designated the greatest man-made sight in the United States by the U.S. Travel Service. Opened on May 28th, 1937, the bridge took four years to build and at the time of its completion, was the longest suspension bridge in the world, measuring approximately two miles in length.", 
                time: 120, 
                link: "https://images.musement.com/cover/0002/13/golden-gate-bridge-jpg_header-112309.jpeg"
            }, 
            {
                name: "Alcatraz Island", 
                description: "The historic and notorious Alcatraz penitentiary, located on Alcatraz Island in San Francisco Bay, is one of America's most infamous prisons. It operated for almost thirty years, closing in 1963 and re-opening as a tourist attraction in 1973. Some of America's most well-known criminals were inmates here, including Al Capone and the \"Birdman,\" who would later form the basis for the fictional movie The Birdman of Alcatraz.", 
                time: 180, 
                link: "https://upload.wikimedia.org/wikipedia/commons/1/17/Alcatraz_2021.jpg"
            }, 
            {
                name: "Fisherman's Wharf", 
                description: "Fisherman's Wharf is one of San Francisco's most popular tourist areas. Some of the main attractions in the area are Madame Tussauds Wax Museum, Musée Mécanique, Ripley's Believe it or Not!, and Ghirardelli Square. Restored 19th- and 20th-century ships line the waterfront at the Hyde Street Pier, which is now the San Francisco Maritime National Historic Park.", 
                time: 240, 
                link: "https://www.dylanstours.com/wp-content/uploads/2020/02/unnamed-2.png"
            }, 
            {
                name: "Cable Cars", 
                description: "Cable Cars were introduced in 1873 to help locals contend with the many hills the city is built on. Today, the few remaining cable cars offer tourists a great way to explore the city in historic fashion. Since 1964, these tram-like vehicles have had the unique distinction of being the only public transport system to be declared a historic monument.", 
                time: 60, 
                link: "https://cdn.vox-cdn.com/thumbor/EkUXEO013_Ag5oYRrL4Sygc1bNQ=/0x0:1220x813/1200x675/filters:focal(513x310:707x504)/cdn.vox-cdn.com/uploads/chorus_image/image/56773485/shutterstock_566476819.0.1505928130.jpg"
            }, 
            {
                name: "Chinatown", 
                description: "Now with its temples, theaters, workshops, small businesses, stores, antique and souvenir shops, teahouses, and traditional pharmacies, visiting Chinatown has become one of the top things to do in San Francisco.", 
                time: 180, 
                link: "https://media.timeout.com/images/102875459/750/422/image.jpg"
            }
        ]
    },  
    {
        name: "Rome", 
        description: "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. It is often referred to as the City of Seven Hills due to its geographic location, and also as the 'Eternal City'. Rome is generally considered to be the 'cradle of Western civilisation and Christian culture', and the centre of the Catholic Church.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 1000,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'The Hive Hotel',
        //         stars: 4.8,
        //         price: 110,
        //         //price per night
        //     },
        //     {
        //         name: 'Hotel Quirinale',
        //         stars: 4.6,
        //         price: 116,
        //     }
        // ],
        // flight: {
        //     name: 'Air Asia',
        //     price: 600,
        // },
        latitude: 41.9028, 
        longitude: 12.4964, 
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=41.8887913627085~12.501223181589012&lvl=12.291469982776997&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg", 
        social: [
            {
                name: "RomAltruista",
                description: "Altruistic Rome is a non-profit organization founded in 2011 to introduce in Rome the concept of flexible volunteering. This new idea means that you can volunteer according to your availability, without having to ensure continuity.",
                time: 180
            },
            {
                name: "Joel Nafuma Refugee Center (JNRC)",
                description: "Operating in the crypt of St. Paul’s Within the Walls Episcopal Church, in the heart of Rome, JNRC is a day center for refugees and asylum seekers to relax, learn, and receive advice in order to achieve their goals. As most of their guests are homeless sleeping in parks and main stations around the city, the JNRC offers a holistic approach with services from basic supplies, a relaxing atmosphere, legal and social advice.",
                time: 180
            },
            {
                name: "Mother Teresa of Calcutta Center (MTC)",
                description: "MTC is a non-profit organization established and directed by the Missionaries of Charity, the religious family founded by Saint Teresa of Calcutta, to be a unique and authoritative source of information on Mother Teresa —the nun of the poor, known throughout the world for her humanitarian work.Its aim is to promote genuine devotion to Mother Teresa and authentic knowledge of her life, work, holiness, and spirituality.",
                time: 180
            }
        ], 
        attractions: [
            {
                name:"Colosseum", 
                description: "The number 1 attraction of Rome is the Colosseum; the large amphitheatre that housed 65,000 spectators in Roman days. Gladiators battled each other as well as wild animals in the Colosseum's arena. In the giant ‘ruins’ of the Colosseum, you can visit the stands, the arena and the underground spaces of the largest Roman amphitheatre.", 
                time: 160, 
                link:"https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
            }, 
            {
                name: "Pantheon", 
                description: "One of the best maintained buildings from Roman times is the Pantheon. What function the building had in those days is still not clear, but the Pantheon was given to the pope by emperor Hadrian in 608. The current church has several unique funerary monuments (painter Raphael and a few Italian kings), as well as a remarkably large and open dome (oculus).", 
                time: 150, 
                link: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pantheon_Rom_1_cropped.jpg"
            }, 
            {
                name: "Trevi Fountain of Rome", 
                description: "The most famous fountain in Rome and perhaps even the world must be the ‘Fontana di Trevi’, or Trevi Fountain. This baroque fountain, located on the Piazza di Trevi, was built in the 18th century. The landmark and monument displays the god of the sea, Neptune on his chariot. No visit or Rome sightseeing is complete without tossing a coin in the Trevi Fountain, as this means the person throwing the coin will 'one day return to Rome Italy'.", 
                time: 120, 
                link:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/800px-Trevi_Fountain_-_Roma.jpg"
            }, 
            {
                name: "St. Peter's Bascilica", 
                description: "The St. Peter’s Basilica, or ‘Basilica di San Pietro in Vaticano’ is the spiritual centre of the Catholic Church and residence of the pope. The enormous basilica, located in the independent state of Vatican City and next to St Peter's Square, was built on what is believed to be the grave of Peter. St. Peter’s Basilica contains masterpieces such as Bernini's baldachin and ‘La Pieta’ by Michelangelo, but you can also visit the crypts with 148 papal tombs. ", 
                time: 120, 
                link: "https://images.prismic.io/mystique/659698ea-b932-4e1e-98cb-9e5be5c8ddb8_st+peter%27s+basilica+9.jpg?auto=compress,format"
            }, 
            {
                name: "Vatican Museums and Sistine Chapels", 
                description: "Over the centuries, the popes amassed an enormous art collection varying from Roman objects and religious relics to countless paintings. In the Vatican Museums you can visit 54 richly decorated rooms and view these art treasures of the Catholic church. The highlight for many visitors is likely to be the famous Sistine Chapel. The chapel with lovely frescos by Michelangelo that is mostly known as the site of conclave when a new pope is elected. Because it gets so many visitors, this attraction has by far the longest lines.", 
                time: 120, 
                link: "https://www.shoreexcursionsgroup.com/img/tour/EUCVVATICAN-2.jpg"
            }
        ]
    }, 
    {
        name: "Mexico City", 
        description: "Mexico City is the densely populated, high-altitude capital of Mexico. It's known for its Templo Mayor (a 13th-century Aztec temple), the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional, which houses historic murals by Diego Rivera. All of these are situated in and around the Plaza de la Constitución, the massive main square also known as the Zócalo.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 1200,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'Histórico Central',
        //         stars: 4.4,
        //         price: 128,
        //         //price per night
        //     },
        //     {
        //         name: 'Grand Fiesta Americana Chapultepec',
        //         stars: 4.6,
        //         price: 80,
        //     }
        // ],
        // flight: {
        //     name: 'Vistara',
        //     price: 980,
        // },
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=19.39971822848281~-99.15307826060274&lvl=10.020245235037088&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: 'https://traveler.marriott.com/wp-content/uploads/2021/10/Mexico-City-GI-1064279806.jpg',
        latitude: 19.4326,
        longitude: -99.1332, 
        social: [
            {
                name: "The British & Commonwealth Benevolent Society",
                description: "Independent British charity. Provides welfare, social and general help to British people and the related community. Montes Escandinavos 405, Col. ",
                time: 180
            },
            {
                name: "El Pozo de Vida \"The Well of Life\"",
                description: "US non-profit organization based in Mexico City. Builds awareness of and tracks and fights human trafficking and modern-day slavery. Runs a rescue home for the rehabilitation of underaged sex victims.",
                time: 180
            }
        ], 
        attractions: [
            {
                name: "Zócalo", 
                description: "The beating heart of Mexico City is Zócalo - the Plaza de la Constitución (Constitution Square) - where the country's first constitution was proclaimed in 1813. Measuring some 240 meters in each direction, it's one of the world's largest squares and was laid out almost immediately after the conquest of the former Aztec city of Tenochtitlán on which it stands.",
                time: 150, 
                link: "https://media.cntraveler.com/photos/5a92f25dc6516a534a5304e9/master/w_4000,h_2704,c_limit/Metropolitan-Cathedral_GettyImages-115006326.jpg"
            }, 
            {
                name: "Templo Mayor and the Great Pyramid of Tenochtitlán", 
                description: "Despite the widespread destruction after the defeat of the Aztecs, a number of their important historic sites have been unearthed and put on display in recent years. The most important site is Templo Mayor, home to the remains of the Great Temple of Tenochtitlán, including the first relic discovered in 1978, a finely sculpted round disc more than three meters in diameter and weighing eight-and-a-half tons. Further excavations - including the summit platform of an earlier pyramid with well-preserved temple walls, along with the skulls of sacrificial victims - indicate the temple site had been built over by the Aztecs and their predecessors 11 times.  A highlight of a visit is a walkway past the precinct of the aristocratic \"winged warriors,\" where remains of residences decorated with multi-colored reliefs have been unearthed, along with evidence of the original paintwork.",
                time: 270, 
                link: "https://mexicanroutes.com/wp-content/uploads/2017/10/MexicanRoutes-TemploMayor.jpg"
            }, 
            {
                name: "The Palace of Fine Arts", 
                description: "One of Mexico City's most important cultural landmarks, the Palace of Fine Arts (Palacio de Bellas Artes) is an architectural gem. Towering over the adjacent park, this massive marble building - designed by Italian architect Adamo Boari with Art Nouveau and Art Deco influences - was completed in 1934 and is so heavy that it has sunk more than four meters, despite attempts to lighten it by removing part of its huge dome. The palace serves as an opera house and concert hall hosting a variety of traditional and international dance and operatic productions. But many visitors also come here to view the impressive murals adorning its interior by famous artists such as Diego Rivera, David Alfaro Siqueiros, and José Clemente. On the 4th floor is the Museo Nacional de Arquitectura with rotating exhibits on contemporary architecture.", 
                time: 180, 
                link: "https://cdn.britannica.com/07/126907-050-39DF1626/Palace-of-Fine-Arts-Mexico-City.jpg"
            }, 
            {
                name: "Coyoacán & the Frida Kahlo Museum", 
                description: "Laced with atmospheric cobblestone streets, Coyoacán is one of Mexico City's oldest neighborhoods. Take time to stroll around the maze of laneways here and explore the hidden plazas, colonial-style mansions, and art-filled old churches like San Juan Bautista. You can also sample exotic fruits and vegetables at the markets. One of the top tourist attractions in the town is the Frida Kahlo Museum in La Casa Azul (The Blue House), where the famous Mexican artist was born and where she frequently returned throughout her life. Here, you can view some of her most important paintings, as well as works by her famous husband, the mural artist Diego Rivera, and personal items from the couple's life.", 
                time: 180, 
                link: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Mexico.DF.Coyoacan.JardinHidalgo.01.jpg"
            }, 
            {
                name: "The House of Tiles", 
                description: "Opposite the picturesque Church of San Francisco is the spectacular House of Tiles (Casa de los Azulejos). It was originally built in 1596 and boasts a façade decorated by the Conde del Valle de Orizaba 150 years later, with exquisite blue and white tiles from Puebla. It became even more famous after artist José Clemente Orozco painted murals on the walls of the staircase in 1925. The House of Tiles is now a restaurant and an evocative venue to dine al fresco in the building's spectacular courtyard, surrounded by what is one very large work of art.", 
                time: 100, 
                link: "https://www.ownmexico.org/wp-content/uploads/La-Casa-de-los-Azulejos.jpg"
            }
        ]
    }, 
    {
        name: "Manila", 
        description: "Manila,also known as the “Pearl of the Orient” the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers. Intramuros, a walled city in colonial times, is the heart of Old Manila. It’s home to the baroque 16th-century San Agustin Church as well as Fort Santiago, a storied citadel and former military prison.", 
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 800,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'Sheraton Pretoria Hotel',
        //         stars: 4.2,
        //         price: 60,
        //     },
        //     {
        //         name: 'Hotel@Hatfield',
        //         stars: 4.6,
        //         price: 78,
        //     }
        // ],
        // flight: {
        //     name: 'Delta Airlines',
        //     price: 400,
        // },
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=14.586831341731155~120.99135510750011&lvl=12.291469982776999&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://webcdn.executivecentre.com/wp-content/uploads/2021/09/Article-GuideToManila-CityTEC.jpeg",
        latitude: 14.5995, 
        longitude: 120.9842,
        social: [
            {
                name: "Virlanie Foundation",
                description: "Virlanie Foundation is a private, non-profit organization reaching out to street children in the Philippines. Virlanie has been helping children who come from difficult situation to become a responsible and an independent adult.",
                time: 180, 
                link: ""
            },
            {
                name: "ProGay Philippines",
                description: "Membership organization that provides education, organizing, public advocacy, counseling and documentation services for LGBT issues and concerns",
                time: 180
            },
            {
                name: "RMHC Philippines",
                description: "Ronald McDonald House Charities, a non-profit, 501 (c) (3) corporation, creates, finds and supports programs that directly improve the health and well being of children.",
                time: 120
            }
        ], 
        attractions: [
            {
                name: "Rizal Park", 
                description: "One of your first stops in Manila should be Rizal Park. Sometimes referred to as Luneta Park, this is a peaceful and manicured outdoor garden located in the heart of the city. Throughout the park. you will see statues and monuments paying tribute to Manila's history. Of note is the century-old Monument of Rizal, which houses the remains of one of the Philippines' most celebrated heroes, Dr. Jose Rizal. Be sure to stroll through the park to take in the local flora and fauna. Keep your eyes open for the Narra tree, the national tree of the Philippines, and the small lake with the artistically raised archipelago structure in the middle.", 
                time: 60,
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Rizal_Monument_at_Rizal_Park.jpg/1024px-Rizal_Monument_at_Rizal_Park.jpg"
            }, 
            {
                name: "Manila Ocean Park", 
                description: "The Manila Ocean Park is one of the most unique adventures in the city and one of the top things to do for families visiting the city. Get interactive with marine life with the Sharks and Rays Encounter, Trails to Antarctica, or the fish spa where fish clean your feet in a small pool of water. The park easily fills several hours depending on how many encounters you try. In addition to the state-of-the-art aquatic facility, you will see exhibits of birds and other animals.", 
                time: 300, 
                link: "https://a.cdn-hotels.com/gdcs/production76/d1181/ea456598-47a2-4447-ba94-52836fc3f249.jpg"
            }, 
            {
                name: "Fort Santiago", 
                description: "The site of Fort Santiago is an impressive stop if you are visiting the city and it is one of the most important historical sites in Manila. The 16th-century fortress was key in protecting the Intramuros, which is the oldest district in Manila, known historically as the Walled City. You can explore the grounds at a leisurely pace. Be sure to take note of bullet markings that are still visible in the fortress walls and stop by the visitor center for more detailed information about the fort.", 
                time: 240, 
                link: "https://www.tripsavvy.com/thmb/FmX6CFQJ4JRDhW3R51p6l3LQp1I=/2123x1194/smart/filters:no_upscale()/GettyImages-515030857-599ff63e03f402001100ee1d-6218e3c18a3a4503a2a1fb183ce8ccfb.jpg"
            }, 
            {
                name: "San Agustin Church and Museum", 
                description: "As a designated UNESCO World Heritage site, the San Agustin Church is a national treasure in the Philippines. The Catholic Church has a unique history that is reflected in the details of the building. If you look closely, you will see both Chinese and Spanish influences in the design. The church has been rebuilt several times after battles and natural disasters. Pay close attention to the carvings on the large wooden doors that open to the chapel. If you have an interest in history or architecture, it would be worth your time to hire a local guide who can take you on a walking tour of the area and describe intricate details of the church that you may not notice on your own.", 
                time: 180, 
                link: "https://a.cdn-hotels.com/gdcs/production15/d109/79c9fc0c-2547-4789-bd28-08e234979e12.jpg"
            }, 
            {
                name:"Natural Museum of the Phillippines", 
                description: "For a true exploration into the culture of the country, the National Museum of the Philippines is one of the best places to visit. The museum has four main complexes and extensive collections and artifacts relating to art, archaeology, anthropology, zoology, biology, and natural history. The museum galleries help offer a sense of place, telling the cultural story beyond what you will find on your own visiting the city's many historical attractions.", 
                time: 180, 
                link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/73/cb.jpg"
            }
        ]
    }, 
    {
        name: "Pretoria", 
        description: "The Pretoria National Botanic Garden, in the city's eastern suburbs, is a peaceful oasis close to the city. The 76-hectare gardens spotlight South African species, with more than half the country's tree species, as well as many flowering plants, cycads, aloes, and other impressive collections. A quartzite ridge slices the park into two sections, with vegetation in the warmer north-facing half contrasting with that in the colder south-facing section.", 
        
        // startDate: "2022-07-05", 
        // endDate: "2022-07-13", 
        // price: 800,
        // adults: 2,
        // hotels: [
        //     {
        //         name: 'Sheraton Pretoria Hotel',
        //         stars: 4.2,
        //         price: 60,
        //     },
        //     {
        //         name: 'Hotel@Hatfield',
        //         stars: 4.6,
        //         price: 78,
        //     }
        // ],
        // flight: {
        //     name: 'Delta Airlines',
        //     price: 400,
        // },
        map: "https://www.bing.com/maps/embed?h=280&w=325&cp=-25.74786515120418~28.189566262323183&lvl=12.953933408093764&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
        link: "https://cdn.travelsafe-abroad.com/wp-content/uploads/pretoria-from-the-air_102637-1280x800.jpg", 
        latitude: -25.7479, 
        longitude: 28.2293, 
        social: [
            {
                name: "67 Blankets for Nelson Mandela Day",
                description: "67 Blankets for Nelson Mandela Day is a charity that collects handmade knitted or crocheted blankets from volunteers to distribute to a specific charity each year on Mandela Day.",
                time: 180
            },
            {
                name: "The Viva Foundation Mandela Day Volunteer Opportunities",
                description: "The Viva Foundation runs a variety of childcare and education projects in Mamelodi. Viva meets the most urgent needs, such as food-insecurity and inequality and facilitates access to the economy by supporting economic self-empowerment, through training and job-creation.",
                time: 180
            },
            {
                name: "Save The Children",
                description: "Save The Children is a children’s charity that operates in Gauteng, KwaZulu-Natal, Limpopo and Free State, in five programme areas: early childhood care, health and nutrition, education, child protection and child rights governance.",
                time: 120
            },
            {
                name: "LifeLine",
                description: "LifeLine acts as an emotional first-aid station to the greater Pretoria area. This charity provides a confidential crisis intervention service that includes telephone counselling, face-to-face counselling, rape counselling and trauma counselling.",
                time: 120
            }

        ], 
        attractions: [
            {
                name: "Pretoria National Botanic Garden", 
                description: "The Pretoria National Botanic Garden, in the city's eastern suburbs, is a peaceful oasis close to the city. The 76-hectare gardens spotlight South African species, with more than half the country's tree species, as well as many flowering plants, cycads, aloes, and other impressive collections. A quartzite ridge slices the park into two sections, with vegetation in the warmer north-facing half contrasting with that in the colder south-facing section.", 
                time: 240, 
                link: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Broodboomtuin%2C_a%2C_Pretoria_Nasionale_Botaniese_Tuin.jpg"
            }, 
            {
                name: "Voortrekker Monument", 
                description: "High on a hilltop south of the city center, the Voortrekker Monument is a South African National Heritage site and one of the country's most visited historic monuments. It was built in 1949 to commemorate the Voortrekkers, the Boers who pushed northward into unknown territory in the mid 19th-century. This 40-meter-high square granite structure is a prominent landmark in the city with steps leading up to the Hall of Heroes, where 27 marble reliefs depict the Great Trek of 1838. Surrounding the monument is a wall depicting ox-wagons representing the trek wagons. On 16 December each year, a shaft of sunlight shines through an opening in the dome and illuminates a cenotaph below, which reads. \"Ons vir jou, Suid-Afrika\" (\"We are for you, South Africa\"). Occasionally, the hall hosts classical music performances, which highlight its excellent acoustics. Museum exhibits depict snapshots of life during this important period. After browsing the interior, visitors can admire panoramic views of Pretoria from the roof or enjoy a meal at the restaurant.", 
                time: 120, 
                link: 'https://www.historyhit.com/app/uploads/2020/11/Voortrekker-Monument.jpg'
            }, 
            {
                name: "Ann van Dyk Cheetah Centre", 
                description: "At the Ann van Dyk Cheetah Centre, about a 45-minute drive from Pretoria, animal lovers can get up close and personal with some magnificent African creatures. This non-profit center was established in 1971 as a cheetah breeding project and has since successfully bred African wild dogs, Cape vultures, and brown hyenas among other animals. The center was also the first breeder of the rare king cheetah. Visitors can choose from a variety of educational tours, including a three-hour guided tour and touch experience, where guests accompany keepers on the feeding rounds and enjoy a petting experience with these graceful animals. This is a fantastic opportunity for photographers to capture close-up images, and the cost helps fund conservation projects.", 
                time: 300, 
                link: "https://www.sapeople.com/wp-content/uploads/2021/02/Ann-van-Dyk-cheetah-centre.jpg"
            }, 
            {
                name: "Union Buildings", 
                description: "Set in beautiful gardens, the Union Buildings command the highest point of the city on Meintjieskop Hill near historic Church Square, site of the city's first settlement. Designed by Sir Herbert Baker in 1913, this impressive range of sandstone buildings mixes Italian Renaissance, English Renaissance, and Cape Dutch styles. It's the seat of government and also houses the offices of the president and the state archives. In the gardens, which slope down in terraces to Church Street, are the Delville Wood Memorial, commemorating the South African soldiers who fell in the First World War; statues of the South African prime ministers Louis Botha, J. B. M. Hertzog, and J. C. Smuts; as well as a nine-meter-tall statue of Nelson Mandela. Visitors come here to stroll among the gardens, ogle the architecture, and admire the impressive city views. The site also holds a special place in the hearts of many South Africans after former President Nelson Mandela's inauguration took place here in 1994.", 
                time: 120, 
                link: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Uniegebou.jpg"
            }, 
            {
                name: "Moreleta Kloof Nature Reserve", 
                description: "A haven for hikers and nature lovers, Moreleta Kloof Nature Reserve spans 100 hectares in the foothills of Moreleta Kloof near the city center. In the 19th century, the reserve was a dairy farm, and one of the original buildings has been converted to a restaurant where visitors can dine on a beautiful deck, often with a parade of animals in view. Springbok, impala, bushbuck, zebra, and ostrich are among the wildlife found in the park, as well as an abundance of birds. A tributary flows through the reserve providing water for the animals, and hiking trails range in length from 1.5 kilometers to more than three kilometers. Other lovely green spaces close to the city center include Faerie Glen Nature Reserve, part of the Moreleta Spruit Nature Trail, which follows a winding course along the banks of a stream through ever-changing scenery, as well as Groenkloof Nature Reserve with hiking, horseback riding, and 4WD trails. Birders will enjoy the Austin Roberts Bird Sanctuary, named after the South African ornithologist who wrote a popular handbook on the birds of South Africa. Bird hides line the shores of the reservoir, and more than 100 indigenous species make their home here.", 
                time: 480, 
                link: "https://upload.wikimedia.org/wikipedia/commons/7/76/Moreleta_Kloof_Nature_Reserve.jpg"
            }
        ]
    } 
];

module.exports = AllTrips;