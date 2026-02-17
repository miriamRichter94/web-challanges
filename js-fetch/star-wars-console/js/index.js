console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  console.log(response);
  console.log(data);
  console.log(data.results);

  const eyeColor = results.find((result) => result.name == "R2-D2").eye_color;

  console.log(eyeColor);
}

fetchData();
