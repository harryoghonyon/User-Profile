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

let newProfileBtn = document.querySelector(".new-profile");
let overlay = document.querySelector(".overlay");

newProfileBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

// Select the day and night icons
let dayIcon = document.querySelector(".day-icon");
let nightIcon = document.querySelector(".night-icon");
let thecurrentHour = new Date().getHours();

// Display the appropriate icon based on the current hour

if (currentHour >= 5 && currentHour <= 20) {
  dayIcon.style.display = "block";
  nightIcon.style.display = "none";
} else {
  dayIcon.style.display = "none";
  nightIcon.style.display = "block";
}
