"use strict";
// Normal functions
Object.defineProperty(exports, "__esModule", { value: true });
function printNumber(item, defaultValue) {
    return [item, defaultValue];
}
function printString(item, defaultValue) {
    return [item, defaultValue];
}
function printBoolean(item, defaultValue) {
    return [item, defaultValue];
}
const numberValue = printNumber(12, 20);
const stringValue = printString("Python", "Java");
const booleanValue = printBoolean(false, true);
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);
console.log("============ Generic Functions ============");
// Generic Functions
// type perimeter area, value perimeter area
function printValue(item, defaultValue) {
    return [item, defaultValue];
}
const dog1 = printValue({ name: "Bailey", breed: "Labrador" }, { name: "Phoebe", breed: "Huskey" });
console.log(dog1);
//# sourceMappingURL=generics.js.map