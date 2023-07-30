// Function to get the current Unix time in seconds
function getCurrentUnixTime() {
    return Math.floor(Date.now() / 1000);
}

// Function to display the Unix time when the page loads
function displayUnixTime() {
    const unixTimeElement = document.getElementById("unixTime");
    unixTimeElement.textContent = getCurrentUnixTime();
}

// Call the displayUnixTime function when the page loads
displayUnixTime();
