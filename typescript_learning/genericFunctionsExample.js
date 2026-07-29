"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Getting random key value pairs
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair(stringObject);
console.log(randomStringPair);
const numberObject = { one: 1, two: 2, three: 3 };
const randomNumberPair = getRandomKeyValuePair(numberObject);
console.log(randomNumberPair);
//# sourceMappingURL=genericFunctionsExample.js.map