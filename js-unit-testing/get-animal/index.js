export function getAnimal(animal = "") {
  switch (animal) {
    case "cats":
      return `I totally love cats!`;
    case "":
      return `I do not like animals at all!`;
    default:
      return `I like ${animal}!`;
  }
}
