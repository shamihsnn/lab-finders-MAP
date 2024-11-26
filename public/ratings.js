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



function submitReview(labName) {
    const ratingSelect = document.querySelector('.rating-input');
    const reviewText = document.querySelector('.review-input');
    const submitButton = document.querySelector('.review-submit');
    
    if (!ratingSelect.value) {
        alert('Please select a rating');
        return;
    }
    
    // Disable submit button to prevent multiple submissions
    submitButton.disabled = true;
    
    // Add the rating
    addRating(labName, parseInt(ratingSelect.value), reviewText.value);
    
    // Update the UI immediately
    const rating = getAverageRating(labName);
    const reviews = getLabReviews(labName);
    
    // Update the rating display in the popup
    const ratingContainer = document.querySelector('.rating-container');
    if (ratingContainer) {
        const starsElement = ratingContainer.querySelector('.stars');
        const ratingText = ratingContainer.querySelector('p');
        if (starsElement) starsElement.innerHTML = createStarRating(rating);
        if (ratingText) ratingText.textContent = `Average Rating: ${rating.toFixed(1)} (${ratingsDB.ratings[labName]?.length || 0} ratings)`;
        
        // Update reviews list
        const reviewsList = ratingContainer.querySelector('.reviews-list');
        if (reviewsList) {
            reviewsList.innerHTML = reviews.map(review => `
                <div class="review-item">
                    <div class="stars">${createStarRating(review.rating)}</div>
                    <p>${review.review}</p>
                    <small>${new Date(review.date).toLocaleDateString()}</small>
                </div>
            `).join('');
        }
    }
    
    // Reset form
    ratingSelect.value = '';
    reviewText.value = '';
    
    // Re-enable submit button after a short delay
    setTimeout(() => {
        submitButton.disabled = false;
    }, 1000);
    
    // Update lab finder list if open
    updateLabFinderList(labName, rating);
}

function updateLabFinderList(labName, rating) {
    const labListElement = document.getElementById('filtered-lab-list');
    if (labListElement) {
        const labItems = labListElement.querySelectorAll('.lab-item');
        labItems.forEach(item => {
            if (item.querySelector('h3').textContent === labName) {
                const starsElement = item.querySelector('.stars');
                const ratingText = item.querySelector('p');
                if (starsElement) starsElement.innerHTML = createStarRating(rating);
                if (ratingText && ratingText.textContent.includes('Rating:')) {
                    ratingText.textContent = `Rating: ${rating.toFixed(1)} stars`;
                }
            }
        });
    }
}
