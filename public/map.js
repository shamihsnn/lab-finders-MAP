// Constants and Configuration
const CONFIG = {
    DEFAULT_CENTER: [33.7500, 72.7700],
    MAX_RECENT_SEARCHES: 5,
    DEFAULT_ZOOM: 13,
    MIN_ZOOM: 3,
    MAX_ZOOM: 19,
    TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    ATTRIBUTION: '©usama-hsnn 2025'
};

// Lab Data
const labs = [
    {
        name: "Capital Diagnostic Centre",
        lat: 33.78895628970263,
        lng: 72.72671488011703,
        contact: "051-123-4567",
        info: "Full service medical laboratory with state-of-the-art equipment",
        services: ["Blood Tests", "X-Ray", "MRI", "CT Scan", "Ultrasound"],
        timings: "24/7",
        address: "gudwal morr, Wah Cantt"
    },
    {
        name: "POF Hospital Labs",
        lat: 33.75014826546548,
        lng: 72.78497798750843,
        contact: "051-234-5678",
        info: "Specialized diagnostic center serving POF employees and general public",
        services: ["Pathology", "Radiology", "Microbiology", "Biochemistry"],
        timings: "8:00 AM - 10:00 PM",
        address: "POF Hospital Complex, Wah Cantt"
    },
    {
        name: "IDC Labs Barrier 3",
        lat: 33.74675630883451,
        lng: 72.77142146406703,
        contact: "051-345-6789",
        info: "Hospital laboratory services with quick reporting",
        services: ["Emergency Tests", "COVID Testing", "Blood Banking"],
        timings: "24/7",
        address: "Near Barrier 3, Wah Cantt"
    },
    {
        name: "Wah Medical Complex Lab",
        lat: 33.76234567890123,
        lng: 72.77567890123456,
        contact: "051-905-1234",
        info: "Modern diagnostic facility with latest equipment",
        services: ["Clinical Laboratory", "Molecular Diagnostics", "Histopathology"],
        timings: "8:00 AM - 11:00 PM",
        address: "Main GT Road, Wah Cantt"
    },
    {
        name: "Taxila Diagnostic Center",
        lat: 33.74567890123456,
        lng: 72.79123456789012,
        contact: "051-876-5432",
        info: "Comprehensive diagnostic services with home sample collection",
        services: ["Blood Tests", "X-Ray", "ECG", "Ultrasound"],
        timings: "24/7",
        address: "Near Heavy Industries, Taxila"
    },
    {
        name: "Al-Shifa Laboratory",
        lat: 33.77890123456789,
        lng: 72.76234567890123,
        contact: "051-442-8899",
        info: "Reliable testing services with quick turnaround time",
        services: ["Clinical Pathology", "Biochemistry", "Serology"],
        timings: "8:00 AM - 10:00 PM",
        address: "Kashmir Road, Wah Cantt"
    },
    {
        name: "Wah General Hospital Lab",
        lat: 33.75567890123456,
        lng: 72.78234567890123,
        contact: "051-987-6543",
        info: "Hospital-based laboratory with emergency services",
        services: ["Emergency Tests", "Routine Lab Tests", "Specialized Tests"],
        timings: "24/7",
        address: "Hospital Road, Wah Cantt"
    },
    {
        name: "Medicare Diagnostic Lab",
        lat: 33.76789012345678,
        lng: 72.75345678901234,
        contact: "051-333-4455",
        info: "Modern lab facility with home sampling services",
        services: ["Blood Tests", "Urine Tests", "Stool Tests", "Hormone Tests"],
        timings: "7:00 AM - 11:00 PM",
        address: "Lala Rukh, Wah Cantt"
    },

    // Add these to your existing labs array
{
    name: "Citi Lab & Blood Bank",
    lat: 33.77456789012345,
    lng: 72.76123456789012,
    contact: "051-4911177",
    info: "24/7 blood bank and diagnostic services",
    services: ["Blood Bank", "Clinical Lab", "PCR Testing", "Biochemistry"],
    timings: "24/7",
    address: "Block D, Commercial Area, Wah Cantt"
},
{
    name: "Islamabad Diagnostic Centre (IDC) Wah",
    lat: 33.75678901234567,
    lng: 72.77234567890123,
    contact: "051-4545777",
    info: "Branch of renowned IDC with complete diagnostic facilities",
    services: ["MRI", "CT Scan", "X-Ray", "Ultrasound", "Laboratory Tests"],
    timings: "24/7",
    address: "Main GT Road, Near PSO Pump, Wah Cantt"
},
{
    name: "Rehman Medical Complex Lab",
    lat: 33.76345678901234,
    lng: 72.75678901234567,
    contact: "051-4431234",
    info: "Hospital laboratory with advanced testing facilities",
    services: ["Emergency Tests", "Routine Lab Tests", "COVID Testing"],
    timings: "24/7",
    address: "Near Wah Railway Station, Wah Cantt"
},
{
    name: "Chughtai Lab Wah Branch",
    lat: 33.78123456789012,
    lng: 72.76789012345678,
    contact: "051-4557890",
    info: "Branch of Chughtai Lab network with international standards",
    services: ["Blood Tests", "Molecular Testing", "Histopathology", "Microbiology"],
    timings: "7:00 AM - 11:00 PM",
    address: "Mall Road, Wah Cantt"
},
{
    name: "Wah Medical Center Laboratory",
    lat: 33.75890123456789,
    lng: 72.77901234567890,
    contact: "051-4526677",
    info: "Complete diagnostic center with home sampling",
    services: ["Clinical Pathology", "Radiology", "ECG", "Ultrasound"],
    timings: "8:00 AM - 10:00 PM",
    address: "Saddar Road, Wah Cantt"
},
{
    name: "Al-Shifa Diagnostic Complex",
    lat: 33.77234567890123,
    lng: 72.78012345678901,
    contact: "051-4538899",
    info: "Modern diagnostic facility with latest equipment",
    services: ["CT Scan", "MRI", "X-Ray", "Laboratory Tests"],
    timings: "24/7",
    address: "Near Wah General Hospital, Wah Cantt"
},
{
    name: "Fauji Foundation Laboratory",
    lat: 33.76012345678901,
    lng: 72.77123456789012,
    contact: "051-4511122",
    info: "Hospital laboratory serving military personnel and civilians",
    services: ["Blood Tests", "Urine Tests", "Biochemistry", "Serology"],
    timings: "8:00 AM - 9:00 PM",
    address: "Fauji Foundation Hospital, Wah Cantt"
},
{
    name: "Wah International Laboratory",
    lat: 33.75123456789012,
    lng: 72.76234567890123,
    contact: "051-4533344",
    info: "International standard testing facility",
    services: ["Molecular Biology", "Genetic Testing", "Specialized Tests"],
    timings: "24/7",
    address: "Block B, Commercial Area, Wah Cantt"
},
{
    name: "Care Laboratory & Diagnostic Center",
    lat: 33.77901234567890,
    lng: 72.75345678901234,
    contact: "051-4566677",
    info: "Complete care diagnostic facility with home services",
    services: ["Blood Tests", "X-Ray", "ECG", "Ultrasound"],
    timings: "8:00 AM - 11:00 PM",
    address: "Near Police Station, Wah Cantt"
},
{
    name: "Prime Care Diagnostic Center",
    lat: 33.76567890123456,
    lng: 72.78123456789012,
    contact: "051-4544433",
    info: "Premium diagnostic services with quick reporting",
    services: ["Pathology", "Radiology", "Cardiac Tests", "Ultrasound"],
    timings: "24/7",
    address: "Main Market, Lala Rukh, Wah Cantt"
}
,
    {
        name: "City Medical Lab",
        lat: 33.74123456789012,
        lng: 72.76789012345678,
        contact: "051-665-5577",
        info: "Affordable and reliable diagnostic services",
        services: ["Basic Lab Tests", "X-Ray", "Ultrasound"],
        timings: "8:00 AM - 10:00 PM",
        address: "Near Barrier 4, Wah Cantt"
    },
    {
        name: "Shifa Medical Laboratory",
        lat: 33.77234567123456,
        lng: 72.76345678234567,
        contact: "051-4577890",
        info: "State-of-the-art diagnostic center with digital reporting system",
        services: ["Molecular Testing", "Hormone Analysis", "Drug Testing", "Allergy Tests"],
        timings: "24/7",
        address: "Plaza Road, Near UBL Bank, Wah Cantt"
    },
    {
        name: "Medix Diagnostic Center",
        lat: 33.75678912345678,
        lng: 72.77456789123456,
        contact: "051-4533221",
        info: "Modern lab with automated testing equipment",
        services: ["Blood Banking", "Microbiology", "Clinical Chemistry", "Immunology"],
        timings: "8:00 AM - 11:00 PM",
        address: "Main Market, Block C, Wah Cantt"
    },
    {
        name: "LifeCare Laboratory",
        lat: 33.76789123456789,
        lng: 72.75567891234567,
        contact: "051-4566789",
        info: "Specialized in genetic testing and molecular diagnostics",
        services: ["Genetic Testing", "Cancer Markers", "Prenatal Testing", "PCR Tests"],
        timings: "24/7",
        address: "Near Wah Medical College, Wah Cantt"
    },
    {
        name: "Doctors Laboratory & Diagnostic",
        lat: 33.78012345678912,
        lng: 72.76678912345678,
        contact: "051-4544567",
        info: "Complete diagnostic solution with home sampling",
        services: ["Clinical Pathology", "Radiology", "Ultrasound", "ECG"],
        timings: "7:00 AM - 10:00 PM",
        address: "Kashmir Road, Near PSO Pump, Wah Cantt"
    },
    {
        name: "Smart Lab Diagnostics",
        lat: 33.75345678912345,
        lng: 72.77789123456789,
        contact: "051-4588999",
        info: "Digital lab with online report delivery system",
        services: ["Blood Tests", "COVID Testing", "Hormone Tests", "Liver Function Tests"],
        timings: "24/7",
        address: "Commercial Area, Block B, Wah Cantt"
    },
    
    {
        name: "Advanced Diagnostic Center",
        lat: 33.77123456789012,
        lng: 72.77890123456789,
        contact: "051-908-7654",
        info: "State-of-the-art diagnostic facility with expert staff",
        services: ["MRI", "CT Scan", "Ultrasound", "X-Ray", "Laboratory Tests"],
        timings: "24/7",
        address: "Main Market, Wah Cantt"
    }
];

