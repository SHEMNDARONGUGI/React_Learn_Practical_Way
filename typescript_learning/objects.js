"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    firstName: "Shem",
    lastName: "Ndaro",
    age: 21,
};
console.log(`Name: ${person.firstName} ${person.lastName} - Age ${person.age}`);
// Function parameters
function printUser() {
    return {
        name: "Steve",
        age: 29,
        location: "Kenya",
    };
}
const res = printUser();
console.log(res);
//# sourceMappingURL=objects.js.map