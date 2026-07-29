"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie1 = {
    movieName: "Code Wars",
    movieDescription: "A brilliant programmer is recruited to stop a global cyber attack before it brings down the world's financial systems.",
    ratings: 9.1,
    genre: "Tech Thriller",
};
console.log(movie1);
// function interface
console.log("\nFunction Interface");
const add = (a, b) => a + b;
console.log(add(78, 79));
const subtract = (a, b) => a - b;
console.log(subtract(1782, 79));
//Methods inside of interface
console.log("\nMethods inside of interface");
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}
const Steve = {
    firstName: "Steve",
    lastName: "Mwangi",
    age: 30,
    sayHello() {
        console.log("Welcome");
    },
};
const Caleb = {
    firstName: "Caleb",
    lastName: "Maina",
    age: 32,
    sayHello() {
        console.log("What's Popping");
    },
};
greet(Steve);
greet(Caleb);
//# sourceMappingURL=interfaceMovie.js.map