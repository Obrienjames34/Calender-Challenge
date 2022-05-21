var calendarEl = document.getElementById("calendar");
var currentDayEl = document.getElementById("currentDay");
var taskInfoArray = [];
//line of code is to retrieve item from local storage.
var storeEvents = JSON.parse()
//display the current date at the top of the page using moment.js
const setCurrentDay = () => {
  var currentDay = moment().format("dddd, MMM Do, YYYY");
  currentDayEl.textContent = currentDay;
};
//dynamically generate each element and add event listeners on the save button.
const generateHours = () => {
  for (i = 0; i < 9; i++) {
    var hourBlockEl = document.createElement("div");
    hourBlockEl.classList = "row";
    calendarEl.appendChild(hourBlockEl);
    var hourTextEl = document.createElement("p");
    hourTextEl.classList = "col-2";
    if (i + 9 < 12) {
      hourTextEl.textContent = `${i + 9} AM`;
    } else if (i + 9 == 12) {
      hourTextEl.textContent = `${i + 9} PM`;
    } else {
      hourTextEl.textContent = `${i - 3} PM`;
    }
    var eventEl = document.createElement("input");
    eventEl.classList = "col-8";
    var saveButtonEl = document.createElement("button");
    saveButtonEl.classList = "col-2 btn-primary";
    saveButtonEl.textContent = "Save";
    saveButtonEl.addEventListener("click", (event) => {});
    hourBlockEl.appendChild(hourTextEl);
    hourBlockEl.appendChild(eventEl);
    hourBlockEl.appendChild(saveButtonEl);
  }
};
//i is a counter. it is equal to the number of times the code has looped + the initial the value of i.
//save the task to localStorage if the save button is clicked. ensure that localStorage gets saved events.
const storeEvents = (array) => {
  localStorage.setItem("calendarEvents", JSON.stringify(array));
};
//use bootstrap to change the color of the hour elements if that time is in the past, present, or future
setCurrentDay();
generateHours();