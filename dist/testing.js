"use strict";
//TypeScript preset types
//Void means that the function dosen't return anything
function x(num1, num2) {
}
//This variable must be an array with numbers
let nums = [123, 456];
//This variable must be a data object
let obj;
const dog = {
    name: "Alba",
    age: 6.5,
    color: ["red", "brown"],
    legs: 4
};
const printAnimal = (animal) => {
    console.log(animal.name, animal.age);
    const x = animal.legs - 5; // ! = bang value. It tells typescript that the value is defined even if it's undefined
    const y = (animal.legs ? animal.legs : 0) - 5; // This says if legs is not undefined it will use the value. else it will use zero as a default
};
printAnimal(dog);
//Edge cases
const s = new Set();
const printName = (animail) => {
    console.log(animail.name);
};
//Enums
//Good for switch cases!
//Kinda works like a placeholder
var ShirtSize;
(function (ShirtSize) {
    ShirtSize["Small"] = "Small";
    ShirtSize["Medium"] = "Medium";
    ShirtSize["Large"] = "Large";
})(ShirtSize || (ShirtSize = {}));
const getShirtPrice = (shirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
};
//Type guard & type checking 
//This converts the animal function argument to the Fish to type, and checks if that type has the swim method
//If the swim method is undefined, then it will return false and would convert it to the dog type instead
const isFish = (animal) => {
    return animal.swim !== undefined;
};
//This runs different methods depending on what type the animal function argument is equal to from the isFish type guard
const callAnimalFunc = (animal) => {
    if (isFish(animal))
        animal.swim();
    else
        animal.bark();
};
//ignoring type checking
let a = 2;
// @ts-ignore
x = "hello";
