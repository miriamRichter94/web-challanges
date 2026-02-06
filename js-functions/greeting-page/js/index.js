console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  time = new Date().getHours();
  greeting = "";

  if (time >= 6 && time <= 12) {
    greeting = "Good Morning";
  } else if (time >= 13 && time <= 18) {
    greeting = "Good Afternoon";
  } else if (time >= 19 && time <= 22) {
    greeting = "Good Evening";
  } else if (time == 23 && time <= 5) {
    greeting = "Good night";
  }

  return greeting;
}

function getDayColor() {
  // Code here

  day = new Date().getDay();
  color = "";
  if (day == 1) {
    color = "darkgray";
  } else if (day >= 2 && day <= 5) {
    color = "lightblue";
  } else {
    color = "hotpink";
  }

  return color;
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
