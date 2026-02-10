console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

document.body.append(article);
article.classList.add("post");
paragraph.classList.add("post__content");
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
article.append(paragraph);
footer.classList.add("post__footer");
article.append(footer);
span.classList.add("post__username");
span.textContent = "@RavenVale";
footer.append(span);
button.classList.add("post__button");
button.textContent = "♥ Like";
footer.append(button);
button.type = "button";
//button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button2");

const likeButton2 = document.querySelector('[data-js="like-button2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);
