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
        continent: "Australia",
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
        continent: "Australia",
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
    // ... [Continue with the remaining locations to reach a total of 100] ...
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
    
    map.setView(coordinates, 5);
    
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
        this.currentLocation = this.locations[Math.floor(Math.random() * this.locations.length)];
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
        feedbackElement.textContent = `${result.message} (Score: ${result.totalScore}, Guesses left: ${result.guessesRemaining})`;
        
        if (result.correct || game.isGameOver()) {
            submitButton.style.display = 'none';
            nextLocationButton.style.display = 'block';
            if (game.currentLocation.coordinates) {
                updateMap(game.currentLocation.coordinates);
            }
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
        feedbackElement.textContent = 'New location selected. Start guessing!';
        hintElement.textContent = '';
        resetMap();
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
});
