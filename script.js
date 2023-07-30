// Function to get the current Unix time in seconds
function getCurrentUnixTime() {
    return Math.floor(Date.now() / 1000);
}

// Function to update the displayed Unix time
function updateUnixTime() {
    const unixTimeElement = document.getElementById("unixTime");
    unixTimeElement.textContent = getCurrentUnixTime();
}

// Update the Unix time initially
updateUnixTime();

// Update the Unix time every second
setInterval(updateUnixTime, 1000);
