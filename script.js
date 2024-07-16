const locationData = [
    {
        name: "Paris",
        country: "France",
        continent: "Europe",
        coordinates: [48.8566, 2.3522],
        type: "city",
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "easy",
        keywords: ["Big Ben", "Tower Bridge", "Thames", "red buses", "royal family"],
        hints: [
            "Capital of the United Kingdom",
            "Home to the British monarchy",
            "Famous for its iconic clock tower"
        ]
    },
    {
        name: "Victoria Falls",
        country: "Zimbabwe/Zambia",
        continent: "Africa",
        coordinates: [-17.9243, 25.8572],
        type: "natural wonder",
        difficulty: "medium",
        keywords: ["waterfall", "Zambezi River", "mist", "rainbow", "Mosi-oa-Tunya"],
        hints: [
            "One of the world's largest waterfalls",
            "Known locally as 'The Smoke that Thunders'",
            "Forms the border between two African countries"
        ]
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        continent: "Asia",
        coordinates: [25.2048, 55.2708],
        type: "city",
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "easy",
        keywords: ["sushi", "anime", "Shibuya", "technology", "cherry blossom"],
        hints: [
            "The most populous metropolitan area in the world",
            "Capital of Japan",
            "Known for its unique blend of traditional and modern culture"
        ]
    },
    {
        name: "Amazon Rainforest",
        country: "Brazil (and others)",
        continent: "South America",
        coordinates: [-3.4653, -62.2159],
        type: "natural wonder",
        difficulty: "medium",
        keywords: ["biodiversity", "river", "indigenous tribes", "deforestation", "wildlife"],
        hints: [
            "The world's largest tropical rainforest",
            "Often called the 'Lungs of the Earth'",
            "Home to millions of species of plants and animals"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        difficulty: "medium",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        difficulty: "medium",
        keywords: ["white buildings", "blue domes", "caldera", "sunset", "Aegean Sea"],
        hints: [
            "A Greek island in the Aegean Sea",
            "Known for its distinctive white and blue architecture",
            "Believed by some to be the location of the lost city of Atlantis"
        ]
    },
    {
        name: "Zhangjiajie National Forest Park",
        country: "China",
        continent: "Asia",
        coordinates: [29.3249, 110.4343],
        type: "natural wonder",
        difficulty: "hard",
        keywords: ["Avatar mountains", "sandstone pillars", "glass bridge", "cable car", "Hunan"],
        hints: [
            "Inspiration for the floating mountains in the movie 'Avatar'",
            "Known for its unique sandstone pillars",
            "Home to the world's longest glass-bottomed bridge"
        ]
    },
    {
        name: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        coordinates: [42.6507, 18.0944],
        type: "city",
        difficulty: "medium",
        keywords: ["walled city", "Adriatic", "Game of Thrones", "Old Town", "beaches"],
        hints: [
            "A coastal city on the Adriatic Sea",
            "Known for its distinctive Old Town, encircled with massive stone walls",
            "A filming location for the TV series 'Game of Thrones'"
        ]
    },
    {
        name: "Galapagos Islands",
        country: "Ecuador",
        continent: "South America",
        coordinates: [-0.8295, -91.1352],
        type: "natural wonder",
        difficulty: "hard",
        keywords: ["wildlife", "Darwin", "evolution", "tortoises", "marine iguanas"],
        hints: [
            "An archipelago of volcanic islands in the Pacific Ocean",
            "Studied by Charles Darwin, contributing to his theory of evolution",
            "Home to unique wildlife, including giant tortoises and marine iguanas"
        ]
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        continent: "South America",
        coordinates: [-13.1631, -72.5450],
        type: "landmark",
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "hard",
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
        difficulty: "medium",
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
        difficulty: "medium",
        keywords: ["walled city", "Adriatic", "Game of Thrones", "Old Town", "limestone"],
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
        keywords: ["Maya", "pyramid", "El Castillo", "archaeology", "equinox"],
        hints: [
            "A pre-Columbian city built by the Maya people",
            "Home to the iconic step-pyramid known as El Castillo",
            "One of the New Seven Wonders of the World"
        ]
    },
    {
        name: "Zhangjiajie National Forest Park",
        country: "China",
        continent: "Asia",
        coordinates: [29.3249, 110.4343],
        type: "natural wonder",
        difficulty: "hard",
        keywords: ["Avatar mountains", "sandstone pillars", "glass bridge", "cable car", "Hunan"],
        hints: [
            "Inspiration for the floating mountains in the movie 'Avatar'",
            "Known for its unique sandstone pillars",
            "Home to the world's longest glass-bottomed bridge"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        difficulty: "easy",
        keywords: ["white buildings", "blue domes", "caldera", "sunset", "Aegean Sea"],
        hints: [
            "A Greek island in the Aegean Sea",
            "Known for its distinctive white and blue architecture",
            "Believed by some to be the location of the lost city of Atlantis"
        ]
    },
    {
        name: "Cappadocia",
        country: "Turkey",
        continent: "Asia",
        coordinates: [38.6431, 34.8289],
        type: "region",
        difficulty: "hard",
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
        difficulty: "hard",
        keywords: ["wildlife", "Darwin", "evolution", "tortoises", "marine iguanas"],
        hints: [
            "An archipelago of volcanic islands in the Pacific Ocean",
            "Studied by Charles Darwin, contributing to his theory of evolution",
            "Home to unique wildlife, including giant tortoises and marine iguanas"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "hard",
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
        difficulty: "medium",
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
        difficulty: "medium",
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
        difficulty: "hard",
        keywords: ["blue city", "Rif Mountains", "medina", "Spanish Mosque", "handicrafts"],
        hints: [
            "A city in northwest Morocco known for its blue-painted buildings",
            "Nestled in the Rif Mountains",
            "Famous for its leather and weaving crafts"
        ]
    },
    {
        name: "Yellowstone National Park",
        country: "United States",
        continent: "North America",
        coordinates: [44.4280, -110.5885],
        type: "natural wonder",
        difficulty: "easy",
        keywords: ["geysers", "Old Faithful", "wildlife", "hot springs", "supervolcano"],
        hints: [
            "The world's first national park",
            "Known for its geothermal features, including geysers and hot springs",
            "Home to diverse wildlife including bison, bears, and wolves"
        ]
    },
    {
        name: "Pyramids of Giza",
        country: "Egypt",
        continent: "Africa",
        coordinates: [29.9792, 31.1342],
        type: "landmark",
        difficulty: "easy",
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
        difficulty: "medium",
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
        difficulty: "medium",
        keywords: ["medina", "souks", "Djemaa el-Fna", "riads", "Moorish architecture"],
        hints: [
            "A former imperial city in western Morocco",
            "Known for its vibrant markets (souks)",
            "Home to the bustling Djemaa el-Fna square"
        ]
    },
    {
        name: "Antelope Canyon",
        country: "United States",
        continent: "North America",
        coordinates: [36.8619, -111.3743],
        type: "natural wonder",
        difficulty: "medium",
        keywords: ["slot canyon", "Navajo land", "sandstone", "light beams", "photography"],
        hints: [
            "A slot canyon on Navajo land in Arizona",
            "Known for its wave-like structure and light beams",
            "Popular spot for photographers"
        ]
    },
    {
        name: "Kyoto",
        country: "Japan",
        continent: "Asia",
        coordinates: [35.0116, 135.7681],
        type: "city",
        difficulty: "medium",
        keywords: ["temples", "geisha", "cherry blossoms", "zen gardens", "traditional"],
        hints: [
            "Former imperial capital of Japan",
            "Known for its numerous classical Buddhist temples",
            "Famous for its traditional wooden houses and geisha district"
        ]
    },
    {
        name: "Plitvice Lakes National Park",
        country: "Croatia",
        continent: "Europe",
        coordinates: [44.8654, 15.5820],
        type: "natural wonder",
        difficulty: "hard",
        keywords: ["waterfalls", "turquoise lakes", "limestone", "wooden walkways", "forest"],
        hints: [
            "A forest reserve in central Croatia",
            "Known for a chain of 16 terraced lakes joined by waterfalls",
            "Features distinctive colors ranging from azure to green, grey or blue"
        ]
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        continent: "South America",
        coordinates: [-13.1631, -72.5450],
        type: "landmark",
        difficulty: "medium",
        keywords: ["Inca", "ruins", "Andes", "ancient city", "llama"],
        hints: [
            "An ancient Incan city",
            "Located high in the Andes mountains",
            "Discovered in 1911 by Hiram Bingham"
        ]
    },
    {
        name: "Bora Bora",
        country: "French Polynesia",
        continent: "Oceania",
        coordinates: [-16.5004, -151.7415],
        type: "island",
        difficulty: "medium",
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
        difficulty: "medium",
        keywords: ["fairy tale", "Bavarian Alps", "Ludwig II", "Romanesque Revival", "Disney inspiration"],
        hints: [
            "A 19th-century Romanesque Revival palace in Bavaria, Germany",
            "Inspiration for Disney's Sleeping Beauty Castle",
            "Built by King Ludwig II of Bavaria"
        ]
    },
    {
        name: "Salar de Uyuni",
        country: "Bolivia",
        continent: "South America",
        coordinates: [-20.1338, -67.4891],
        type: "natural wonder",
        difficulty: "hard",
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
        difficulty: "easy",
        keywords: ["Charles Bridge", "astronomical clock", "castle", "beer", "gothic architecture"],
        hints: [
            "Capital of the Czech Republic",
            "Known as the 'City of a Hundred Spires'",
            "Famous for its medieval Astronomical Clock"
        ]
    },
    {
        name: "Great Wall of China",
        country: "China",
        continent: "Asia",
        coordinates: [40.4319, 116.5704],
        type: "landmark",
        difficulty: "easy",
        keywords: ["ancient", "fortification", "Ming Dynasty", "stone", "brick"],
        hints: [
            "One of the Seven Wonders of the World",
            "Visible from space",
            "Built to protect against invasions"
        ]
    },
    {
        name: "Fiordland National Park",
        country: "New Zealand",
        continent: "Oceania",
        coordinates: [-45.4144, 167.7119],
        type: "natural wonder",
        difficulty: "hard",
        keywords: ["fjords", "Milford Sound", "waterfalls", "rainforest", "wildlife"],
        hints: [
            "Home to the famous Milford Sound",
            "Known for its dramatic landscapes with towering peaks and deep fjords",
            "One of the wettest places on Earth"
        ]
    },
    {
        name: "Venice",
        country: "Italy",
        continent: "Europe",
        coordinates: [45.4408, 12.3155],
        type: "city",
        difficulty: "easy",
        keywords: ["canals", "gondolas", "St. Mark's Basilica", "bridges", "carnival"],
        hints: [
            "A city built on more than 100 small islands in a lagoon",
            "Famous for its canals and Gothic architecture",
            "Known for its annual carnival with elaborate masks"
        ]
    },
    {
        name: "Taj Mahal",
        country: "India",
        continent: "Asia",
        coordinates: [27.1751, 78.0421],
        type: "landmark",
        difficulty: "easy",
        keywords: ["mausoleum", "white marble", "Mughal architecture", "love story", "Agra"],
        hints: [
            "A white marble mausoleum on the bank of the Yamuna river",
            "Built by Mughal Emperor Shah Jahan in memory of his wife",
            "One of the New Seven Wonders of the World"
        ]
    },
    {
        name: "Moraine Lake",
        country: "Canada",
        continent: "North America",
        coordinates: [51.3217, -116.1860],
        type: "natural wonder",
        difficulty: "medium",
        keywords: ["turquoise water", "Rocky Mountains", "Valley of the Ten Peaks", "canoeing", "reflection"],
        hints: [
            "A glacially-fed lake in Banff National Park",
            "Known for its vivid turquoise color due to rock flour",
            "Surrounded by the dramatic Valley of the Ten Peaks"
        ]
    },
    {
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        coordinates: [30.3285, 35.4444],
        type: "landmark",
        difficulty: "medium",
        keywords: ["rose city", "Nabataeans", "Treasury", "archaeology", "desert"],
        hints: [
            "Ancient city carved into red rock cliffs",
            "Featured in 'Indiana Jones and the Last Crusade'",
            "A UNESCO World Heritage site in Jordan"
        ]
    },
    {
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        coordinates: [36.3932, 25.4615],
        type: "island",
        difficulty: "easy",
        keywords: ["white buildings", "blue domes", "caldera", "sunset", "Aegean Sea"],
        hints: [
            "A Greek island in the Aegean Sea",
            "Known for its distinctive white and blue architecture",
            "Believed by some to be the location of the lost city of Atlantis"
        ]
    },
    {
        name: "Victoria Falls",
        country: "Zimbabwe/Zambia",
        continent: "Africa",
        coordinates: [-17.9243, 25.8572],
        type: "natural wonder",
        difficulty: "medium",
        keywords: ["waterfall", "Zambezi River", "mist", "rainbow", "Mosi-oa-Tunya"],
        hints: [
            "One of the world's largest waterfalls",
            "Known locally as 'The Smoke that Thunders'",
            "Forms the border between two African countries"
        ]
    },
    {
        name: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        coordinates: [42.6507, 18.0944],
        type: "city",
        difficulty: "medium",
        keywords: ["walled city", "Adriatic", "Game of Thrones", "Old Town", "beaches"],
        hints: [
            "A coastal city on the Adriatic Sea",
            "Known for its distinctive Old Town, encircled with massive stone walls",
            "A filming location for the TV series 'Game of Thrones'"
        ]
    },
    {
        name: "Mount Fuji",
        country: "Japan",
        continent: "Asia",
        coordinates: [35.3606, 138.7278],
        type: "natural wonder",
        difficulty: "easy",
        keywords: ["volcano", "snow-capped", "sacred", "climbing", "Shinto"],
        hints: [
            "Japan's tallest peak",
            "An active volcano that last erupted in 1707",
            "One of Japan's \"Three Holy Mountains\""
        ]
    },
    {
        name: "Angkor Wat",
        country: "Cambodia",
        continent: "Asia",
        coordinates: [13.4125, 103.8670],
        type: "landmark",
        difficulty: "medium",
        keywords: ["temple complex", "Khmer Empire", "Hinduism", "Buddhism", "jungle"],
        hints: [
            "Largest religious monument in the world",
            "Originally constructed as a Hindu temple",
            "Appeared on the Cambodian flag"
        ]
    },
    {
        name: "Rio de Janeiro",
        country: "Brazil",
        continent: "South America",
        coordinates: [-22.9068, -43.1729],
        type: "city",
        difficulty: "easy",
        keywords: ["Christ the Redeemer", "Copacabana", "samba", "Carnival", "Sugarloaf Mountain"],
        hints: [
            "Home to the famous Copacabana beach",
            "Hosts the world's largest carnival",
            "Has a giant statue of Jesus on a mountain"
        ]
    },
    {
        name: "Meteora",
        country: "Greece",
        continent: "Europe",
        coordinates: [39.7217, 21.6306],
        type: "landmark",
        difficulty: "hard",
        keywords: ["monasteries", "sandstone pillars", "Orthodox", "rock climbing", "Byzantine"],
        hints: [
            "A rock formation in central Greece hosting one of the largest Eastern Orthodox monastery complexes",
            "Monasteries built on natural sandstone rock pillars",
            "Name means 'suspended in the air' or 'in the heavens above'"
        ]
    },
    {
        name: "Bagan",
        country: "Myanmar",
        continent: "Asia",
        coordinates: [21.1717, 94.8585],
        type: "landmark",
        difficulty: "hard",
        keywords: ["temples", "pagodas", "hot air balloons", "Irrawaddy River", "Buddhism"],
        hints: [
            "An ancient city in central Myanmar",
            "Known for its vast plain of ancient Buddhist temples and pagodas",
            "Popular for sunrise views and hot air balloon rides"
        ]
    },
    {
        name: "Yellowstone National Park",
        country: "United States",
        continent: "North America",
        coordinates: [44.4280, -110.5885],
        type: "natural wonder",
        difficulty: "easy",
        keywords: ["geysers", "Old Faithful", "wildlife", "hot springs", "supervolcano"],
        hints: [
            "The world's first national park",
            "Known for its geothermal features, including geysers and hot springs",
            "Home to diverse wildlife including bison, bears, and wolves"
        ]
    },
    {
        name: "Easter Island",
        country: "Chile",
        continent: "South America",
        coordinates: [-27.1127, -109.3497],
        type: "landmark",
        difficulty: "hard",
        keywords: ["moai statues", "Rapa Nui", "Polynesian", "remote", "mysterious"],
        hints: [
            "A remote volcanic island in Polynesia",
            "Famous for its monumental statues called moai",
            "One of the most isolated inhabited islands in the world"
        ]
    },
    {
        name: "Cappadocia",
        country: "Turkey",
        continent: "Asia",
        coordinates: [38.6431, 34.8289],
        type: "region",
        difficulty: "medium",
        keywords: ["hot air balloons", "fairy chimneys", "cave dwellings", "underground cities", "Göreme"],
        hints: [
            "A historical region in central Turkey",
            "Known for its distinctive 'fairy chimneys' rock formations",
            "Famous for hot air balloon rides and cave hotels"
        ]
    }
];

let map;
let currentMarker;
let rotationInterval;
let currentDifficulty = 'all';
let filteredLocations = locationData;
let game;
// DOM element selections
const difficultySelect = document.getElementById('difficulty-select');
const currentDifficultySpan = document.querySelector('#current-difficulty span');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const feedbackElement = document.getElementById('feedback');
const hintElement = document.getElementById('hint');
const mapElement = document.getElementById('map');
const nextLocationButton = document.getElementById('next-location');
const modeToggle = document.getElementById('mode-toggle');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');

function updateUI(result) {
    console.log("Updating UI");
    if (result === null) {
        // This is for a new location
        console.log("New location UI update");
        feedbackElement.textContent = 'New location selected. Start guessing!';
        hintElement.textContent = game.getHint();
        console.log("New hint:", game.getHint());
    } else if (result) {
        // This is for a guess
        console.log("Guess result UI update");
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
    console.log("UI update complete");
}

difficultySelect.addEventListener('change', (event) => {
    currentDifficulty = event.target.value;
    currentDifficultySpan.textContent = event.target.options[event.target.selectedIndex].text;
    console.log("Difficulty changed to:", currentDifficulty);
    resetGame();
});

function filterLocations() {
    console.log("Filtering locations. Current difficulty:", currentDifficulty);
    console.log("Total locations before filtering:", locationData.length);

    if (currentDifficulty === 'all') {
        filteredLocations = locationData;
    } else {
        filteredLocations = locationData.filter(
            location => location.difficulty === currentDifficulty
        );
    }

    console.log("Filtered locations:", filteredLocations.length);

    // If no locations match the selected difficulty, fall back to 'all'
    if (filteredLocations.length === 0) {
        console.warn(`No locations found for difficulty: ${currentDifficulty}. Falling back to 'all'.`);
        currentDifficulty = 'all';
        filteredLocations = locationData;
        difficultySelect.value = 'all';
        currentDifficultySpan.textContent = 'All';
    }

    // Log a sample of filtered locations
    console.log("Sample of filtered locations:", filteredLocations.slice(0, 3));
}


function startMapRotation() {
    let longitude = 0;
    rotationInterval = setInterval(() => {
        longitude = (longitude + 1) % 360;
        map.setView([0, longitude], 2, { animate: false });
    }, 100);
}

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

        startMapRotation();
    }
}

function smoothZoomTo(coordinates) {
    clearInterval(rotationInterval);
    
    // First, fly to the general area
    map.flyTo(coordinates, 5, {
        duration: 2  // Duration in seconds
    });

    // Then, after the fly animation is complete, zoom in closer and add the marker
    setTimeout(() => {
        map.flyTo(coordinates, 8, {
            duration: 1
        });
        
        setTimeout(() => {
            if (currentMarker) {
                map.removeLayer(currentMarker);
            }
            currentMarker = L.marker(coordinates).addTo(map);
        }, 1000);
    }, 2000);
}

function updateMap(coordinates) {
    if (!map) {
        initMap();
    }
    
    smoothZoomTo(coordinates);
}

function resetMap() {
    if (map) {
        map.setView([0, 0], 2);
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }
        startMapRotation();
    }
}

function toggleMapMode(isDarkMode) {
    if (isDarkMode) {
        document.querySelector('.leaflet-tile-pane').style.filter = 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';
    } else {
        document.querySelector('.leaflet-tile-pane').style.filter = 'none';
    }
}

function resetGame() {
    console.log("Resetting game");
    filterLocations();
    game.locations = filteredLocations;
    game.selectRandomLocation();
    console.log("New location selected:", game.currentLocation.name);
    
    submitButton.style.display = 'block';
    submitButton.disabled = false;
    nextLocationButton.style.display = 'none';
    
    feedbackElement.textContent = 'New location selected. Start guessing!';
    hintElement.textContent = game.getHint();
    
    if (map) {
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }
        map.setView([0, 0], 2, { animate: false });
        if (currentMarker) {
            map.removeLayer(currentMarker);
            currentMarker = null;
        }
        startMapRotation();
    }
    
    updateUI(null);
    guessInput.value = '';
    guessInput.focus();
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
    game = new EnhancedLocationGuesser(filteredLocations);
    const guessInput = document.getElementById('guess-input');
    const submitButton = document.getElementById('submit-guess');
    const feedbackElement = document.getElementById('feedback');
    const hintElement = document.getElementById('hint');
    const mapElement = document.getElementById('map');
    const nextLocationButton = document.getElementById('next-location');
    const modeToggle = document.getElementById('mode-toggle');
    initMap();

    

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
        feedbackElement.textContent = 'New location selected. Start guessing!';
        hintElement.textContent = game.getHint();
        resetMap();
        updateUI(null);
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

    // Handle location type changes
    const locationTypeCheckboxes = document.querySelectorAll('#menu input[type="checkbox"]');
    locationTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            console.log(`${event.target.id} is now ${event.target.checked ? 'checked' : 'unchecked'}`);
            // Implement location type filter logic here
        });
    });

    updateUI(null); // Display initial hint when the game loads
});