// Cache DOM elements
const DOM = {
    map: null,
    searchInput: null,
    labList: null,
    recentSearches: null,
    labFinderContainer: null
};

// Global state
let state = {
    searchMarker: null,
    recentSearches: [],
    map: null,
    markers: [],
    currentFilters: {
        service: '',
        timing: '',
        distance: 5
    }
};

// Icon Factory
const IconFactory = {
    createIcon(color) {
        return L.icon({
            iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    },
    get labIcon() {
        return this.createIcon('red');
    },
    get searchIcon() {
        return this.createIcon('blue');
    }
};

// Map Initialization
function initializeMap() {
    state.map = L.map('map', {
        center: CONFIG.DEFAULT_CENTER,
        zoom: CONFIG.DEFAULT_ZOOM,
        minZoom: CONFIG.MIN_ZOOM,
        maxZoom: CONFIG.MAX_ZOOM
    });

    L.tileLayer(CONFIG.TILE_LAYER, {
        attribution: CONFIG.ATTRIBUTION,
        maxZoom: CONFIG.MAX_ZOOM
    }).addTo(state.map);

    initializeLabMarkers();
}

// Lab Markers
function initializeLabMarkers() {
    state.markers = labs.map(lab => {
        const marker = L.marker([lab.lat, lab.lng], { icon: IconFactory.labIcon })
            .addTo(state.map)
            .bindPopup(createLabPopupContent(lab));
        return { lab, marker };
    });
}

function createLabPopupContent(lab) {
    return `
        <div class="popup-content">
            <h3 class="text-lg font-bold mb-2">${lab.name}</h3>
            <p class="mb-1"><strong>Address:</strong> ${lab.address}</p>
            <p class="mb-1"><strong>Contact:</strong> ${lab.contact}</p>
            <p class="mb-1"><strong>Timings:</strong> ${lab.timings}</p>
            <p class="mb-1"><strong>Services:</strong> ${lab.services.join(', ')}</p>
            <p class="mb-2"><strong>Info:</strong> ${lab.info}</p>
            <button onclick="getDirections(${lab.lat}, ${lab.lng})" 
                class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                Get Directions
            </button>
        </div>
    `;
}

// Search Functionality
async function searchLabs() {
    const searchInput = DOM.searchInput.value.trim();
    
    if (!searchInput) {
        showAlert('Please enter a location');
        return;
    }

    try {
        const location = await fetchLocation(searchInput);
        if (!location) {
            showAlert('Location not found. Please try a different search term.');
            return;
        }

        updateMapForSearch(location, searchInput);
        const nearbyLabs = findNearbyLabs(location.lat, location.lon);
        updateLabList(nearbyLabs);
        addToRecentSearches(searchInput);
    } catch (error) {
        console.error('Search error:', error);
        showAlert('Search failed. Please try again.');
    }
}

async function fetchLocation(searchQuery) {
    const encodedQuery = encodeURIComponent(searchQuery);
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodedQuery}&limit=1&addressdetails=1`
    );

    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    return data && data.length > 0 ? data[0] : null;
}

function updateMapForSearch(location, searchInput) {
    const { lat, lon, display_name } = location;

    if (state.searchMarker) {
        state.map.removeLayer(state.searchMarker);
    }

    state.searchMarker = L.marker([lat, lon], { icon: IconFactory.searchIcon })
        .addTo(state.map)
        .bindPopup(createSearchPopupContent(searchInput, display_name))
        .openPopup();

    state.map.setView([lat, lon], 15);
}

// Lab Finder UI
function createLabFinderUI() {
    const container = document.createElement('div');
    container.className = 'lab-finder-overlay';
    container.innerHTML = `
        <div class="lab-finder-container">
            <div class="lab-finder-header">
                <h2>Find Nearby Labs</h2>
                <button id="close-lab-finder" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="lab-finder-filters">
                <select id="service-filter" class="filter-select">
                    <option value="">All Services</option>
                    ${getUniqueServices().map(service => 
                        `<option value="${service}">${service}</option>`
                    ).join('')}
                </select>
                <select id="timing-filter" class="filter-select">
                    <option value="">All Timings</option>
                    <option value="24/7">24/7</option>
                    <option value="day">Day Time Only</option>
                </select>
                <div class="range-filter">
                    <label>Max Distance (km):</label>
                    <input type="range" id="distance-filter" min="1" max="20" value="5">
                    <span id="distance-value">5 km</span>
                </div>
            </div>
            <div id="filtered-lab-list" class="lab-list"></div>
        </div>
    `;
    return container;
}

// Filter Functionality
function initializeFilters() {
    const filters = {
        service: document.getElementById('service-filter'),
        timing: document.getElementById('timing-filter'),
        distance: document.getElementById('distance-filter')
    };

    Object.entries(filters).forEach(([key, element]) => {
        if (element) {
            element.addEventListener('change', () => {
                state.currentFilters[key] = element.value;
                updateFilteredLabs();
            });
        }
    });

    // Initialize distance display
    const distanceValue = document.getElementById('distance-value');
    if (filters.distance && distanceValue) {
        filters.distance.addEventListener('input', () => {
            distanceValue.textContent = `${filters.distance.value} km`;
        });
    }
}

function updateFilteredLabs() {
    getUserLocation()
        .then(userLocation => {
            const filteredLabs = filterLabs(userLocation);
            displayFilteredLabs(filteredLabs);
        })
        .catch(error => {
            // Fallback to map center if geolocation fails
            const mapCenter = state.map.getCenter();
            const filteredLabs = filterLabs({
                lat: mapCenter.lat,
                lng: mapCenter.lng
            });
            displayFilteredLabs(filteredLabs);
        });
}

function filterLabs(userLocation) {
    return labs.filter(lab => {
        const distance = getDistance(
            userLocation.lat, 
            userLocation.lng, 
            lab.lat, 
            lab.lng
        );
        
        return (
            (!state.currentFilters.service || lab.services.includes(state.currentFilters.service)) &&
            (!state.currentFilters.timing || matchesTiming(lab.timings, state.currentFilters.timing)) &&
            (distance <= parseFloat(state.currentFilters.distance))
        );
    }).map(lab => ({
        ...lab,
        distance: getDistance(userLocation.lat, userLocation.lng, lab.lat, lab.lng)
    })).sort((a, b) => a.distance - b.distance);
}


function displayFilteredLabs(filteredLabs) {
    const labListElement = document.getElementById('filtered-lab-list');
    if (!labListElement) return;

    labListElement.innerHTML = filteredLabs.length ? 
        filteredLabs.map(lab => `
            <div class="lab-item">
                <h3>${lab.name}</h3>
                <p>Distance: ${lab.distance.toFixed(1)} km</p>
                <p>Timings: ${lab.timings}</p>
                <p>Services: ${lab.services.join(', ')}</p>
                <div class="lab-actions" style="margin-top: 10px;">
                    <button onclick="showOnMap(${lab.lat}, ${lab.lng})" 
                        style="background-color: #4CAF50; color: white; padding: 5px 10px; margin-right: 10px; border: none; border-radius: 4px; cursor: pointer;">
                        <i class="fas fa-map-marker-alt"></i> Show on Map
                    </button>
                    <button onclick="getDirections(${lab.lat}, ${lab.lng})"
                        style="background-color: #2196F3; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
                        <i class="fas fa-directions"></i> Get Directions
                    </button>
                </div>
            </div>
        `).join('') :
        '<div class="no-results">No labs found matching your criteria</div>';
}




// Recent Searches
function addToRecentSearches(searchInput) {
    state.recentSearches = state.recentSearches.filter(search => search !== searchInput);
    state.recentSearches.unshift(searchInput);
    
    if (state.recentSearches.length > CONFIG.MAX_RECENT_SEARCHES) {
        state.recentSearches.pop();
    }
    
    localStorage.setItem('recentSearches', JSON.stringify(state.recentSearches));
    updateRecentSearchesUI();
}

function updateRecentSearchesUI() {
    if (!DOM.recentSearches) return;

    DOM.recentSearches.innerHTML = state.recentSearches
        .map(search => `
            <div class="recent-search-item p-2 hover:bg-gray-100 cursor-pointer" 
                onclick="document.getElementById('search').value='${search}'; searchLabs();">
                ${search}
            </div>
        `)
        .join('');
}

// Screenshot Functionality
async function takeScreenshot() {
    const loadingIndicator = showLoadingIndicator();
    const controls = document.querySelectorAll('.leaflet-control');
    hideElements(controls);

    try {
        const canvas = await html2canvas(DOM.map, {
            useCORS: true,
            allowTaint: true,
            logging: true,
            windowWidth: DOM.map.scrollWidth,
            windowHeight: DOM.map.scrollHeight
        });

        const screenshot = canvas.toDataURL('image/png');
        saveImage(screenshot);
    } catch (error) {
        console.error('Screenshot error:', error);
        showAlert('Failed to take screenshot. Please try again.');
    } finally {
        showElements(controls);
        removeLoadingIndicator(loadingIndicator);
    }
}

// Utility Functions
function getUniqueServices() {
    const services = new Set();
    labs.forEach(lab => {
        lab.services.forEach(service => services.add(service));
    });
    return Array.from(services);
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

function showAlert(message) {
    alert(message); // Could be replaced with a custom alert implementation
}

function showLoadingIndicator() {
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = 'Loading...';
    loadingDiv.className = 'loading-indicator';
    document.body.appendChild(loadingDiv);
    return loadingDiv;
}

function hideElements(elements) {
    elements.forEach(element => element.style.display = 'none');
}

function showElements(elements) {
    elements.forEach(element => element.style.display = '');
}

function removeLoadingIndicator(indicator) {
    if (document.body.contains(indicator)) {
        document.body.removeChild(indicator);
    }
}

function saveImage(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `map-screenshot-${new Date().toISOString()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Geolocation
// Get user's live location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        const options = {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        };

        // Try HTML5 geolocation
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                // Fallback for Edge browser
                if (error.code === error.PERMISSION_DENIED) {
                    fetch('https://ipapi.co/json/')
                        .then(response => response.json())
                        .then(data => {
                            resolve({
                                lat: parseFloat(data.latitude),
                                lng: parseFloat(data.longitude)
                            });
                        })
                        .catch(() => reject('Location services unavailable'));
                } else {
                    reject('Location services unavailable');
                }
            },
            options
        );
    });
}



