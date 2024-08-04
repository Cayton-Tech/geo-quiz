import { locationData } from './locations.js';

let map;
let currentMarker;
let rotationInterval;

function stopMapRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }
}

function startMapRotation() {
    stopMapRotation(); // Ensure any existing rotation is stopped
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
    stopMapRotation();
    
    map.flyTo(coordinates, 5, {
        duration: 2
    });

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

class EnhancedLocationGuesser {
    constructor(locations, difficulty = 'all locations') {
        this.allLocations = locations;
        this.setDifficulty(difficulty);
        this.currentLocation = null;
        this.guessesRemaining = 5;
        this.score = 0;
        this.hintIndex = 0;
        this.selectRandomLocation();
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
        if (difficulty === 'all locations') {
            this.locations = this.allLocations;
        } else {
            this.locations = this.allLocations.filter(location => location.difficulty === difficulty);
        }
    }

    selectRandomLocation() {
        if (this.locations.length === 0) {
            console.error("No locations available for the current difficulty level");
            return;
        }
        
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
            const points = 3;
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
    let game = new EnhancedLocationGuesser(locationData);
    const guessInput = document.getElementById('guess-input');
    const submitButton = document.getElementById('submit-guess');
    const feedbackElement = document.getElementById('feedback');
    const hintElement = document.getElementById('hint');
    const mapElement = document.getElementById('map');
    const nextLocationButton = document.getElementById('next-location');
    const modeToggle = document.getElementById('mode-toggle');
    const difficultySelect = document.getElementById('difficulty');
    initMap();

    function updateUI(result) {
        if (!result) {
            hintElement.textContent = game.getHint();
            feedbackElement.textContent = 'New location selected. Start guessing!';
            resetMap(); // Reset the map when a new location is selected
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
        updateUI();
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

    difficultySelect.addEventListener('change', (event) => {
        const newDifficulty = event.target.value;
        game.setDifficulty(newDifficulty);
        game.selectRandomLocation();
        updateUI();
    });

    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove('active');
        }
    });

    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    const locationTypeCheckboxes = document.querySelectorAll('#menu input[type="checkbox"]');
    locationTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            console.log(`${event.target.id} is now ${event.target.checked ? 'checked' : 'unchecked'}`);
        });
    });

    updateUI();
});