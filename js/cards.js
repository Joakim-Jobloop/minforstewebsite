const cardContainer = document.getElementById("cardContainer");

async function fetchPeople() {
  const people = await fetch("data/people.json");
  const response = people.json();
  return response;
}

const data = await fetchPeople();

console.log(data);

data.map((person) => {
  cardTemplate(person);
});

function cardTemplate(person) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h2 class="cardHeading">${person.name}</h2>
  <p>Age: ${person.age}</p>
  <p>Gender: ${person.isMale ? "Male" : "Female"}</p>
  <p>Hobbies: ${person.hobbies.join(", ")}</p>`;
  cardContainer.appendChild(card);
}