// Filter labs based on distance from user
function filterLabsByDistance(userLocation, maxDistance = 5) {
    return labs.map(lab => {
        const distance = getDistance(
            userLocation.lat,
            userLocation.lng,
            lab.lat,
            lab.lng
        );
        return { ...lab, distance };
    })
    .filter(lab => lab.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
}

// Update lab list UI with distance info
function updateLabList(filteredLabs) {
    // Only update lab list if lab finder is active
    const labListElement = document.getElementById('filtered-lab-list');
    if (!labListElement) return;
    
    labListElement.innerHTML = filteredLabs.map(lab => `
        <div class="lab-item">
            <h3>${lab.name}</h3>
            <p>Distance: ${lab.distance.toFixed(1)} km</p>
            <p>Timings: ${lab.timings}</p>
            <div class="lab-actions">
                <button onclick="showOnMap(${lab.lat}, ${lab.lng})" 
                    class="btn-primary">See on Map</button>
                <button onclick="getDirections(${lab.lat}, ${lab.lng})" 
                    class="btn-secondary">Get Directions</button>
            </div>
        </div>
    `).join('');
}



// Get directions using Google Maps
function getDirections(destLat, destLng) {
    getUserLocation().then(userLocation => {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destLat},${destLng}`;
        window.open(url, '_blank');
    });
}

// Center map on specific lab
function showOnMap(lat, lng) {
    state.map.setView([lat, lng], 16);
    const marker = state.markers.find(m => 
        m.lab.lat === lat && m.lab.lng === lng
    );
    if (marker) {
        marker.marker.openPopup();
    }
}


// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    DOM.map = document.getElementById('map');
    DOM.searchInput = document.getElementById('search');
    DOM.labList = document.getElementById('labList');
    DOM.recentSearches = document.getElementById('recentSearches');

    // Load saved data
    state.recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

    // Initialize features
    initializeMap();
    getUserLocation()
    .then(userLocation => {
        const nearbyLabs = filterLabsByDistance(userLocation);
        updateLabList(nearbyLabs);
        
        
        // Add user marker when he searches kuch then
        L.marker([userLocation.lat, userLocation.lng], {
            icon: IconFactory.createIcon('blue')
        })
        .addTo(state.map)
        .bindPopup('Your Location');
        
        // Center map on user uski location ki bsis par
        state.map.setView([userLocation.lat, userLocation.lng], 13);
    })
    .catch(error => {
        console.error('Location error:', error);
        state.map.setView(CONFIG.DEFAULT_CENTER, CONFIG.DEFAULT_ZOOM);
        const nearbyLabs = filterLabsByDistance(CONFIG.DEFAULT_CENTER);
        updateLabList(nearbyLabs);
        showAlert('Unable to get your location. Please enable location services.');
    });
    //yeh  Set up katta hai search functionality
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchLabs();
        });
    }

// matctiming wala fuction hai yeh

function matchesTiming(labTiming, filterTiming) {
    if (!filterTiming) return true;
    if (filterTiming === '24/7') return labTiming === '24/7';
    if (filterTiming === 'day') {
        return labTiming !== '24/7' && labTiming.includes('AM');
    }
    return true;
}


    // Initialize screenshot button wala function hai yeh
    const screenshotButton = document.querySelector('.action-button:has(i.fa-camera)');
    if (screenshotButton) {
        screenshotButton.addEventListener('click', takeScreenshot);
    }

    // Initialize lab finder
    const labFinderButton = document.querySelector('[data-action="lab-finder"]');

    if (labFinderButton) {
        labFinderButton.addEventListener('click', () => {
            const labFinderUI = createLabFinderUI();
            document.body.appendChild(labFinderUI);
            
            setTimeout(() => {
                labFinderUI.classList.add('active');
            }, 10);
            
            initializeFilters();
            updateFilteredLabs(); // This line is new and important
            
            document.getElementById('close-lab-finder').addEventListener('click', () => {
                labFinderUI.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(labFinderUI);
                }, 300);
            });
        });
    }
    

    // Update UI
    updateRecentSearchesUI();
});