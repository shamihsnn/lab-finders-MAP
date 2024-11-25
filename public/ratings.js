// Rating system state
const ratingsDB = {
    ratings: {},
    reviews: {}
};

// Initialize ratings from localStorage
function initializeRatings() {
    const savedRatings = localStorage.getItem('labRatings');
    const savedReviews = localStorage.getItem('labReviews');
    if (savedRatings) ratingsDB.ratings = JSON.parse(savedRatings);
    if (savedReviews) ratingsDB.reviews = JSON.parse(savedReviews);
}

// Save ratings to localStorage
function saveRatings() {
    localStorage.setItem('labRatings', JSON.stringify(ratingsDB.ratings));
    localStorage.setItem('labReviews', JSON.stringify(ratingsDB.reviews));
}

// Add or update a rating
function addRating(labName, rating, review = '') {
    if (!ratingsDB.ratings[labName]) {
        ratingsDB.ratings[labName] = [];
    }
    ratingsDB.ratings[labName].push(rating);
    
    if (review) {
        if (!ratingsDB.reviews[labName]) {
            ratingsDB.reviews[labName] = [];
        }
        ratingsDB.reviews[labName].push({
            rating,
            review,
            date: new Date().toISOString()
        });
    }
    
    saveRatings();
    updateLabPopup(labName);
}

// Get average rating for a lab
function getAverageRating(labName) {
    const ratings = ratingsDB.ratings[labName];
    if (!ratings || !ratings.length) return 0;
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
}

// Get all reviews for a lab
function getLabReviews(labName) {
    return ratingsDB.reviews[labName] || [];
}
