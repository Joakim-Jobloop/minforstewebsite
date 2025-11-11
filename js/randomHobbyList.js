const hobbiesList = document.getElementById("hobbyListPrint");
const navbar = document.getElementById("navbar");

const jsonData = async () => {
  try {
    const response = await fetch("data/hobbies.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const data = await jsonData();

console.log(data);

// const hobbyType = "Kreative";
// const randomHobby = 0;

function randomHobbyType() {
  const allHobbyTypes = Object.keys(data.hobbyer);
  const randomHobbyIndex = Math.floor(Math.random() * allHobbyTypes.length);
  return allHobbyTypes[randomHobbyIndex];
}

const hobbyArrayLength = data.hobbyer[randomHobbyType()].length; // Gir lengden til en tilfeldig hobbykategori

const randomHobbyIndex = Math.floor(Math.random() * hobbyArrayLength);

const randomHobbyFromData = data.hobbyer[randomHobbyType()][randomHobbyIndex];

console.log(randomHobbyFromData);

// function a() {
//   const b = Object.keys(data.hobbyer);
//   const c = Math.floor(Math.random() * b.length);
//   const d = b[c];
//   const e = data.hobbyer[d].length;
//   const f = Math.floor(Math.random() * e);
//   return data.hobbyer[d][f];
// }

// console.log(a());
