"use strict";
// let firstName = "Umar";
// let lastName = "zee";
// let city = "New York";
// let age = 20;
// let country = "usa";

// Dont Repeat yourself D.R.Y

let favoriteFood = "Pizza";
let favoriteDrink = "Water";
let favoriteDessert = "Icecream";
let favoriteColor = "Blue";

// 1- String Array

let myFavStuff = [favoriteFood, favoriteDrink, favoriteDessert, favoriteColor];
console.log(myFavStuff);

// Indexing
console.log(myFavStuff[0]);
console.log(myFavStuff[3]);
console.log(myFavStuff[3][2]);
console.log(myFavStuff.length);

// Adding to Array
myFavStuff.push("Red");
myFavStuff.push("Green");
console.log(myFavStuff);

// Removing from Array
myFavStuff.pop();
console.log(myFavStuff);

// 2- Number Array
const AssignedNumbers = [100, 300, 500, 700, 900];
console.log(AssignedNumbers);

// Shift
AssignedNumbers.shift();
console.log(AssignedNumbers);
// Unshift
AssignedNumbers.unshift(50);
console.log(AssignedNumbers);

// 3- Mixed Array

const mixedArray = [
  "Pizza",
  100,
  true,
  "Coke",
  500,
  false,
  "Icecream",
  700,
  900,
];
console.log(mixedArray);

// slicing a Value from Array
console.log(mixedArray.slice(6, 7));
