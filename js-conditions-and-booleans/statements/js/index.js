console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD == receivedPassword) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 == 0) {
  console.log("its even");
} else {
  console.log("Its odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1;

if (numberOfHotdogs < 5) {
  console.log("2 euros per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

let date = new Date();
let hour = date.getHours();

const statement = hour < 17 ? "Still need to learn..." : "Partytime!!!!";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName == "Jakob" ? "Coach " : userName) + "!";

console.log(greeting);
