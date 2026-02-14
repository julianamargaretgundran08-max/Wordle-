// 1. Setup your IDs at the top
const PUBLIC_KEY = "JKqFqwhz7D98snEv6"; 
const SERVICE_ID = "service_deqbac8";
const TEMPLATE_ID = "template_nef26y9";

// 2. Initialize EmailJS
emailjs.init(PUBLIC_KEY);

// ... (Your other game variables like firstAnswer, currentRow, etc.) ...

// 3. The function that triggers the email
function sendTheEmail() {
    // This is the line you requested, integrated into the script
    emailjs.send(SERVICE_ID, TEMPLATE_ID)
    .then((response) => {
       console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
       console.error("Failed to send email:", error);
    });
}

// 4. Update your victory function
function showFinalScreen() {
    // Call the email function here
    sendTheEmail();

    // Your existing code to change the screen
    document.getElementById("game-container").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("final-screen").style.display = "flex";
        document.getElementById("signature").innerText = "- Forever Yours"; 
    }, 500);
}

// ... (The rest of your Wordle logic) ...