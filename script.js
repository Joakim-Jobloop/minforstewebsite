//? Henter inn en referanse til h1 tagen i html filen:
const heading = document.getElementById("heading");

//? En kode som kjører når den blir "kalt på":
function changeText() {
  //? Endrer teksten i h1
  heading.innerText = "Du har trykket på knappen";

  //? Endrer bakgrunnsfarge i h1 via style
  heading.style.backgroundColor = "red";
}

//!
//! VARIABLER
//!

//? En let variabel er en variabel som kan redefineres
let navn = "Anne";

//? En const variabel er en variabel som IKKE kan redefineres
const etternavn = "Jaha";

console.log(navn);

//! Her blir let variabelen redefinert
navn = "Oda";

console.log(navn);

console.log(etternavn);

//! Koden under vil gi feilmelding fordi en const variabel ikke kan redefineres
// etternavn = "Nehei!";

// console.log(etternavn);
////////////!
//! DATATYPER
////////////!

//! STRING
let string =
  "Here is a string, wiTH alSo some numbers which will be cONidered a string 4647323";

const stringResult = string.charAt();
// const stringResult = string.split("");

console.log(string);
console.log(stringResult);

function reverseString(str) {
  let charArray = str.split("");
  let reversedArray = charArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

console.log(
  reverseString(
    "Here is a string, wiTH alSo some numbers which will be cONidered a string 4647323"
  )
);

//! NUMBER
let number = 4732568;

console.log(number);

//! ARRAY
const array = [321, 6543, "hei"];

console.log(array);

console.log(array[2]);

//! OBJECT

const object = {
  firstName: "Joakim",
  lastName: "Villo",
  age: 37,
};

console.log(object);

const person = {
  firstName: "Bob",
  lastName: "Marley",
  age: 120,
  hobbies: ["Ganja", "Music", "Jamaica"],
};

console.log(person);

console.log(person.age);

console.log(person.hobbies[1]);

const personArray = [object, person];

console.log(personArray);

// console.log(8786 + number);

// console.log("This is the number:", number);

//! BOOLEAN

const truth = true;
const lie = false;

console.log(truth);
console.log(lie);

const isTruthyValue = "undefined" ? true : false;
const isFalseValue = "" ? true : false;

console.log(isTruthyValue);
console.log(isFalseValue);
