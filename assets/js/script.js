// Get the current date and time
let currentDate = new Date();

// Get the hour and minute values
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();

// Update the hour element
let hourElement = document.querySelector(".hr-live-time");
hourElement.textContent = currentHour;

// Update the minute element
let minuteElement = document.querySelector(".mins-live-time");
minuteElement.textContent = currentMinute;
