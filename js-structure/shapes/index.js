import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
import Square from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle(getRandomColor);

const squareElement = Square(getRandomColor);

const pentagonElement = Pentagon(getRandomColor);

root.append(circleElement, squareElement, pentagonElement);
