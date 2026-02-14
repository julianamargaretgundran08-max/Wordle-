// --- CONFIGURATION ---
const PUBLIC_KEY = "a8ICeA2dOVOGUaZb7"; // Your NEW Public Key
const SERVICE_ID = "service_deqbac8";
const TEMPLATE_ID = "template_nef26y9";

// --- GITHUB INITIALIZATION ---
// This waits for the page and the EmailJS library to be 100% ready
window.onload = function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS Initialized with NEW key!");
    } else {
        alert("CRITICAL: EmailJS library failed to load. Check your index.html link!");
    }
};

function sendTheEmail() {
    console.log("Attempting to send using NEW key...");
    
    // The specific line you need
    emailjs.send(SERVICE_ID, TEMPLATE_ID)
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
        console.error("FAILED...", err);
        // If it fails on GitHub, this will tell you exactly why
        alert("Send Error: " + JSON.stringify(err));
    });
}

// --- VICTOR SCREEN TRIGGER ---
function showFinalScreen() {
    sendTheEmail(); // Fires the email command

    const container = document.getElementById("game-container");
    if(container) container.style.opacity = "0";
    
    setTimeout(() => {
        if(container) container.style.display = "none";
        const final = document.getElementById("final-screen");
        if(final) final.style.display = "flex";
        
        const sig = document.getElementById("signature");
        if(sig) sig.innerText = "- Yours Truly"; 
    }, 500);
}