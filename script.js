const locationData = [
    {
        name: "Paris",
        country: "France",
        continent: "Europe",
        coordinates: [48.8566, 2.3522],
        type: "city",
        keywords: ["Eiffel Tower", "Louvre", "Seine", "baguette", "fashion"],
        hints: [
            "City of Light",
            "Known for its cuisine and art museums",
            "Home to a famous iron tower"
        ]
    },
    {
        name: "Great Wall of China",
        country: "China",
        continent: "Asia",
        coordinates: [40.4319, 116.5704],
        type: "landmark",
        keywords: ["ancient", "fortification", "Ming Dynasty", "stone", "brick"],
        hints: [
            "One of the Seven Wonders of the World",
            "Visible from space",
            "Built to protect against invasions"
        ]
    },
    {
        name: "New York City",
        country: "United States",
        continent: "North America",
        coordinates: [40.7128, -74.0060],
        type: "city",
        keywords: ["Statue of Liberty", "Broadway", "Central Park", "skyscrapers", "Times Square"],
        hints: [
            "The Big Apple",
            "City that never sleeps",
            "Home to the United Nations Headquarters"
        ]
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        continent: "South America",
        coordinates: [-13.1631, -72.5450],
        type: "landmark",
        keywords: ["Inca", "ruins", "Andes", "ancient city", "llama"],
        hints: [
            "An ancient Incan city",
            "Located high in the Andes mountains",
            "Discovered in 1911 by Hiram Bingham"
        ]
    },
    {
        name: "Sydney",
        country: "Australia",
        continent: "Oceania",
        coordinates: [-33.8688, 151.2093],
        type: "city",
        keywords: ["Opera House", "Harbour Bridge", "beaches", "koala", "kangaroo"],
        hints: [
            "Largest city in Australia",
            "Known for its iconic opera house",
            "Hosts the largest natural harbor in the world"
        ]
    },
    {
        name: "Mount Kilimanjaro",
        country: "Tanzania",
        continent: "Africa",
        coordinates: [-3.0674, 37.3556],
        type: "natural wonder",
        keywords: ["volcano", "snow-capped", "hiking", "savanna", "Africa's highest peak"],
        hints: [
            "The highest mountain in Africa",
            "A dormant volcano with three volcanic cones",
            "Located in Tanzania, near the border with Kenya"
        ]
    },
    {
        name: "Venice",
        country: "Italy",
        continent: "Europe",
        coordinates: [45.4408, 12.3155],
        type: "city",
        keywords: ["canals", "gondolas", "St. Mark's Basilica", "bridges", "masks"],
        hints: [
            "City of Canals",
            "Built on over 100 small islands",
            "Famous for its annual carnival"
        ]
    },
    {
        name: "Great Barrier Reef",
        country: "Australia",
        continent: "Oceania",
        coordinates: [-18.2871, 147.6992],
        type: "natural wonder",
        keywords: ["coral", "marine life", "Queensland", "diving", "ocean"],
        hints: [
            "The world's largest coral reef system",
            "Visible from space",
            "Home to diverse marine life"
        ]
    },
    {
        name: "Cairo",
        country: "Egypt",
        continent: "Africa",
        coordinates: [30.0444, 31.2357],
        type: "city",
        keywords: ["pyramids", "Nile", "Sphinx", "pharaohs", "bazaars"],
        hints: [
            "Capital of Egypt",
            "Home to ancient pyramids",
            "Located on the banks of the Nile River"
        ]
    },
    {
        name: "Taj Mahal",
        country: "India",
        continent: "Asia",
        coordinates: [27.1751, 78.0421],
        type: "landmark",
        keywords: ["marble", "mausoleum", "Agra", "Mughal", "love story"],
        hints: [
            "A white marble mausoleum",
            "Built by Emperor Shah Jahan",
            "Symbol of eternal love"
        ]
    },
    {
        name: "Rio de Janeiro",
        country: "Brazil",
        continent: "South America",
        coordinates: [-22.9068, -43.1729],
        type: "city",
        keywords: ["Christ the Redeemer", "Copacabana", "samba", "Carnival", "Sugarloaf Mountain"],
        hints: [
            "Home to the famous Copacabana beach",
            "Hosts the world's largest carnival",
            "Has a giant statue of Jesus on a mountain"
        ]
    },
    {
        name: "Grand Canyon",
        country: "United States",
        continent: "North America",
        coordinates: [36.0544, -112.1401],
        type: "natural wonder",
        keywords: ["Colorado River", "Arizona", "red rock", "geology", "hiking"],
        hints: [
            "A deep gorge carved by a river",
            "Located in the southwestern United States",
            "Known for its colorful landscape"
        ]
    },
    {
        name: "Rome",
        country: "Italy",
        continent: "Europe",
        coordinates: [41.9028, 12.4964],
        type: "city",
        keywords: ["Colosseum", "Vatican", "pizza", "ancient ruins", "Trevi Fountain"],
        hints: [
            "The Eternal City",
            "Capital of Italy",
            "Home to the smallest country in the world"
        ]
    },
    {
        name: "Mount Everest",
        country: "Nepal/China",
        continent: "Asia",
        coordinates: [27.9881, 86.9250],
        type: "natural wonder",
        keywords: ["Himalayas", "summit", "climbing", "altitude", "snow"],
        hints: [
            "The highest point on Earth",
            "Located in the Mahalangur Himal sub-range",
            "First summited in 1953"
        ]
    },
    {
        name: "London",
        country: "United Kingdom",
        continent: "Europe",
        coordinates: [51.5074, -0.1278],
        type: "city",
        keywords: ["Big Ben", "Tower Bridge", "Thames", "red buses", "royal family"],
        hints: [
            "Capital of the United Kingdom",
            "Home to the British monarchy",
            "Famous for its iconic clock tower"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Amazon Rainforest",
        country: "Brazil (and others)",
        continent: "South America",
        coordinates: [-3.4653, -62.2159],
        type: "natural wonder",
        keywords: ["biodiversity", "river", "indigenous tribes", "deforestation", "wildlife"],
        hints: [
            "The world's largest tropical rainforest",
            "Often called the 'Lungs of the Earth'",
            "Home to millions of species of plants and animals"
        ]
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        continent: "Asia",
        coordinates: [25.2048, 55.2708],
        type: "city",
        keywords: ["Burj Khalifa", "luxury", "desert", "artificial islands", "shopping"],
        hints: [
            "Home to the world's tallest building",
            "Known for luxury shopping and ultramodern architecture",
            "A city that rose from the desert"
        ]
    },
    {
        name: "Angkor Wat",
        country: "Cambodia",
        continent: "Asia",
        coordinates: [13.4125, 103.8670],
        type: "landmark",
        keywords: ["temple complex", "Khmer Empire", "Hinduism", "Buddhism", "jungle"],
        hints: [
            "Largest religious monument in the world",
            "Originally constructed as a Hindu temple",
            "Appeared on the Cambodian flag"
        ]
    },
    {
        name: "Tokyo",
        country: "Japan",
        continent: "Asia",
        coordinates: [35.6762, 139.6503],
        type: "city",
        keywords: ["sushi", "anime", "Shibuya", "technology", "cherry blossom"],
        hints: [
            "The most populous metropolitan area in the world",
            "Capital of Japan",
            "Known for its unique blend of traditional and modern culture"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        keywords: ["white buildings", "blue domes", "volcano", "sunset", "Mediterranean"],
        hints: [
            "A picturesque Greek island in the Aegean Sea",
            "Known for its stunning sunsets and white-washed buildings",
            "Built on the rim of a submerged volcano"
        ]
    },
    {
        name: "Niagara Falls",
        country: "Canada/USA",
        continent: "North America",
        coordinates: [43.0962, -79.0377],
        type: "natural wonder",
        keywords: ["waterfall", "mist", "boat tours", "Horseshoe Falls", "tourism"],
        hints: [
            "A famous waterfall on the border of Canada and the USA",
            "Consists of three waterfalls: Horseshoe Falls, American Falls, and Bridal Veil Falls",
            "Known for its powerful flow and boat tours that take visitors close to the falls"
        ]
    },
    {
        name: "Sahara Desert",
        country: "Multiple (Northern Africa)",
        continent: "Africa",
        coordinates: [23.4162, 25.6628],
        type: "natural wonder",
        keywords: ["sand dunes", "camel treks", "oasis", "Tuareg", "extreme heat"],
        hints: [
            "The world's largest hot desert",
            "Covers much of North Africa",
            "Known for its vast sand dunes and nomadic cultures"
        ]
    },
    {
        name: "Acropolis",
        country: "Greece",
        continent: "Europe",
        coordinates: [37.9715, 23.7267],
        type: "landmark",
        keywords: ["Parthenon", "ancient Greece", "Athens", "ruins", "democracy"],
        hints: [
            "An ancient citadel located on a rocky outcrop above Athens",
            "Home to several significant ancient Greek buildings, including the Parthenon",
            "Symbol of the classical spirit and civilization of ancient Greece"
        ]
    },
    {
        name: "Yellowstone National Park",
        country: "United States",
        continent: "North America",
        coordinates: [44.4280, -110.5885],
        type: "natural wonder",
        keywords: ["geysers", "Old Faithful", "wildlife", "hot springs", "supervolcano"],
        hints: [
            "The world's first national park",
            "Known for its geothermal features, including geysers and hot springs",
            "Home to diverse wildlife including bison, bears, and wolves"
        ]
    },
    {
        name: "Bali",
        country: "Indonesia",
        continent: "Asia",
        coordinates: [-8.3405, 115.0920],
        type: "island",
        keywords: ["beaches", "temples", "rice terraces", "yoga", "surfing"],
        hints: [
            "An Indonesian island known for its forested volcanic mountains",
            "Famous for its yoga and meditation retreats",
            "Home to iconic rice paddies, beaches and coral reefs"
        ]
    },
    {
        name: "Stonehenge",
        country: "United Kingdom",
        continent: "Europe",
        coordinates: [51.1789, -1.8262],
        type: "landmark",
        keywords: ["prehistoric", "monument", "standing stones", "druids", "solstice"],
        hints: [
            "A prehistoric monument in Wiltshire, England",
            "Consists of a ring of standing stones, each around 13 feet high",
            "Believed to be constructed from 3000 BC to 2000 BC"
        ]
    },
    {
        name: "Mount Fuji",
        country: "Japan",
        continent: "Asia",
        coordinates: [35.3606, 138.7278],
        type: "natural wonder",
        keywords: ["volcano", "snow-capped", "sacred", "climbing", "Shinto"],
        hints: [
            "Japan's tallest peak",
            "An active volcano that last erupted in 1707",
            "One of Japan's \"Three Holy Mountains\""
        ]
    },
    {
        name: "Barcelona",
        country: "Spain",
        continent: "Europe",
        coordinates: [41.3851, 2.1734],
        type: "city",
        keywords: ["Gaudi", "Sagrada Familia", "Las Ramblas", "tapas", "Mediterranean"],
        hints: [
            "Capital city of Catalonia in Spain",
            "Known for its art and architecture",
            "Home to many of Antoni Gaudí's unique works"
        ]
    },
    {
        name: "Victoria Falls",
        country: "Zimbabwe/Zambia",
        continent: "Africa",
        coordinates: [-17.9243, 25.8572],
        type: "natural wonder",
        keywords: ["waterfall", "Zambezi River", "mist", "rainbow", "Mosi-oa-Tunya"],
        hints: [
            "One of the world's largest waterfalls",
            "Known locally as 'The Smoke that Thunders'",
            "Forms the border between two African countries"
        ]
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        continent: "South America",
        coordinates: [-13.1631, -72.5450],
        type: "landmark",
        keywords: ["Inca", "ruins", "Andes", "ancient city", "llama"],
        hints: [
            "An ancient Incan city",
            "Located high in the Andes mountains",
            "Discovered in 1911 by Hiram Bingham"
        ]
    },
    {
        name: "Great Barrier Reef",
        country: "Australia",
        continent: "Oceania",
        coordinates: [-18.2871, 147.6992],
        type: "natural wonder",
        keywords: ["coral", "marine life", "Queensland", "diving", "ocean"],
        hints: [
            "The world's largest coral reef system",
            "Visible from space",
            "Home to diverse marine life"
        ]
    },
    {
        name: "Istanbul",
        country: "Turkey",
        continent: "Europe/Asia",
        coordinates: [41.0082, 28.9784],
        type: "city",
        keywords: ["Hagia Sophia", "Bosphorus", "Grand Bazaar", "Ottoman", "East meets West"],
        hints: [
            "The only city in the world that spans two continents",
            "Former capital of the Byzantine and Ottoman Empires",
            "Home to the iconic Hagia Sophia"
        ]
    },
    {
        name: "Iguazu Falls",
        country: "Argentina/Brazil",
        continent: "South America",
        coordinates: [-25.6953, -54.4367],
        type: "natural wonder",
        keywords: ["waterfall", "rainforest", "mist", "Devil's Throat", "national park"],
        hints: [
            "A system of 275 waterfalls on the border of Argentina and Brazil",
            "Name means 'big water' in native Guarani language",
            "Taller than Niagara Falls and wider than Victoria Falls"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Maldives",
        country: "Maldives",
        continent: "Asia",
        coordinates: [3.2028, 73.2207],
        type: "country",
        keywords: ["islands", "beaches", "resorts", "snorkeling", "overwater bungalows"],
        hints: [
            "An archipelago of 26 atolls in the Indian Ocean",
            "Known for its blue lagoons and extensive reefs",
            "The world's lowest country, with an average ground level of 1.5 meters"
        ]
    },
    {
        name: "Cusco",
        country: "Peru",
        continent: "South America",
        coordinates: [-13.5320, -71.9675],
        type: "city",
        keywords: ["Inca", "colonial architecture", "Andes", "Plaza de Armas", "Sacred Valley"],
        hints: [
            "Former capital of the Inca Empire",
            "Gateway city for visitors to Machu Picchu",
            "Known for its unique blend of Inca and Spanish colonial architecture"
        ]
    },
    {
        name: "Northern Lights",
        country: "Multiple",
        continent: "Europe/North America",
        coordinates: [68.3508, -133.7211],
        type: "natural phenomenon",
        keywords: ["Aurora Borealis", "night sky", "Arctic", "magnetic field", "solar wind"],
        hints: [
            "A natural light display in the Earth's sky",
            "Predominantly seen in high-latitude regions",
            "Caused by disturbances in the magnetosphere by solar wind"
        ]
    },
    {
        name: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        coordinates: [42.6507, 18.0944],
        type: "city",
        keywords: ["walled city", "Adriatic", "Game of Thrones", "limestone", "old town"],
        hints: [
            "A city on the Adriatic Sea in southern Croatia",
            "Known for its distinctive Old Town, encircled with massive stone walls",
            "A filming location for the TV series 'Game of Thrones'"
        ]
    },
    {
        name: "Uluru (Ayers Rock)",
        country: "Australia",
        continent: "Oceania",
        coordinates: [-25.3444, 131.0369],
        type: "natural wonder",
        keywords: ["monolith", "sacred", "Aboriginal", "red rock", "Outback"],
        hints: [
            "A massive sandstone monolith in the heart of Australia's Red Centre",
            "Sacred to indigenous Australians",
            "Changes color at different times of the day and year"
        ]
    },
    {
        name: "Havana",
        country: "Cuba",
        continent: "North America",
        coordinates: [23.1136, -82.3666],
        type: "city",
        keywords: ["vintage cars", "cigars", "salsa", "colonial architecture", "Malecón"],
        hints: [
            "Capital city of Cuba",
            "Known for its colorful vintage cars and colonial architecture",
            "Home to the famous Malecón seawall promenade"
        ]
    },
    {
        name: "Serengeti National Park",
        country: "Tanzania",
        continent: "Africa",
        coordinates: [-2.3333, 34.8333],
        type: "natural wonder",
        keywords: ["safari", "wildebeest migration", "savanna", "Big Five", "Maasai"],
        hints: [
            "A vast African ecosystem in northern Tanzania",
            "Famous for its annual wildebeest migration",
            "Home to the 'Big Five' game animals"
        ]
    },
    {
        name: "Chichen Itza",
        country: "Mexico",
        continent: "North America",
        coordinates: [20.6843, -88.5678],
        type: "landmark",
        keywords: ["Maya", "pyramid", "El Castillo", "archaeology", "equinox"],
        hints: [
            "A pre-Columbian city built by the Maya people",
            "Home to the iconic step-pyramid known as El Castillo",
            "One of the New Seven Wonders of the World"
        ]
    },
    {
        name: "Venice",
        country: "Italy",
        continent: "Europe",
        coordinates: [45.4408, 12.3155],
        type: "city",
        keywords: ["canals", "gondolas", "St. Mark's Basilica", "bridges", "carnival"],
        hints: [
            "A city built on more than 100 small islands in a lagoon",
            "Famous for its canals and Gothic architecture",
            "Known for its annual carnival with elaborate masks"
        ]
    },
    {
        name: "Zhangjiajie National Forest Park",
        country: "China",
        continent: "Asia",
        coordinates: [29.3249, 110.4343],
        type: "natural wonder",
        keywords: ["Avatar mountains", "sandstone pillars", "glass bridge", "cable car", "Hunan"],
        hints: [
            "A national park known for its towering sandstone pillars",
            "Inspiration for the 'Hallelujah Mountains' in the movie Avatar",
            "Home to the world's longest and highest glass-bottomed bridge"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        keywords: ["white buildings", "blue domes", "caldera", "sunset", "Aegean Sea"],
        hints: [
            "A Greek island in the Aegean Sea",
            "Known for its distinctive white and blue architecture",
            "Believed by some to be the location of the lost city of Atlantis"
        ]
    },
    {
        name: "Taj Mahal",
        country: "India",
        continent: "Asia",
        coordinates: [27.1751, 78.0421],
        type: "landmark",
        keywords: ["mausoleum", "white marble", "Mughal architecture", "love story", "Agra"],
        hints: [
            "A white marble mausoleum on the bank of the Yamuna river",
            "Built by Mughal Emperor Shah Jahan in memory of his wife",
            "One of the New Seven Wonders of the World"
        ]
    },
    {
        name: "Cappadocia",
        country: "Turkey",
        continent: "Asia",
        coordinates: [38.6431, 34.8289],
        type: "region",
        keywords: ["hot air balloons", "fairy chimneys", "cave dwellings", "underground cities", "Göreme"],
        hints: [
            "A historical region in central Turkey",
            "Known for its distinctive 'fairy chimneys' rock formations",
            "Famous for hot air balloon rides and cave hotels"
        ]
    },
    {
        name: "Galapagos Islands",
        country: "Ecuador",
        continent: "South America",
        coordinates: [-0.8295, -91.1352],
        type: "natural wonder",
        keywords: ["wildlife", "Darwin", "evolution", "tortoises", "marine iguanas"],
        hints: [
            "An archipelago of volcanic islands in the Pacific Ocean",
            "Studied by Charles Darwin, contributing to his theory of evolution",
            "Home to unique wildlife, including giant tortoises and marine iguanas"
        ]
    },
    {
        name: "Kyoto",
        country: "Japan",
        continent: "Asia",
        coordinates: [35.0116, 135.7681],
        type: "city",
        keywords: ["temples", "geisha", "cherry blossoms", "zen gardens", "traditional"],
        hints: [
            "Former imperial capital of Japan",
            "Known for its numerous classical Buddhist temples",
            "Famous for its traditional wooden houses and geisha district"
        ]
    },
    {
        name: "Pyramids of Giza",
        country: "Egypt",
        continent: "Africa",
        coordinates: [29.9792, 31.1342],
        type: "landmark",
        keywords: ["ancient Egypt", "pharaohs", "Sphinx", "desert", "tombs"],
        hints: [
            "The oldest of the Seven Wonders of the Ancient World",
            "Complex includes the Great Sphinx",
            "Built as tombs for pharaohs of ancient Egypt"
        ]
    },
    {
        name: "Banff National Park",
        country: "Canada",
        continent: "North America",
        coordinates: [51.4968, -115.9281],
        type: "natural wonder",
        keywords: ["Rocky Mountains", "Lake Louise", "wildlife", "skiing", "hiking"],
        hints: [
            "Canada's first national park",
            "Located in the Rocky Mountains",
            "Home to turquoise lakes and abundant wildlife"
        ]
    },
    {
        name: "Marrakech",
        country: "Morocco",
        continent: "Africa",
        coordinates: [31.6295, -7.9811],
        type: "city",
        keywords: ["medina", "souks", "Djemaa el-Fna", "riads", "Moorish architecture"],
        hints: [
            "A former imperial city in western Morocco",
            "Known for its vibrant markets (souks)",
            "Home to the bustling Djemaa el-Fna square"
        ]
    },
    {
        name: "Reykjavik",
        country: "Iceland",
        continent: "Europe",
        coordinates: [64.1265, -21.8174],
        type: "city",
        keywords: ["geothermal", "Northern Lights", "midnight sun", "Hallgrímskirkja", "Viking"],
        hints: [
            "Northernmost capital of a sovereign state",
            "Known for its geothermal pools and proximity to the Northern Lights",
            "Home to the distinctive Hallgrímskirkja church"
        ]
    },
    {
        name: "St. Petersburg",
        country: "Russia",
        continent: "Europe",
        coordinates: [59.9311, 30.3609],
        type: "city",
        keywords: ["Hermitage", "White Nights", "canals", "Nevsky Prospect", "imperial palaces"],
        hints: [
            "Russia's cultural capital",
            "Known as the 'Venice of the North' due to its many canals",
            "Home to the world-famous Hermitage Museum"
        ]
    },
    {
        name: "Salar de Uyuni",
        country: "Bolivia",
        continent: "South America",
        coordinates: [-20.1338, -67.4891],
        type: "natural wonder",
        keywords: ["salt flat", "mirror effect", "lithium", "flamingos", "cacti island"],
        hints: [
            "World's largest salt flat",
            "Creates a mirror effect when covered with water",
            "Home to pink flamingos and giant cacti"
        ]
    },
    {
        name: "Prague",
        country: "Czech Republic",
        continent: "Europe",
        coordinates: [50.0755, 14.4378],
        type: "city",
        keywords: ["Charles Bridge", "astronomical clock", "castle", "beer", "gothic architecture"],
        hints: [
            "Capital of the Czech Republic",
            "Known as the 'City of a Hundred Spires'",
            "Famous for its medieval Astronomical Clock"
        ]
    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        continent: "South America",
        coordinates: [-34.6037, -58.3816],
        type: "city",
        keywords: ["tango", "steak", "Evita", "La Boca", "football"],
        hints: [
            "Capital of Argentina",
            "Birthplace of the tango dance",
            "Known for its colorful La Boca neighborhood"
        ]
    },
    {
        name: "Bora Bora",
        country: "French Polynesia",
        continent: "Oceania",
        coordinates: [-16.5004, -151.7415],
        type: "island",
        keywords: ["overwater bungalows", "lagoon", "Mount Otemanu", "luxury resorts", "snorkeling"],
        hints: [
            "A small South Pacific island northwest of Tahiti",
            "Known for its turquoise lagoon and luxury resorts",
            "Dominated by Mount Otemanu, a dormant volcano"
        ]
    },
    {
        name: "Neuschwanstein Castle",
        country: "Germany",
        continent: "Europe",
        coordinates: [47.5576, 10.7498],
        type: "landmark",
        keywords: ["fairy tale", "Bavarian Alps", "Ludwig II", "Romanesque Revival", "Disney inspiration"],
        hints: [
            "A 19th-century Romanesque Revival palace in Bavaria, Germany",
            "Inspiration for Disney's Sleeping Beauty Castle",
            "Built by King Ludwig II of Bavaria"
        ]
    },
    {
        name: "Kruger National Park",
        country: "South Africa",
        continent: "Africa",
        coordinates: [-23.9884, 31.5547],
        type: "natural wonder",
        keywords: ["safari", "Big Five", "wildlife", "savanna", "conservation"],
        hints: [
            "One of Africa's largest game reserves",
            "Home to a high density of wild animals including the 'Big Five'",
            "Located in northeastern South Africa"
        ]
    },
    {
        name: "Forbidden City",
        country: "China",
        continent: "Asia",
        coordinates: [39.9042, 116.4074],
        type: "landmark",
        keywords: ["imperial palace", "Ming Dynasty", "Qing Dynasty", "Chinese architecture", "Tiananmen Square"],
        hints: [
            "A palace complex in central Beijing",
            "Served as the home of Chinese emperors for almost 500 years",
            "The world's largest palace complex"
        ]
    },
    {
        name: "Queenstown",
        country: "New Zealand",
        continent: "Oceania",
        coordinates: [-45.0312, 168.6626],
        type: "city",
        keywords: ["adventure sports", "skiing", "bungee jumping", "Lake Wakatipu", "Remarkables"],
        hints: [
            "Known as the adventure capital of the world",
            "Situated on the shores of Lake Wakatipu",
            "Surrounded by the dramatic Southern Alps"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Cinque Terre",
        country: "Italy",
        continent: "Europe",
        coordinates: [44.1461, 9.6439],
        type: "region",
        keywords: ["colorful houses", "Italian Riviera", "hiking trails", "Mediterranean", "fishing villages"],
        hints: [
            "A string of five centuries-old seaside villages on the Italian Riviera",
            "Known for its colorful houses and vineyards clinging to steep terraces",
            "Popular for hiking, beaches, and seafood"
        ]
    },
    {
        name: "Angkor Wat",
        country: "Cambodia",
        continent: "Asia",
        coordinates: [13.4125, 103.8670],
        type: "landmark",
        keywords: ["temple complex", "Khmer Empire", "Hinduism", "Buddhism", "jungle"],
        hints: [
            "Largest religious monument in the world",
            "Originally constructed as a Hindu temple",
            "Appeared on the Cambodian flag"
        ]
    },
    {
        name: "Atacama Desert",
        country: "Chile",
        continent: "South America",
        coordinates: [-23.8634, -69.1328],
        type: "natural wonder",
        keywords: ["driest desert", "salt flats", "geysers", "stargazing", "Moon Valley"],
        hints: [
            "The driest non-polar desert in the world",
            "Known for its otherworldly landscapes and clear night skies",
            "Home to the ALMA observatory, one of the largest in the world"
        ]
    },
    {
        name: "Edinburgh",
        country: "Scotland",
        continent: "Europe",
        coordinates: [55.9533, -3.1883],
        type: "city",
        keywords: ["castle", "Royal Mile", "Fringe Festival", "Old Town", "Arthur's Seat"],
        hints: [
            "Capital city of Scotland",
            "Home to the world's largest arts festival",
            "Its Old Town and New Town are UNESCO World Heritage sites"
        ]
    },
    {
        name: "Ha Long Bay",
        country: "Vietnam",
        continent: "Asia",
        coordinates: [20.9101, 107.1839],
        type: "natural wonder",
        keywords: ["limestone islands", "emerald waters", "caves", "junk boats", "kayaking"],
        hints: [
            "A UNESCO World Heritage Site in northeast Vietnam",
            "Known for its emerald waters and thousands of towering limestone islands",
            "Its name means 'descending dragon bay' in Vietnamese"
        ]
    },
    {
        name: "Chefchaouen",
        country: "Morocco",
        continent: "Africa",
        coordinates: [35.1716, -5.2697],
        type: "city",
        keywords: ["blue city", "Rif Mountains", "medina", "Spanish Mosque", "handicrafts"],
        hints: [
            "A city in northwest Morocco known for its blue-painted buildings",
            "Nestled in the Rif Mountains",
            "Famous for its leather and weaving crafts"
        ]
    },
    {
        name: "Fiordland National Park",
        country: "New Zealand",
        continent: "Oceania",
        coordinates: [-45.4144, 167.7119],
        type: "natural wonder",
        keywords: ["fjords", "Milford Sound", "waterfalls", "rainforest", "wildlife"],
        hints: [
            "Home to the famous Milford Sound",
            "Known for its dramatic landscapes with towering peaks and deep fjords",
            "One of the wettest places on Earth"
        ]
    },
    {
        name: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        coordinates: [42.6507, 18.0944],
        type: "city",
        keywords: ["walled city", "Adriatic", "Game of Thrones", "Old Town", "beaches"],
        hints: [
            "A coastal city on the Adriatic Sea",
            "Known for its distinctive Old Town, encircled with massive stone walls",
            "A filming location for the TV series 'Game of Thrones'"
        ]
    },
    {
        name: "Cappadocia",
        country: "Turkey",
        continent: "Asia",
        coordinates: [38.6431, 34.8289],
        type: "region",
        keywords: ["hot air balloons", "fairy chimneys", "cave dwellings", "underground cities", "Göreme"],
        hints: [
            "A historical region in central Turkey",
            "Known for its distinctive 'fairy chimneys' rock formations",
            "Famous for hot air balloon rides and cave hotels"
        ]
    },
    {
        name: "Antelope Canyon",
        country: "United States",
        continent: "North America",
        coordinates: [36.8619, -111.3743],
        type: "natural wonder",
        keywords: ["slot canyon", "Navajo land", "sandstone", "light beams", "photography"],
        hints: [
            "A slot canyon located on Navajo land in Arizona",
            "Known for its wave-like structure and light beams",
            "Popular spot for photographers"
        ]
    },
    {
        name: "Meteora",
        country: "Greece",
        continent: "Europe",
        coordinates: [39.7217, 21.6306],
        type: "landmark",
        keywords: ["monasteries", "sandstone pillars", "Orthodox", "rock climbing", "Byzantine"],
        hints: [
            "A rock formation in central Greece hosting one of the largest Eastern Orthodox monastery complexes",
            "Monasteries built on natural sandstone rock pillars",
            "Name means 'suspended in the air' or 'in the heavens above'"
        ]
    },
    {
        name: "Zhangjiajie National Forest Park",
        country: "China",
        continent: "Asia",
        coordinates: [29.3249, 110.4343],
        type: "natural wonder",
        keywords: ["Avatar mountains", "sandstone pillars", "glass bridge", "cable car", "Hunan"],
        hints: [
            "Inspiration for the floating mountains in the movie 'Avatar'",
            "Known for its unique sandstone pillars",
            "Home to the world's longest glass-bottomed bridge"
        ]
    },
    {
        name: "Cartagena",
        country: "Colombia",
        continent: "South America",
        coordinates: [10.3932, -75.4832],
        type: "city",
        keywords: ["walled city", "colonial", "Caribbean", "colorful houses", "Gabriel García Márquez"],
        hints: [
            "A historic port city on Colombia's Caribbean coast",
            "Known for its colonial walled city and fortress",
            "Birthplace of magical realism in literature"
        ]
    },
    {
        name: "Victoria Falls",
        country: "Zimbabwe/Zambia",
        continent: "Africa",
        coordinates: [-17.9243, 25.8572],
        type: "natural wonder",
        keywords: ["waterfall", "Zambezi River", "mist", "rainbow", "Mosi-oa-Tunya"],
        hints: [
            "One of the world's largest waterfalls",
            "Known locally as 'The Smoke that Thunders'",
            "Forms the border between two African countries"
        ]
    },
    {
        name: "Luang Prabang",
        country: "Laos",
        continent: "Asia",
        coordinates: [19.8867, 102.1350],
        type: "city",
        keywords: ["temples", "monks", "French colonial", "Mekong River", "night market"],
        hints: [
            "A city in north central Laos",
            "Known for its many Buddhist temples and monasteries",
            "A UNESCO World Heritage Site blending traditional Lao and French colonial architecture"
        ]
    },
    {
        name: "Plitvice Lakes National Park",
        country: "Croatia",
        continent: "Europe",
        coordinates: [44.8654, 15.5820],
        type: "natural wonder",
        keywords: ["waterfalls", "turquoise lakes", "limestone", "wooden walkways", "forest"],
        hints: [
            "A forest reserve in central Croatia",
            "Known for a chain of 16 terraced lakes joined by waterfalls",
            "Features distinctive colors ranging from azure to green, grey or blue"
        ]
    },
    {
        name: "Lalibela",
        country: "Ethiopia",
        continent: "Africa",
        coordinates: [12.0319, 39.0453],
        type: "landmark",
        keywords: ["rock-hewn churches", "pilgrimage", "Orthodox Christianity", "Amhara", "medieval"],
        hints: [
            "A town in northern Ethiopia famous for monolithic churches",
            "11 medieval churches carved out of rock",
            "A major Ethiopian Orthodox Christian pilgrimage site"
        ]
    },
    {
        name: "Queenstown",
        country: "New Zealand",
        continent: "Oceania",
        coordinates: [-45.0312, 168.6626],
        type: "city",
        keywords: ["adventure sports", "skiing", "bungee jumping", "Lake Wakatipu", "Remarkables"],
        hints: [
            "Known as the adventure capital of the world",
            "Situated on the shores of Lake Wakatipu",
            "Surrounded by the dramatic Southern Alps"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Cinque Terre",
        country: "Italy",
        continent: "Europe",
        coordinates: [44.1461, 9.6439],
        type: "region",
        keywords: ["colorful houses", "Italian Riviera", "hiking trails", "Mediterranean", "fishing villages"],
        hints: [
            "A string of five centuries-old seaside villages on the Italian Riviera",
            "Known for its colorful houses and vineyards clinging to steep terraces",
            "Popular for hiking, beaches, and seafood"
        ]
    },
    {
        name: "Wadi Rum",
        country: "Jordan",
        continent: "Asia",
        coordinates: [29.5833, 35.4167],
        type: "natural wonder",
        keywords: ["desert", "Bedouin", "red sand", "rock formations", "stargazing"],
        hints: [
            "A desert valley in southern Jordan",
            "Also known as the Valley of the Moon",
            "Famous for its red sand and unique rock formations"
        ]
    },
    {
        name: "Chichen Itza",
        country: "Mexico",
        continent: "North America",
        coordinates: [20.6843, -88.5678],
        type: "landmark",
        keywords: ["Maya", "pyramid", "El Castillo", "archaeology", "equinox"],
        hints: [
            "A pre-Columbian city built by the Maya people",
            "Home to the iconic step-pyramid known as El Castillo",
            "One of the New Seven Wonders of the World"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        keywords: ["white buildings", "blue domes", "caldera", "sunset", "Aegean Sea"],
        hints: [
            "A Greek island in the Aegean Sea",
            "Known for its distinctive white and blue architecture",
            "Believed by some to be the location of the lost city of Atlantis"
        ]
    },
    {
        name: "Guilin",
        country: "China",
        continent: "Asia",
        coordinates: [25.2797, 110.2865],
        type: "city",
        keywords: ["karst mountains", "Li River", "rice terraces", "caves", "traditional Chinese landscape"],
        hints: [
            "A city in southern China known for its dramatic landscape of limestone karst hills",
            "The Li River flows through the city",
            "Often depicted in traditional Chinese paintings"
        ]
    },
    {
        name: "Namib Desert",
        country: "Namibia",
        continent: "Africa",
        coordinates: [-24.2967, 15.2458],
        type: "natural wonder",
        keywords: ["sand dunes", "Sossusvlei", "Deadvlei", "ancient desert", "Skeleton Coast"],
        hints: [
            "A coastal desert in southern Africa",
            "Home to some of the world's tallest sand dunes",
            "Contains the eerie, dried-up clay pan of Deadvlei"
        ]
    },
    {
        name: "Ushuaia",
        country: "Argentina",
        continent: "South America",
        coordinates: [-54.8019, -68.3030],
        type: "city",
        keywords: ["Tierra del Fuego", "end of the world", "Beagle Channel", "Antarctica gateway", "Andes"],
        hints: [
            "The southernmost city in the world",
            "Located on the Tierra del Fuego archipelago",
            "A popular starting point for cruises to Antarctica"
        ]
    },
    {
        name: "Haida Gwaii",
        country: "Canada",
        continent: "North America",
        coordinates: [53.2558, -132.2475],
        type: "island",
        keywords: ["First Nations", "totem poles", "temperate rainforest", "wildlife", "Pacific Northwest"],
        hints: [
            "An archipelago off the coast of British Columbia",
            "Home to the Haida people and their rich cultural heritage",
            "Known for its unique flora and fauna, including the Haida Gwaii black bear"
        ]
    },
    {
        name: "Bagan",
        country: "Myanmar",
        continent: "Asia",
        coordinates: [21.1717, 94.8585],
        type: "landmark",
        keywords: ["temples", "pagodas", "hot air balloons", "Irrawaddy River", "Buddhism"],
        hints: [
            "An ancient city in central Myanmar",
            "Known for its vast plain of ancient Buddhist temples and pagodas",
            "Popular for sunrise views and hot air balloon rides"
        ]
    },
    {
        name: "Socotra Island",
        country: "Yemen",
        continent: "Asia",
        coordinates: [12.4634, 53.8250],
        type: "island",
        keywords: ["Dragon Blood Tree", "biodiversity", "alien landscape", "UNESCO", "Indian Ocean"],
        hints: [
            "An island in the Arabian Sea",
            "Known for its unique and bizarre-looking native plant species",
            "Often described as the most alien-looking place on Earth"
        ]
    },
    {
        name: "Colosseum",
        country: "Italy",
        continent: "Europe",
        coordinates: [41.8902, 12.4922],
        type: "landmark",
        keywords: ["amphitheater", "gladiators", "ancient Rome", "architecture", "Roman Empire"],
        hints: [
            "An oval amphitheater in the center of Rome",
            "The largest ancient amphitheater ever built",
            "Historically used for gladiatorial contests and public spectacles"
        ]
    },
    {
        name: "Torres del Paine National Park",
        country: "Chile",
        continent: "South America",
        coordinates: [-51.0050, -73.0667],
        type: "natural wonder",
        keywords: ["Patagonia", "mountains", "glaciers", "hiking", "wildlife"],
        hints: [
            "A national park encompassing mountains, glaciers, lakes, and rivers in southern Chilean Patagonia",
            "Known for its distinctive granite peaks",
            "Home to diverse wildlife including guanacos, pumas, and Andean condors"
        ]
    },
    {
        name: "Vatnajökull National Park",
        country: "Iceland",
        continent: "Europe",
        coordinates: [64.4000, -17.0000],
        type: "natural wonder",
        keywords: ["glacier", "ice caves", "volcanoes", "Northern Lights", "Jökulsárlón"],
        hints: [
            "The largest national park in Europe",
            "Home to Iceland's largest glacier",
            "Features stunning ice caves and the Jökulsárlón glacier lagoon"
        ]
    },
    {
        name: "Moraine Lake",
        country: "Canada",
        continent: "North America",
        coordinates: [51.3217, -116.1860],
        type: "natural wonder",
        keywords: ["turquoise water", "Rocky Mountains", "Valley of the Ten Peaks", "canoeing", "reflection"],
        hints: [
            "A glacially-fed lake in Banff National Park",
            "Known for its vivid turquoise color due to rock flour",
            "Surrounded by the dramatic Valley of the Ten Peaks"
        ]
    }
];

let map;
let currentMarker;

function initMap() {
    if (!map) {
        map = L.map('map', {
            zoomControl: false,
            attributionControl: false
        }).setView([0, 0], 2);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            minZoom: 2
        }).addTo(map);
    }
}

function updateMap(coordinates) {
    if (!map) {
        initMap();
    }
    
    map.setView(coordinates, 10);
    
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    
    currentMarker = L.marker(coordinates).addTo(map);
}

function resetMap() {
    if (map) {
        map.setView([0, 0], 2);
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }
    }
}

function toggleMapMode(isDarkMode) {
    if (isDarkMode) {
        document.querySelector('.leaflet-tile-pane').style.filter = 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';
    } else {
        document.querySelector('.leaflet-tile-pane').style.filter = 'none';
    }
}

class EnhancedLocationGuesser {
    constructor(locations) {
        this.locations = locations;
        this.currentLocation = null;
        this.guessesRemaining = 5;
        this.score = 0;
        this.hintIndex = 0;
        this.selectRandomLocation();
    }

    selectRandomLocation() {
        let newLocation;
        do {
            newLocation = this.locations[Math.floor(Math.random() * this.locations.length)];
        } while (newLocation === this.currentLocation && this.locations.length > 1);
        
        this.currentLocation = newLocation;
        this.guessesRemaining = 5;
        this.hintIndex = 0;
    }

    checkGuess(guess) {
        const lowercaseGuess = guess.toLowerCase().trim();
        const locationName = this.currentLocation.name.toLowerCase();
        const country = this.currentLocation.country.toLowerCase();
        
        if (lowercaseGuess === locationName || lowercaseGuess === country) {
            this.score += 10;
            return {
                score: 10,
                totalScore: this.score,
                message: `Correct! You've guessed the location: ${this.currentLocation.name}, ${this.currentLocation.country}`,
                guessesRemaining: this.guessesRemaining,
                correct: true
            };
        }

        if (locationName.includes(lowercaseGuess) || country.includes(lowercaseGuess)) {
            this.score += 5;
            return {
                score: 5,
                totalScore: this.score,
                message: `Very close! Your guess is part of the correct answer.`,
                guessesRemaining: --this.guessesRemaining,
                correct: false
            };
        }

        const matchingKeyword = this.currentLocation.keywords.some(keyword => 
            keyword.toLowerCase().includes(lowercaseGuess) || lowercaseGuess.includes(keyword.toLowerCase())
        );
        
        this.guessesRemaining--;

        if (matchingKeyword) {
            const points = 3;  // Fixed points for keyword match
            this.score += points;
            return {
                score: points,
                totalScore: this.score,
                message: `Your guess "${guess}" is related to the location!`,
                guessesRemaining: this.guessesRemaining,
                correct: false
            };
        } else {
            return {
                score: 0,
                totalScore: this.score,
                message: `Your guess "${guess}" doesn't seem to be related.`,
                guessesRemaining: this.guessesRemaining,
                correct: false
            };
        }
    }

    getHint() {
        if (this.hintIndex < this.currentLocation.hints.length) {
            return this.currentLocation.hints[this.hintIndex++];
        }
        return "No more hints available!";
    }

    isGameOver() {
        return this.guessesRemaining === 0;
    }

    revealLocation() {
        return `The location was ${this.currentLocation.name}, ${this.currentLocation.country}.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new EnhancedLocationGuesser(locationData);
    const guessInput = document.getElementById('guess-input');
    const submitButton = document.getElementById('submit-guess');
    const feedbackElement = document.getElementById('feedback');
    const hintElement = document.getElementById('hint');
    const mapElement = document.getElementById('map');
    const nextLocationButton = document.getElementById('next-location');
    const modeToggle = document.getElementById('mode-toggle');
    initMap();

    function updateUI(result) {
        if (!result) {
            // This is the initial state or after selecting a new location
            hintElement.textContent = game.getHint();
            feedbackElement.textContent = 'New location selected. Start guessing!';
            return;
        }

        feedbackElement.textContent = `${result.message} (Score: ${result.totalScore}, Guesses left: ${result.guessesRemaining})`;
        
        if (result.correct || game.isGameOver()) {
            submitButton.style.display = 'none';
            nextLocationButton.style.display = 'block';
            if (game.currentLocation.coordinates) {
                updateMap(game.currentLocation.coordinates);
            }

            feedbackElement.textContent += ` The location was ${game.currentLocation.name}, ${game.currentLocation.country}.`;
        } else {
            hintElement.textContent = game.getHint();
        }
    }

    submitButton.addEventListener('click', () => {
        const guess = guessInput.value;
        if (guess.trim() === '') return;
        
        const result = game.checkGuess(guess);
        updateUI(result);
        guessInput.value = '';
    });

    nextLocationButton.addEventListener('click', () => {
        game.selectRandomLocation();
        submitButton.style.display = 'block';
        nextLocationButton.style.display = 'none';
        updateUI(); // This will display the initial hint
    });

    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleMapMode(isDarkMode);
    });

    // Hamburger Menu Functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove('active');
        }
    });

    // Prevent clicks inside the menu from closing it
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Handle difficulty change
    const difficultySelect = document.getElementById('difficulty');
    difficultySelect.addEventListener('change', (event) => {
        console.log('Difficulty changed to:', event.target.value);
        // Implement difficulty change logic here
    });

    // Handle location type changes
    const locationTypeCheckboxes = document.querySelectorAll('#menu input[type="checkbox"]');
    locationTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            console.log(`${event.target.id} is now ${event.target.checked ? 'checked' : 'unchecked'}`);
            // Implement location type filter logic here
        });
    });

    updateUI(); // Display initial hint when the game loads
});
