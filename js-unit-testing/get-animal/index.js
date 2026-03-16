export function getAnimal(animal = "") {
  switch (animal) {
    case "dogs":
      return `I like ${animal}!`;
    case "cats":
      return `I totally love ${animal}!`;
    case "":
      return `I do not like animals at all!`;
    default:
      return "${animal} are okay";
  }
}
