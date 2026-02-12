console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const image = document.createElement("img");

    if (i <= filledStars) {
      image.src = "assets/star-filled.svg";
    } else {
      image.src = "assets/star-empty.svg";
    }
    starContainer.append(image);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(Math.random() * (5 - 0) + 0);
