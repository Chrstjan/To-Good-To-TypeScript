//TypeScript preset types

//Void means that the function dosen't return anything
function x(num1: number, num2: number): void {

}

//This variable must be an array with numbers
let nums: number[] = [123, 456];
//This variable must be a data object
let obj: object;

//Custom types
//Custom types should be in a types.ts file
type Animal = {
    name: string,
    age: number,
    color: string[] | string; //Must be an array of strings or just a string
    legs?: number; //? = optinal (legs = number | legs = undefined)
}

const dog: Animal = {
    name: "Alba",
    age: 6.5,
    color: ["red", "brown"],
    legs: 4
}

const printAnimal = (animal: Animal) => {
    console.log(animal.name, animal.age);
    const x = animal.legs! - 5; // ! = bang value. It tells typescript that the value is defined even if it's undefined
    const y = (animal.legs ? animal.legs : 0) - 5; // This says if legs is not undefined it will use the value. else it will use zero as a default
}

printAnimal(dog);

//Nesting types
type Farm = {
    animals: Animal[]
    animalNamesToObjects: {
        //This maps the name key as a string to the Animal type
        [name: string]: Animal
    }
}

//combining types
//This combines the two types. So for it to log it must have all the values from Animal & Monkey 
type Monkey = {
    diet: string;
} & Animal;

//Edge cases
const s = new Set<number>();

//Interfaces
type Fish = {
    name: string,
    swim: () => void; //Void means the function won't return anything
}

type Dog = {
    name: string,
    bark: () => void; //Void means the function won't return anything
}

//Used when you want to view the object of another type in this example name of the dog & fish
interface NewAnimal {
    name: string;
}

const printName = (animail: NewAnimal) => {
    console.log(animail.name);
    
}

//Enums

//Good for switch cases!
//Kinda works like a placeholder
enum ShirtSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}

const getShirtPrice = (shirtSize: ShirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
}

//Type guard & type checking 

//This converts the animal function argument to the Fish to type, and checks if that type has the swim method
//If the swim method is undefined, then it will return false and would convert it to the dog type instead
const isFish = (animal: Fish | Dog): animal is Fish => {
    return (animal as Fish).swim !== undefined
}

//This runs different methods depending on what type the animal function argument is equal to from the isFish type guard
const callAnimalFunc = (animal: Fish | Dog) => {
    if(isFish(animal)) animal.swim()
    else animal.bark()
}

//ignoring type checking
let a: number = 2;

// @ts-ignore
x = "hello";