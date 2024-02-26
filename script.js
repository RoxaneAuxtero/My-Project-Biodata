
// JavaScript function to display current date and time
function displayDateTime() {
    var dates = new Date();
    var times = "Date and Time: " + dates.toLocaleString();
    document.getElementById("dateTime").innerText = times;
}

// Call the function when the page loads
window.onload = function() {
    displayDateTime();
};
