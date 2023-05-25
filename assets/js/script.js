let currentDate = new Date();

let currentDayIndex = currentDate.getDay();

let dayNames = ["Sun,", "Mon,", "Tue,", "Wed,", "Thur,", "Fri,", "Sat,"];

let currentDayName = dayNames[currentDayIndex];

let todayElement = document.querySelector(".today-date");
todayElement.textContent = currentDayName;

let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();

let hourElement = document.querySelector(".hr-live-time");
hourElement.textContent = currentHour;

let minuteElement = document.querySelector(".mins-live-time");
minuteElement.textContent = currentMinute;

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
  overlay.style.display = "flex";
});

let dayIcon = document.querySelector(".day-icon");
let nightIcon = document.querySelector(".night-icon");

if (currentHour >= 5 && currentHour <= 20) {
  dayIcon.style.display = "block";
  nightIcon.style.display = "none";
} else {
  dayIcon.style.display = "none";
  nightIcon.style.display = "block";
}
