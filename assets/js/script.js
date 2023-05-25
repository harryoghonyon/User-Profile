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
let body = document.querySelector("body");

newProfileBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (e) => {
  if (e.target.className === "overlay") {
    overlay.style.display = "none";
  }
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

let users = [];

const addUser = () => {
  const user = {
    id: users.length + 1,
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    occupation: document.querySelector("#occupation").value,
  };

  users.push(user);

  renderUsers();

  overlay.style.display = "none";
};

const renderUsers = () => {
  let template = "";

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    template += `
      <div class="user-profile-wrap">
      <div class="user-profile">
        <div class="user-profile-more-wrap">
          <div class="profile-details">
            <p class="profile-details">${user.name}</p>
            <p class="profile-details">${user.age} Years</p>
            <p class="profile-details">${user.occupation}</p>
          </div>
          <img class="more-icon" src="./assets/img/more.svg" alt="" />
        </div>
      </div>
    </div>
    `;
  }
  const empty = `<div class="empty-profile-wrap">
  <img
    class="empty-profile-img"
    src="./assets/img/empty profile icon.svg"
    alt=""
  />
</div>`;

  document.querySelector("#users").innerHTML =
    template === "" ? empty : template;
  saveData();
};

const saveData = () => localStorage.setItem("users", JSON.stringify(users));
const loadData = () => {
  users = JSON.parse(localStorage.getItem("users")) || [];

  renderUsers();
};

const form = document.querySelector(".profile-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser();
  form.reset();
});

document.addEventListener("DOMContentLoaded", loadData);
