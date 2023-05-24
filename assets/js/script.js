// Get the current date and time
let currentDate = new Date();

// Get the current day as an index (0-6)
let currentDayIndex = currentDate.getDay();

// Array of day names
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

// Get the current day name
let currentDayName = dayNames[currentDayIndex];

// Update the element with the current day
let todayElement = document.querySelector(".today-date");
todayElement.textContent = currentDayName;

// Get the hour and minute values
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();

// Update the hour element
let hourElement = document.querySelector(".hr-live-time");
hourElement.textContent = currentHour;

// Update the minute element
let minuteElement = document.querySelector(".mins-live-time");
minuteElement.textContent = currentMinute;

// Update the seconds element
const updateSecs = () => {
  // Get the current date and time
  let currentDate = new Date();

  // Get the second value
  let currentSecs = currentDate.getSeconds();

  // Update the seconds element
  let secondsElement = document.querySelector(".secs-live-time");
  secondsElement.textContent = currentSecs;
};

updateSecs();

setInterval(updateSecs, 1000);
