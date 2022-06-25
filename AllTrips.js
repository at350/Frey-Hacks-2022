// Basic info for all cities and trips will go here

// All the cities and trip data go in here
const AllTrips = [
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
                    // REPLACE THIS
                    name: "Food Bank Paris",
                    description: "A food bank serving the Paris area since 1905.",
                    link:''
                }
            ],
            attractions: [
                {
                    // ADD MORE ATTRACTIONS
                    name: "Eiffel Tower",
                    description: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. The tower is 324 metres (1,099 ft) tall, and stands a total of 324 metres (1,099 ft) to the ground. The tower is completed in 1887.",
                    time: 30,
                    link:''
                }
            ]
    },
    {
        name: 'Mumbai',
        description: "Mumbai is a leading arts and entertainment capital in India with the Indian Television industry. Mumbai is one of the wealthiest cities of India as well as globally. One of the most commonly visited tourist places in Mumbai are Juhu Beach, the Queen's necklace or Marine Drive, Gateway of India, Hotel Taj, Haji Ali Dargah, Mahalaxmi temple, Siddhivinayak temple and many more.",
        startDate: "2022-07-05",
        endDate: "2022-07-13",
        price: 800,
        adults: 2,
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
                time: 60
            },
            {
                name: "Taj Mahal Palace",
                description: "Tourists can find another popular site right near the Gateway of India: The Taj Mahal Palace, Mumbai and Tower. More than a century old, India's first luxury hotel is revered for the grandeur of its brownstone exterior. The windowed facade infuses its Renaissance architecture with Islamic touches, like corner turrets topped with onion domes, pointed archways, and covered balconies.",
                time: 60
            },
            {
                name: "Gateway of India",
                description: "Standing proud on the banks of the Arabian Sea at the Apollo Bunder waterfront area, the Gateway of India is one of Mumbai's most popular and treasured landmarks. The 26-meter basalt archway, which combines the architectural styles of Roman triumphal arches with traditional Hindu and Muslim designs, was built as a gesture of welcoming for King George V and Queen Mary when they visited British India in 1911.",
                time: 60
                // Lets add links for all attractions and social if possible?
            }
        ]
    },
    {
        name: "New York City", 
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        adults: 2, 
        // hotels: "", 
        // flight: , 
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
                time: 150
            },
            {
                name: "Central Park",
                description: "Central Park is New York’s largest urban park and one of the biggest in the world, with 843 acres. This park is home to artificial lakes, waterfalls, meadows and wooded areas. You will also find the Central Park Zoo, among other attractions in this greenspace of New York.",
                time: 120
            },
            {
                name: "Empire State Building",
                description: "The Empire State Building is a 102-story skyscraper in Midtown Manhattan, New York City. It was the world's tallest building, a feat not only of the United States but also of many other countries.",
                time: 60
            },
            {
                name: "Times Square",
                description: "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood. It is referred to as the \"Crossroads of the World.\"",
                time: 100
            },
            {
                name: "The Metropolitan Museum of Art",
                description: "The \"Met\" is the largest art museum in the Western Hemisphere. Its collection consists of more than 1.5 million works, including paintings, sculptures, prints, drawings, and more.",
                time: 180
            },
            {
                name: "St. Patrick's Cathedral",
                description: "This sprawling cathedral sits amid the hustle and distinctively secular bustle of Rockefeller Center. But that doesn't take away from its otherworldly vibe. Whether you're religious or just making an architectural pilgrimage, you can't help but be impressed by St. Patrick's.",
                time: 60
            }
        ]
    }, 
    {
        name: "London", 
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        adults: 2, 
        // hotels: "", 
        // flight: , 
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
                time: 60
            },
            {
                name: "Camden",
                description: "Camden is a borough in London, England, and the most populous borough in the United Kingdom. It is the second-largest borough in the United Kingdom after London, and the most populous borough in the United Kingdom. Its well-known culture is filled with vibrant goths, punks, and tourists alike.",
                time: 120
            },
            {
                name: "Picadilly Circus",
                description: "Piccadilly Circus is a major London street, famous for its distinctive Victorian architecture and distinctive street lights. It is one of the most famous attractions in London, and is one of the most visited attractions in the world.",
                time: 45
            },
            {
                name: "London Eye",
                description: "The London Eye is a giant Ferris wheel situated on the South Bank of the River Thames in London, England. It is the tallest Ferris wheel in the world and is the largest Ferris wheel in London.",
                time: 30
            },
            {
                name: "Tower of London",
                description: "The Tower of London is a historic structure in London, which was the site of the London World's Fair from 1848 to 1858. It is the tallest structure in London and is the second-tallest structure in the United Kingdom.",
                time: 60
            },
            {
                name: "London Bridge",
                description: "London Bridge is a historic bridge in London, built in 1848. It is the longest suspension bridge in the United Kingdom and the second-longest suspension bridge in the European Union.",
                time: 60
            },
            {
                name: "London Zoo",
                description: "The London Zoo is a zoo in London, England. It is the largest of the London Zoo's, and is the largest zoo in the United Kingdom. It is the largest zoo in the United Kingdom, and is the largest zoo in the European Union.",
                time: 60
            },
            {
                name: "Natural History Museum",
                description: "The Natural History Museum is a museum in London, England, which houses the Natural History Museum of London, the Natural History Museum of the British Museum, the Natural History Museum of the Museum of Modern Art, and the Natural History Museum of the Museum of Science.",
                time: 60
            }
        ]
    }, 
    {
        name: "Bangkok", 
        description: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        adults: 2, 
        // hotels: "", 
        // flight: , 
        social: [
            {
                name: "Friends for Asia",
                description: "Friends for Asia aims to forge meaningful connections with locals and experience culture. Work includes helping communities in need around Bangkok.",
                time: 60
            }
        ], 
        attractions: [
            {
                name: "Grand Palace",
                description: "The Grand Palace is a historic building in the city of Bangkok, Thailand. It is the seat of the government of the Kingdom of Thailand and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Wat Phra Kaew Temple",
                description: "The Wat Phra Kaew Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Wat Arun Temple",
                description: "The Wat Arun Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Wat Pho Temple",
                description: "The Wat Pho Temple is a temple in Bangkok, Thailand. It is the largest temple in the world and is the seat of the Khmer royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Chao Phraya River",
                description: "The Chao Phraya River is a tributary of the Chao Phraya, the longest river in the world. It is the second-longest river in the world after the Amazon, and the second-longest river in the world after the Nile. It is the second-longest river in the world after the Nile.",
                time: 45
            },
            {
                name: "Rattanakosin",
                description: "Rattanakosin is a district in Bangkok, Thailand. It is the capital of the Kingdom of Thailand and the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Bangkok Botanical Garden",
                description: "Bangkok Botanical Garden is a botanical garden in Bangkok, Thailand. It is the largest botanical garden in the world and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            },
            {
                name: "Bangkok National Museum",
                description: "Bangkok National Museum is a museum in Bangkok, Thailand. It is the largest museum in the world and is the seat of the royal family. It is the seat of the King and Queen of Thailand.",
                time: 60
            }
        ]
    }, 
    {
        name: "Dubai", 
        description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        adults: 2, 
        // hotels: "", 
        // flight: , 
        social: , 
        attractions: [
            {
                name: "Burj Khalifa",
                description: "Burj Khalifa, Khalifa also spelled Khalīfah, mixed-use skyscraper in Dubai, United Arab Emirates, that is the world’s tallest building.",
                time: 60
            },
            {
                name: "Dubai Fountain",
                description: "Dubai Fountain is a fountain in Dubai, United Arab Emirates. It is the tallest fountain in the world and is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60
            },
            {
                name: "The Palm",
                description: "The Palm is a resort in Dubai, United Arab Emirates. It is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60
            },
            {
                name: "Atlantis",
                description: "Atlantis is a resort in Dubai, United Arab Emirates. It is the seat of the royal family. It is the seat of the King and Queen of Dubai.",
                time: 60
            },
            {
                name: "Dubai Miracle Garden",
                description: "Dubai Miracle Garden is a garden in Dubai, United Arab Emirates. With over 150 million flowers in full bloom, this is a perfect place for photo-ops.",
                time: 60
            },
            {
                name: "Dubai Museum",
                description: "Dubai Museum is a museum in Dubai, United Arab Emirates. It is the oldest existing building in Dubai opened in 1971 and contains many historical exhibits.",
                time: 60
            }
        ]
    }, 
    {
        name: "Beijing", 
        description: "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Forbidden City",
                description: "The Forbidden City is a palace in Beijing, China. The grand halls and walls display the essence and culmination of traditional Chinese culture.",
                time: 60
            },
            {
                name: "Tiananmen Square",
                description: "Tiananmen Square is a pedestrian plaza in Beijing, China. Nothing happened in 1989 there. ",
                time: 40
            },
            {
                name: "Mao Zedong’s mausoleum",
                description: "Mao Zedong’s mausoleum is a mausoleum in Beijing, China. It is the tomb of Mao Zedong, the founder of the Chinese revolution.",
                time: 30
            },
            {
                name: "The Temple of Heaven",
                description: "The Temple of Heaven is the largest and most representative existing masterpiece of the Ming and Qing dynasties.",
                time: 45
            },
            {
                name: "The Great Wall of China",
                description: "The Great Wall of China is a linear structure of stone and brick that spans the entire length of the country of China. It is the longest wall in the world.",
                time: 60
            },
            {
                name: "Beijing Zoo",
                description: "Beijing Zoo was the first of its kind in China. It contains a diverse collection of animals, a number of exhibition halls and some sites of historical interest.",
                time: 120
            }
        ]
    }, 
    {
        name: "Istanbul", 
        description: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        // flight: , 
        social: , 
        attractions: [
            {
                name: "Hagia Sophia",
                description: "The Hagia Sophia is an enormous architectural marvel in Istanbul, Turkey, that was originally built as a Christian basilica nearly 1,500 years ago. The Hagia Sophia is a long-enduring symbol of the cosmopolitan city.",
                time: 45
            },
            {
                name: "The Blue Mosque",
                description: "The Blue Mosque (Called Sultanahmet Camii in Turkish) is an historical mosque in Istanbul. The mosque is known as the Blue Mosque because of blue tiles surrounding the walls of interior design.",
                time: 30
            },
            {
                name: "The Grand Bazaar",
                description: "The Istanbul Grand Bazaar (Kapalıçarşı) is one of the largest and oldest markets in the world, and the a great place to shop for artisan goods, jewels and clothes.",
                time: 60
            },
            {
                name: "Taksim Square",
                description: "Taksim Square is a vibrant, modern area located in Istanbul's Beyoglu district. Scores of shops, restaurants and bars fill the surrounding streets.",
                time: 60
            },
            {
                name: "Dolmabache Palace",
                description: "Sitting along the Bosphorus near the Kabatas tram stop and the Besiktas ferry port, Dolmabahçe Palace's jaw-dropping beauty and historical importance impresses visitors. Built in the 19th century, the palace was used by the final Ottoman sultans as their primary residence and administrative seat.",
                time: 60
            }
        ]
    }, 
    {
        name: "Tokyo", 
        description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum). ", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        // hotels: 
        // flight: , 
        social: , 
        attractions: 
    }, 
    {
        name: "Seoul", 
        description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        // adults: 2, 
        hotels: [{
            name: "Travelodge Dongdaemun Hotel", 
            star: 4.1, 
            price: 52

        } , 
        {
            name: "Hotel ENTRA Gangam", 
            star: 4.2, 
            price: 127
        }, 
        {
            name: "Grand Hyatt Seoul",
            star: 4.3, 
            price: 380
            
        }, 
        {

        }
        ], , 
        flight: , 
        social: , 
        attractions: [
            {
                name: "North Seoul Tower", 
                description: "Rising almost 500 meters above the city, this communications and observation tower provides dramatic views of the city from its perch on the side of Mount Namsan. A cable car whisks you up the side of the mountain to the base of the tower. From here, you can go up in the tower and visit any one of four observation decks, one of which is a rotating restaurant.", 
                time: 90
            }, 
            {
                name: 'Bukchon Hanok Traditional Villange', 
                description: "For a taste of Korean traditional culture and architecture, a visit to the Bukchon Hanok Village is a fun and educational way to spend an afternoon. This preserved district of several ancient neighborhoods gives you a feel for what it was like to live in Korea 600 years ago. It's right in central Seoul, in the area between the Gyeongbokgung Palace and the Changdeokgung Palace. The neighborhoods of narrow streets feature hanoks or traditional Korean houses. It's a unique place, as it's a historic area, very popular with tourists, but it's also a real neighborhood because the houses are all occupied. ", 
                time: 240
            }, 
            {
                name: 'Lotte World Tower', 
                description: "One of the newest attractions in Seoul is the Lotte World Tower skyscraper. The tallest building in South Korea, it's 500 meters above the ground and currently the fifth-tallest building in the world. The vase-like shape, with gentle curves, is designed to mimic traditional Korean ceramic pieces. There are several indoor and outdoor observation areas (called Seoul Sky) at the top on the 117th-123rd floors. Views are spectacular both during the day and at night, and you can see 360-degrees around the city. On the 118th floor, there's the Sky Deck with the world's highest glass floor. Like magic, the floor changes from opaque to clear, terrifying unsuspecting visitors. Even getting to the top is fun, and the journey is done via super fast, double-decker elevators, with windows on one side and LED screens on the other three and on the ceiling.", 
                time: 90
            }, 
            {
                name: 'Gwanghwamun Gate', 
                description: "The largest and main gate to Seoul's Gyeongbokgung Palace, Gwanghwamun Gate is home to the changing of the guards ceremony (performed since 1469), which happens daily (except Tuesdays) at 10am and 2pm. The gate has undergone many renovations and rebuilding, most recently in 2010, when it was restored to its original location and reconstructed with native materials using traditional tools and building techniques.", 
                time: 30
            }, 
            {
                name: 'Cheonggyecheon', 
                description: "This natural creek that flows through central Seoul was covered over by highways in the post-Korean War economic boom. Seven miles of the creek were uncovered as part of an urban revitalization project and turned into an outdoor recreation area, opening in 2005. There are now seven miles of creek-side hiking, walking and biking trails. It really has changed the CBD of Seoul by bringing an artery of water and green into what was a very urbanized, crowded area. The creek is also home to the spectacular Seoul Lantern Festival, held each November. Ornate, lighted paper lanterns are displayed in and along the creek, and each night, thousands of people line the creek to view and enjoy the floating artwork.", 
                time: 180
            }, 
            {
                name: "Blue House", 
                description: "The Blue House is Korea's version of the White House. It's the official residence of the Korean president, as well as the location of his and related executive offices of state. The Blue House isn't really a single building, it's an entire campus of buildings, all built in the traditional Korean style and all featuring the distinctive blue tile roofs where it gets its name.", 
                time: 150
            }
        ]
    }, 
    {
        name: "Venice", 
        description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "St. Mark's Basilica",
                description: "Certainly Venice's best-known church, and one of the most easily recognized in the world, St. Mark's Basilica (Basilica di San Marco) was originally the Doge's private chapel, decorated with Byzantine art treasures that are part of the booty brought back by Venetian ships after the fall of Constantinople. The gold-backed mosaic pictures above the doorways on the façade only hint at the mosaic artistry inside, where 4,240 square meters of gold mosaics cover the domes and walls. These set a distinctly Byzantine tone to its soaring interior, but you'll find treasures from other periods, including later mosaics designed by Titian and Tintoretto - names you'll encounter all over the city.", 
                time: 200
            }, 
            {
                name: "Piazza San Marco",
                description: "The vast expanse of Venice's largest square is brought together and made to seem almost intimate by the elegant uniformity of its architecture on three sides. But more than its architectural grace, St. Mark's Square (Piazza San Marco) is loved as Venice's living room, the place everybody gathers, strolls, drinks coffee, stops to chat, meets friends and tour guides, or just passes through on the way to work or play. Three sides are framed in arcades, beneath which are fashionable shops and even more fashionable cafés. The open end is bookmarked by the erratic, exotic curves, swirls, mosaics, and lacy stone filigree of St. Mark's Basilica. Above it towers the brick shaft of the campanile. For overviews of this busy piazza, you can go to its top or to the top of the Torre dell'Orologio, where a pair of \"Moors\" strikes the hour.", 
                time: 60
            }, 
            {
                name: "Palazzo Ducale (Doge's Palace) and Bridge of Sighs", 
                description: "Visitors arriving in Venice once stepped ashore under the façade of this extraordinary palace. They couldn't have failed to be impressed, both by its size and the finesse of its architecture. If they were received inside by the Doges, the impression would only strengthen as they entered through the Porta della Carta, a perfect example of Venetian Gothic at its height, and ascended the monumental Scala dei Giganti and the gold-vaulted Scala d'Oro to be received in what many consider to be the palace's most beautiful chamber, Sala del Collegio. Even jaded 21st-century travelers gasp in awe at the palace's grandeur and lavish decoration. You'll see works by all the Venetian greats, including Tintoretto, whose Paradise is the largest oil painting in the world.", 
                time: 120
            }, 
            {
                name: "Canale Grande", 
                description: "Sweeping through the heart of Venice in a giant reverse S curve, the Grand Canal is the principal boulevard through the city, connecting Piazza San Marco, Rialto Bridge, and the arrival points of the rail station and bridge from the mainland. Only four bridges cross its 3.8-kilometer length, but stripped-down gondolas called traghetti shuttle back and forth at several points between bridges. The Grand Canal was the address of choice for anyone who claimed any influence in Venice. Palaces of all the leading families open onto the canal, their showy Venetian Gothic and Early Renaissance facades facing the water, by which visitors arrived.", 
                time: 150
            }, 
            {
                name: "Murano and Burano", 
                description: "A trip to Venice wouldn't be complete without hopping aboard a vaporetto for the ride across the lagoon to Murano, home of Venice's fabled glass workers. They were sent here in the 13th century in hope of decreasing the risk of fire from one of the glass furnaces sweeping through Venice's tightly compacted center. ", 
                time: 240
            }
        ]

        
    }, 
    {
        name: "Hong Kong", 
        description: "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a city and special administrative region of China on the eastern Pearl River Delta in South China. ", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Hong-Kong Skyline", 
                description: "Hong Kong has one of the most impressive and recognizable skylines in the world. The dense collection of skyscrapers, both on the island of Hong Kong and in Kowloon, combined with the surrounding mountains and harbor set this city apart. In the harbor, traditional red-sailed Chinese junk boats and the historic Star Ferry contrast sharply with the backdrop of modern high-rises. At night, the skyline changes character completely as the sky darkens and the city lights fill the scene. Two of the best places in Hong Kong to see the skyline are from the top of Victoria Peak or from the Kowloon waterfront (along the Tsim Sha Tsui Promenade near the clock tower), not far from the Star Ferry dock, where benches line the waterfront and look across to Hong Kong. The latter location is the best place to watch the nightly A Symphony of Lights laser and light show set to music.", 
                time: 120
            }, 
            {
                name: "Victoria Peak", 
                description: "You haven't seen the best of Hong Kong until you've taken in the skyline from Victoria Peak, more commonly known as The Peak. Ride the tram to the top of this scenic viewpoint to see the skyscrapers, bustling city, harbor, and surrounding islands. The tram station is located near the entrance to Hong Kong Park by the Murray building. At the top of the tram are the Peak Tower and Peak Galleria, with shops, restaurants, and an observation deck. Most of The Peak is covered by a large park with lush greenery, nature trails, and more beautiful lookouts with views over the thriving metropolis below. A trail also leads down from The Peak to the city below, following a mix of trails through the forest and sections of road here and there.", 
                time: 200
            }, 
            {
                name: "Tian Tan Buddha Statue", 
                description: "The 34-meter-high \"Big Buddha\" sits above Lantau Island's Po Lin monastery, which was a fairly secluded place until the statue was built in 1993. This is one of the largest Buddha statues of its kind in the world and took 12 years to complete. The size is astounding, both up close and seen from a distance. The setting here is also incredible, surrounded by the green forest and views out over the ocean and islands.", 
                time: 150
            }, 
            {
                name: "Temple Street Night Market", 
                description: "A stroll through the Temple Street Night Market is another one of those all-important things to do while you're in Hong Kong. Located in Kowloon, this is the place to go to taste eclectic foods and to shop for bargains on everything from clothing and trinkets to electronics and household goods. Vendors sell gadgets of every shape and size, as well as jade jewelry and traditional Chinese crafts.", 
                time: 60
            }, 
            {
                name: "Hong Kong Disneyland", 
                description: "Hong Kong Disneyland is located on Lantau Island. Here, you'll find a wonderful world filled with fun and fantasy populated with the cast and characters from Disney movies. The park is divided into seven lands: Adventureland; Fantasyland; Toy Story Land; Tomorrowland; Grizzly Gulch; Mystic Point; and Main Street, U.S.A. Performances happen throughout the day in the various lands and feature everything from parades to musicals, right through to evening fireworks over the castle. Also on offer are a wide array of adventures, ranging from Jungle cruises to a trip to Tarzan's Treehouse, as well as water-based fun at Liki Tiki.", 
                time: 360
            }
        ]
    }, 
    {
        name: "Los Angeles", 
        description: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes. ", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Santa Monica Pier", 
                description: "The focal point of the iconic Santa Monica Beach, Santa Monica Pier is bursting with fun (but crowded) things to do: it includes a Ferris wheel, aquarium, fairground games and cotton candy stands. On weekends when the weather’s warm, the stretch is busy with families, beach bums and the gym bunnies who do their public workouts at the original Muscle Beach, just to the south of the pier. In recent years, the Pier has played host to a number of outdoor film and music events, which tends to bring in a (slightly) trendier clientele to the boardwalk.",
                time: 240
            }, 
            {
                name: "Disneyland", 
                description: "The venerable resort is actually comprised of two main parks: the 66-year-old Disneyland Park and the much newer Disney California Adventure, which opened its doors in 2001. Semantics aside, this themed resort is a winner with tourists and locals alike. You’ll find all your favorite characters here—including the recent arrival of the Star Wars-themed Galaxy’s Edge and the Marvel-themed Avengers Campus—along with a clutch of super fun rides and pricey food and drink. There’s not really a good time to go to avoid the crowds—it’s always busy, especially around Christmas Day—so you might need a bit of patience to appreciate the magic.", 
                time: 960
            }, 
            {
                name: "Universal Studios & Citywalk", 
                description: "Although the rides at Universal Studios Hollywood’s hillside theme park don’t have Disneyland’s old-time charm or the sheer terror inspired by Six Flags Magic Mountain, the resort nonetheless offers some very respectable thrills and spills and an illusion of Hollywood glamour as it brings various blockbusters to life. And there are definitely some real standouts, mostly in the more thrilling lower lot. Jurassic World: The Ride breathes some new life into a dinosaur-filled classic, while the Wizarding World of Harry Potter remains a magical experience.", 
                time: 960
            }, 
            {
                name: "Hollywood Walk of Fame", 
                description: "Yes, you have to fight through massive crowds, suspect superheroes, and never-ending gift shops, tattoo parlors and lingerie stores to actually get to it. But there’s genuinely a lot of old Hollywood history and glamour to discover along the Walk of Fame. The veritable constellation of names immortalized on those famous five-pointed terrazzo and brass stars run from the Walk’s western end at the Hollywood and La Brea Gateway right up the Pantages Theater at Gower, and additionally on Vine from the Capitol Records Building down to Sunset, near where the original movie studios sprang up a century ago. While you’re here you probably owe yourself a pilgrimage to the Dolby Theatre, home of the Academy Awards. Or why not give yourself a break from the commotion and duck inside an actual movie palace or the historic Hollywood Roosevelt.", 
                time: 180
            }, 
            {
                name: "Griffith Observatory", 
                description: "The vista from the Griffith Observatory is stunning, particularly at night when the whole of Los Angeles twinkles below you. Inside this hilltop landmark you’ll find a selection of exhibits, including a Foucault pendulum, Tesla coil and planetarium show. Give yourself plenty of time before the 10pm closing to line up and gaze through the 12-inch refracting telescope on the roof. Otherwise don’t worry: you can look through the far less crowded modern, reflecting telescope on the front lawn. Just a heads up that parking now costs between $8 and $10 per hour—though you can take a DASH bus up there for only 35 cents.", 
                time: 200
            }
        ]
    }, 
    {
        name: "Chicago", 
        description: "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Art insititute of Chicago", 
                description: "The Art Institute of Chicago is a world class museum with hundreds of thousands of artworks. The diverse collection spans thousands of years and includes pieces from a variety of media including painting, prints, photography, sculpture, decorative arts, textiles, architectural drawings and more.", 
                time: 150
            }, 
            {
                name: "Millenium Park"
                description: "Millennium Park is part of the larger Grant Park, located in downtown Chicago bordered by Michigan Avenue to the west, Columbus Drive to the east, Randolph Street to the north, and Monroe Street to the south. Its centerpiece is a 110-ton sculpture name Cloud Gate, which has a polished, mirror-like stainless steel surface that was inspired by liquid mercury. It reflects the surroundings, including buildings, the sky, and the tourists who walk through its central arch. Another top attraction in Millennium Park is Crown Fountain, a fascinating modern interpretation of the ancient gargoyle that gives the appearance of water flowing from the mouths of projected images of Chicago citizens. Other popular things to do here include seeing a performance at the Jay Pritzker Pavilion, an outdoor concert venue, and visiting Lurie Garden, which is open to the public at no cost year-round.", 
                time: 150
            }, 
            {
                name: "Navy Pier", 
                description: "The Navy Pier originally opened in 1916 as an amusement area and shipping facility but is now one of Chicago's most popular tourist attractions. Today, the Navy Pier is made up of 50 acres of gardens, attractions, shops, restaurants, concert venues, and parks. There is a 150-foot Ferris wheel and an historic carousel in Navy Pier Park.", 
                time: 120
            }, 
            {
                name: "Museum of Science and Industry", 
                description: "At the north end of Jackson Park is the Museum of Science and Industry, founded in 1933, and arguably the most impressive museum in Chicago. It is devoted to the application of natural laws in technological and industrial development. The museum is thought to be the first in the U.S. to incorporate the idea of "hands-on" exhibits. Visitors are encouraged to interact with hundreds of exhibits. The MSI features permanent and changing exhibits, as well as an OMNIMAX theater.", 
                time: 180
            }, 
            {
                name: "Buckingham Fountain", 
                description: "Built in 1927 as a donation from the family, the Clarence Buckingham Memorial Fountain is one of the largest in the world. Designed in the period's iconic Art Deco style, the central fountain is surrounded by four seahorses that represent Lake Michigan's four bordering states. From 8am to 11pm, the fountain bursts to life hourly, shooting 15,000 gallons of water through nearly 200 nozzles each minute to create an impressive display. After dusk, the water show is accompanied by lights, a must-see if you are in the neighborhood in the evening. The fountain is the central focal point of Grant Park, Chicago's expansive public space that contains many attractions and smaller parks like Millennium Park, comparable to Central Park, one of the top attractions in New York City.",
                time: 60
            }
        ]
    }, 
    {
        name: "Rio de Janerio",
        description: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Cristo Redentor",
                description: "The giant statue of Christ overlooking the city from the 709-meter summit of Corcovado is almost as widely recognized a symbol of Rio as the distinctive shape of Sugarloaf. The world-famous landmark was erected between 1922 and 1931, financed almost entirely by contributions from Brazilian Catholics. The Art Deco statue was created by Polish-French sculptor Paul Landowski and built by the Brazilian engineer Heitor da Silva Costa, in collaboration with the French engineer Albert Caquot. Made of reinforced concrete and soapstone, the figure itself is 30 meters tall with arms stretching 28 meters; it weighs 635 metric tons. Inside its eight-meter-high base is a chapel, where it's not uncommon to find weddings and baptisms taking place.", 
                time: 120
            }, 
            {
                name: "Sugarloaf", 
                description: "Rio de Janeiro's best-known landmark is the rock peak of Sugarloaf, towering 394 meters above the harbor. It sits on a point of land that projects out into the bay and wraps around its harbor, and is connected to the city by a low strip of land. You can take a cable car from Praça General Tibúrcio to the top of the Morro da Urca, a lower peak from which a second cableway runs to the summit of the Sugarloaf. From here, you can see the entire mountainous coast that rings the bay and its islands. Below, the 100-meter Praia da Urca beach is near the location of Rio's original nucleus, between the Morro Cara de Cão and the Sugarloaf. On Cara de Cão are three forts of which the 16th-century, star-shaped Fort São João is open to the public.", 
                time: 120
            }, 
            {
                name: "Copacabana", 
                description: "Few cities are blessed with a beautiful sand beach at its heart, let alone one that stretches four kilometers along one entire side of its downtown. A few steps from its golden sands are Avenida Atlântica, Avenida Nossa Senhora de Copacabana, and the neighboring smaller streets where you'll find appealing century-old buildings, fine hotels, and popular restaurants and cafés.", 
                time: 240
            }, 
            {
                name: "Tijuca National Park", 
                description: "Tijuca National Park protects the Tijuca Forest and several viewpoints overlooking the city, and surrounds Cristo Redentor, the giant-sized statue of Christ on Corcovado. To explore the park, you can leave the train up to Corcovado at a midpoint and follow the road through the forest. The 3,300-hectare Tijuca Forest, one of the world's largest forests within a city, was planted in the late 1850s on land that had been destroyed by coffee plantations, to safeguard the springs that supplied Rio de Janeiro's water. Most of the trees are native species and provide habitat for Capuchin monkeys, quatis (Brazilian raccoon), colorful toucans, hawks, brilliant blue butterflies, and many other species of wildlife, which you may spot while exploring its trails and roads. Near the station of the Corcovado railway is Largo do Boticário, one of Rio's most picturesque squares, surrounded by colonial-style houses. From the pagoda-style pavilion at Morro da Vista Chinesa, 380 meters above the shore, are views of the Municipal Park, the Botanic Garden, and a long stretch of the south coast. There are more views from Mirante Dona Marta, a viewpoint on a spur of rock above Botafogo Bay. Several waterfalls drop from the forest springs, including the 30-meter Cascatinha Taunay.", 
                time: 240
            }, 
            {
                name: "Maracanã", 
                description: "A must-see for football (soccer) fans when a game is scheduled, Brazil's largest stadium was home to the opening and closing ceremonies of the 2016 Summer Olympic Games. It was completely renovated for the FIFA World Cup 2014 and holds more than 78,000 fans. The stadium is used for matches between Rio's major football clubs, the Flamengo, Botafogo, Fluminense, and Vasco da Gama, as well as for concerts. The brief tour would be of interest to avid fans, but others should give it a miss.", 
                time: 240
            }
        ] 
    }, 
    {
        name: "Cairo", 
        description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions:[
            {
                name: "Pyramids of Giza", 
                description: "he Pyramid of Cheops (also called the Great Pyramid or Pyramid of Khufu) is the largest pyramid of the Giza group, and its interior of narrow passages can be explored, although there isn't much to see, except a plain tomb chamber with an empty sarcophagus. Directly behind the Great Pyramid is the Solar Boat Museum, which displays one of the ceremonial solar barques unearthed in the area that has been painstakingly restored to its original glory. Farther south on the plateau is the Pyramid of Chephren (also known as the Pyramid of Khefre), with an internal tunnel area, which can be entered, and the smaller Pyramid of Mycerinus (Pyramid of Menkaure). Guarding these mortuary temples is the lion-bodied and pharaoh-faced Sphinx; one of the ancient world's iconic monuments. The Giza Plateau is set to welcome another attraction when the Grand Egyptian Museum (GEM) is finally finished. When opened, it will be the biggest museum in the world devoted to exhibiting the antiquities of a single civilization, displaying a wealth of Ancient Egypt's artifacts, many of which have never been seen by the public before.", 
                time: 600 
            }, 
            {
                name: "Egyptian Museum", 
                description: "The absolutely staggering collection of antiquities displayed in Cairo's Egyptian Museum makes it one of the world's great museums. You would need a lifetime to properly see everything on show. The museum was founded in 1857 by French Egyptologist August Mariette and moved to its current home – in the distinctive powder-pink mansion in Downtown Cairo – in 1897.", 
                time: 300 
            }, 
            {
                name: "Al-Azhar Mosque", 
                description: "Al-Azhar Mosque is the finest building of Cairo's Fatimid era and one of the city's earliest surviving mosques, completed in AD 972. It's also one of the world's oldest universities – Caliph El-Aziz bestowed it with the status of university in AD 988 (the other university vying for "oldest" status is in Fes) and today, Al-Azhar University is still the leading theological center of the Islamic world.", 
                time: 300
            }, 
            {
                name: "Saqqara & Dahshur", 
                description: "The vast necropolis of Saqqara and the nearby site of Dahshur are home to the "other pyramids," and a day trip out here is just as rewarding as a trip to Giza's pyramids. The sites are roughly 30 kilometers south of Cairo. The Step Pyramid is Saqqara's most popular tourist attraction, but the entire area is littered with gorgeously painted tombs, which are well worth spending a few hours exploring. Saqqara is so large, and its history as a burial site so vast, that excavations here continue to unearth finds that make headline grabbing news worldwide.", 
                time: 480
            }, 
            {
                name: "Al-Muizz li-Din Allah Street", 
                description: "The northern section of Al-Muizz li-Din Allah Street is rimmed by fine Mamluk buildings, which have been painstakingly restored to their former glory.", 
                time: 240
            }
        ] 
    }, 
    {
        name: "San Francisco", 
        description: "San Francisco, officially the City and County of San Francisco, is a commercial and cultural center in the northern region of the U.S. state of California.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name:"Golden Gate Bridge", 
                description: "The Golden Gate Bridge is a California icon gracing San Francisco Bay. It is the most photographed site in the city, with the orange structure backed by blue water, or in many cases, peaking through low lying cloud. At night, the flood-lit structure is equally striking. Connecting San Francisco with Marin County and other districts further north, the Golden Gate Bridge was, at one time, designated the greatest man-made sight in the United States by the U.S. Travel Service. Opened on May 28th, 1937, the bridge took four years to build and at the time of its completion, was the longest suspension bridge in the world, measuring approximately two miles in length.", 
                time: 120
            }, 
            {
                name: "Alcatraz Island", 
                description: "The historic and notorious Alcatraz penitentiary, located on Alcatraz Island in San Francisco Bay, is one of America's most infamous prisons. It operated for almost thirty years, closing in 1963 and re-opening as a tourist attraction in 1973. Some of America's most well-known criminals were inmates here, including Al Capone and the "Birdman," who would later form the basis for the fictional movie The Birdman of Alcatraz.", 
                time: 180
            }, 
            {
                name: "Fisherman's Wharf", 
                description: "Fisherman's Wharf is one of San Francisco's most popular tourist areas. Some of the main attractions in the area are Madame Tussauds Wax Museum, Musée Mécanique, Ripley's Believe it or Not!, and Ghirardelli Square. Restored 19th- and 20th-century ships line the waterfront at the Hyde Street Pier, which is now the San Francisco Maritime National Historic Park.", 
                time: 240
            }, 
            {
                name: "Cable Cars", 
                description: "Cable Cars were introduced in 1873 to help locals contend with the many hills the city is built on. Today, the few remaining cable cars offer tourists a great way to explore the city in historic fashion. Since 1964, these tram-like vehicles have had the unique distinction of being the only public transport system to be declared a historic monument.", 
                time: 60
            }, 
            {
                name: "Chinatown", 
                description: "Now with its temples, theaters, workshops, small businesses, stores, antique and souvenir shops, teahouses, and traditional pharmacies, visiting Chinatown has become one of the top things to do in San Francisco.", 
                time: 180
            }
        ]
    }, 
    {
        name: "Rome", 
        description: "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. It is often referred to as the City of Seven Hills due to its geographic location, and also as the 'Eternal City'. Rome is generally considered to be the 'cradle of Western civilisation and Christian culture', and the centre of the Catholic Church.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name:"Colosseum", 
                description: "The number 1 attraction of Rome is the Colosseum; the large amphitheatre that housed 65,000 spectators in Roman days. Gladiators battled each other as well as wild animals in the Colosseum's arena. In the giant ‘ruins’ of the Colosseum, you can visit the stands, the arena and the underground spaces of the largest Roman amphitheatre.", 
                time: 160
            }, 
            {
                name: "Pantheon", 
                description: "One of the best maintained buildings from Roman times is the Pantheon. What function the building had in those days is still not clear, but the Pantheon was given to the pope by emperor Hadrian in 608. The current church has several unique funerary monuments (painter Raphael and a few Italian kings), as well as a remarkably large and open dome (oculus).", 
                time: 150
            }, 
            {
                name: "Trevi Fountain of Rome", 
                description: "The most famous fountain in Rome and perhaps even the world must be the ‘Fontana di Trevi’, or Trevi Fountain. This baroque fountain, located on the Piazza di Trevi, was built in the 18th century. The landmark and monument displays the god of the sea, Neptune on his chariot. No visit or Rome sightseeing is complete without tossing a coin in the Trevi Fountain, as this means the person throwing the coin will 'one day return to Rome Italy'.", 
                time: 120
            }, 
            {
                name: "St. Peter's Bascilica", 
                description: "The St. Peter’s Basilica, or ‘Basilica di San Pietro in Vaticano’ is the spiritual centre of the Catholic Church and residence of the pope. The enormous basilica, located in the independent state of Vatican City and next to St Peter's Square, was built on what is believed to be the grave of Peter. St. Peter’s Basilica contains masterpieces such as Bernini's baldachin and ‘La Pieta’ by Michelangelo, but you can also visit the crypts with 148 papal tombs. ", 
                time: 120
            }, 
            {
                name: "Vatican Museums and Sistine Chapels", 
                description: "Over the centuries, the popes amassed an enormous art collection varying from Roman objects and religious relics to countless paintings. In the Vatican Museums you can visit 54 richly decorated rooms and view these art treasures of the Catholic church. The highlight for many visitors is likely to be the famous Sistine Chapel. The chapel with lovely frescos by Michelangelo that is mostly known as the site of conclave when a new pope is elected. Because it gets so many visitors, this attraction has by far the longest lines.", 
                time: 120
            }
        ]
    }, 
    {
        name: "Mexico City", 
        description: "Mexico City is the densely populated, high-altitude capital of Mexico. It's known for its Templo Mayor (a 13th-century Aztec temple), the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional, which houses historic murals by Diego Rivera. All of these are situated in and around the Plaza de la Constitución, the massive main square also known as the Zócalo.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Zócalo", 
                description: "The beating heart of Mexico City is Zócalo - the Plaza de la Constitución (Constitution Square) - where the country's first constitution was proclaimed in 1813. Measuring some 240 meters in each direction, it's one of the world's largest squares and was laid out almost immediately after the conquest of the former Aztec city of Tenochtitlán on which it stands.",
                time: 150
            }, 
            {
                name: "Templo Mayor and the Great Pyramid of Tenochtitlán", 
                description: "Despite the widespread destruction after the defeat of the Aztecs, a number of their important historic sites have been unearthed and put on display in recent years. The most important site is Templo Mayor, home to the remains of the Great Temple of Tenochtitlán, including the first relic discovered in 1978, a finely sculpted round disc more than three meters in diameter and weighing eight-and-a-half tons. Further excavations - including the summit platform of an earlier pyramid with well-preserved temple walls, along with the skulls of sacrificial victims - indicate the temple site had been built over by the Aztecs and their predecessors 11 times.  A highlight of a visit is a walkway past the precinct of the aristocratic "winged warriors," where remains of residences decorated with multi-colored reliefs have been unearthed, along with evidence of the original paintwork.",
                time: 270
            }, 
            {
                name: "The Palace of Fine Arts", 
                description: "One of Mexico City's most important cultural landmarks, the Palace of Fine Arts (Palacio de Bellas Artes) is an architectural gem. Towering over the adjacent park, this massive marble building - designed by Italian architect Adamo Boari with Art Nouveau and Art Deco influences - was completed in 1934 and is so heavy that it has sunk more than four meters, despite attempts to lighten it by removing part of its huge dome. The palace serves as an opera house and concert hall hosting a variety of traditional and international dance and operatic productions. But many visitors also come here to view the impressive murals adorning its interior by famous artists such as Diego Rivera, David Alfaro Siqueiros, and José Clemente. On the 4th floor is the Museo Nacional de Arquitectura with rotating exhibits on contemporary architecture.", 
                time: 180
            }, 
            {
                name: "Coyoacán & the Frida Kahlo Museum", 
                description: "Laced with atmospheric cobblestone streets, Coyoacán is one of Mexico City's oldest neighborhoods. Take time to stroll around the maze of laneways here and explore the hidden plazas, colonial-style mansions, and art-filled old churches like San Juan Bautista. You can also sample exotic fruits and vegetables at the markets. One of the top tourist attractions in the town is the Frida Kahlo Museum in La Casa Azul (The Blue House), where the famous Mexican artist was born and where she frequently returned throughout her life. Here, you can view some of her most important paintings, as well as works by her famous husband, the mural artist Diego Rivera, and personal items from the couple's life.", 
                time: 180
            }, 
            {
                name: "The House of Tiles", 
                description: "Opposite the picturesque Church of San Francisco is the spectacular House of Tiles (Casa de los Azulejos). It was originally built in 1596 and boasts a façade decorated by the Conde del Valle de Orizaba 150 years later, with exquisite blue and white tiles from Puebla. It became even more famous after artist José Clemente Orozco painted murals on the walls of the staircase in 1925. The House of Tiles is now a restaurant and an evocative venue to dine al fresco in the building's spectacular courtyard, surrounded by what is one very large work of art.", 
                time: 100
            }
        ]
    }, 
    {
        name: "Manila", 
        description: "Manila, the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers. Intramuros, a walled city in colonial times, is the heart of Old Manila. It’s home to the baroque 16th-century San Agustin Church as well as Fort Santiago, a storied citadel and former military prison.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        price: , 
        adults: 2, 
        hotels: "", 
        flight: , 
        social: , 
        attractions: [
            {
                name: "Rizal Park", 
                description: "One of your first stops in Manila should be Rizal Park. Sometimes referred to as Luneta Park, this is a peaceful and manicured outdoor garden located in the heart of the city. Throughout the park. you will see statues and monuments paying tribute to Manila's history. Of note is the century-old Monument of Rizal, which houses the remains of one of the Philippines' most celebrated heroes, Dr. Jose Rizal. Be sure to stroll through the park to take in the local flora and fauna. Keep your eyes open for the Narra tree, the national tree of the Philippines, and the small lake with the artistically raised archipelago structure in the middle.", 
                time: 60
            }, 
            {
                name: "Manila Ocean Park", 
                description: "The Manila Ocean Park is one of the most unique adventures in the city and one of the top things to do for families visiting the city. Get interactive with marine life with the Sharks and Rays Encounter, Trails to Antarctica, or the fish spa where fish clean your feet in a small pool of water. The park easily fills several hours depending on how many encounters you try. In addition to the state-of-the-art aquatic facility, you will see exhibits of birds and other animals.", 
                time: 300
            }, 
            {
                name: "Fort Santiago", 
                description: "The site of Fort Santiago is an impressive stop if you are visiting the city and it is one of the most important historical sites in Manila. The 16th-century fortress was key in protecting the Intramuros, which is the oldest district in Manila, known historically as the Walled City. You can explore the grounds at a leisurely pace. Be sure to take note of bullet markings that are still visible in the fortress walls and stop by the visitor center for more detailed information about the fort.", 
                time: 240
            }, 
            {
                name: "San Agustin Church and Museum", 
                description: "As a designated UNESCO World Heritage site, the San Agustin Church is a national treasure in the Philippines. The Catholic Church has a unique history that is reflected in the details of the building. If you look closely, you will see both Chinese and Spanish influences in the design. The church has been rebuilt several times after battles and natural disasters. Pay close attention to the carvings on the large wooden doors that open to the chapel. If you have an interest in history or architecture, it would be worth your time to hire a local guide who can take you on a walking tour of the area and describe intricate details of the church that you may not notice on your own.", 
                time: 180
            }, 
            {
                name:"Natural Museum of the Phillippines", 
                description: "For a true exploration into the culture of the country, the National Museum of the Philippines is one of the best places to visit. The museum has four main complexes and extensive collections and artifacts relating to art, archaeology, anthropology, zoology, biology, and natural history. The museum galleries help offer a sense of place, telling the cultural story beyond what you will find on your own visiting the city's many historical attractions.", 
                time: 180
            }
        ] 
    }, 
    {
        name: "Pretoria", 
        description: "The Pretoria National Botanic Garden, in the city's eastern suburbs, is a peaceful oasis close to the city. The 76-hectare gardens spotlight South African species, with more than half the country's tree species, as well as many flowering plants, cycads, aloes, and other impressive collections. A quartzite ridge slices the park into two sections, with vegetation in the warmer north-facing half contrasting with that in the colder south-facing section.", 
        startDate: "2022-07-05", 
        endDate: "2022-07-13", 
        // price: , 
        adults: 2, 
        // hotels: "", 
        // flight: , 
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
                time: 240
            }, 
            {
                name: "Voortrekker Monument", 
                description: "High on a hilltop south of the city center, the Voortrekker Monument is a South African National Heritage site and one of the country's most visited historic monuments. It was built in 1949 to commemorate the Voortrekkers, the Boers who pushed northward into unknown territory in the mid 19th-century. This 40-meter-high square granite structure is a prominent landmark in the city with steps leading up to the Hall of Heroes, where 27 marble reliefs depict the Great Trek of 1838. Surrounding the monument is a wall depicting ox-wagons representing the trek wagons. On 16 December each year, a shaft of sunlight shines through an opening in the dome and illuminates a cenotaph below, which reads. "Ons vir jou, Suid-Afrika" ("We are for you, South Africa"). Occasionally, the hall hosts classical music performances, which highlight its excellent acoustics. Museum exhibits depict snapshots of life during this important period. After browsing the interior, visitors can admire panoramic views of Pretoria from the roof or enjoy a meal at the restaurant.", 
                time: 120
            }, 
            {
                name: "Ann van Dyk Cheetah Centre", 
                description: "At the Ann van Dyk Cheetah Centre, about a 45-minute drive from Pretoria, animal lovers can get up close and personal with some magnificent African creatures. This non-profit center was established in 1971 as a cheetah breeding project and has since successfully bred African wild dogs, Cape vultures, and brown hyenas among other animals. The center was also the first breeder of the rare king cheetah. Visitors can choose from a variety of educational tours, including a three-hour guided tour and touch experience, where guests accompany keepers on the feeding rounds and enjoy a petting experience with these graceful animals. This is a fantastic opportunity for photographers to capture close-up images, and the cost helps fund conservation projects.", 
                time: 300
            }, 
            {
                name: "Union Buildings", 
                description: "Set in beautiful gardens, the Union Buildings command the highest point of the city on Meintjieskop Hill near historic Church Square, site of the city's first settlement. Designed by Sir Herbert Baker in 1913, this impressive range of sandstone buildings mixes Italian Renaissance, English Renaissance, and Cape Dutch styles. It's the seat of government and also houses the offices of the president and the state archives. In the gardens, which slope down in terraces to Church Street, are the Delville Wood Memorial, commemorating the South African soldiers who fell in the First World War; statues of the South African prime ministers Louis Botha, J. B. M. Hertzog, and J. C. Smuts; as well as a nine-meter-tall statue of Nelson Mandela. Visitors come here to stroll among the gardens, ogle the architecture, and admire the impressive city views. The site also holds a special place in the hearts of many South Africans after former President Nelson Mandela's inauguration took place here in 1994.", 
                time: 120
            }, 
            {
                name: "Moreleta Kloof Nature Reserve", 
                description: "A haven for hikers and nature lovers, Moreleta Kloof Nature Reserve spans 100 hectares in the foothills of Moreleta Kloof near the city center. In the 19th century, the reserve was a dairy farm, and one of the original buildings has been converted to a restaurant where visitors can dine on a beautiful deck, often with a parade of animals in view. Springbok, impala, bushbuck, zebra, and ostrich are among the wildlife found in the park, as well as an abundance of birds. A tributary flows through the reserve providing water for the animals, and hiking trails range in length from 1.5 kilometers to more than three kilometers. Other lovely green spaces close to the city center include Faerie Glen Nature Reserve, part of the Moreleta Spruit Nature Trail, which follows a winding course along the banks of a stream through ever-changing scenery, as well as Groenkloof Nature Reserve with hiking, horseback riding, and 4WD trails. Birders will enjoy the Austin Roberts Bird Sanctuary, named after the South African ornithologist who wrote a popular handbook on the birds of South Africa. Bird hides line the shores of the reservoir, and more than 100 indigenous species make their home here.", 
                time: 480
            }
        ]
    }, 
];

module.exports = AllTrips;
