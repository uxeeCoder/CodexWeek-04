" use strict ";

let firstName = "Umar";
document.write(firstName);
console.log(firstName);

let lastName = "Zee";
document.write(lastName);
console.log(lastName);

let fullName = firstName + " " + lastName;
document.write(fullName);
console.log(fullName);

let age = 40;
document.write(age);
console.log(age);

let isFavoriteFood = true;
document.write(isFavoriteFood);
console.log(isFavoriteFood);

let favoriteFood;
document.write(favoriteFood);
console.log(favoriteFood);

let favoritePlace = null;
document.write(favoritePlace);
console.log(favoritePlace);

console.log(
  firstName + " " + lastName + " " + "is" + " " + age + " " + "years old"
);

let newFullName = `${firstName} ${lastName}`;
console.log(newFullName);

let newSentence = `${firstName} ${lastName} is ${age} years old`;
console.log(newSentence);
