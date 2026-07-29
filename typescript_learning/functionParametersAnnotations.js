"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Regular fuction
function addOne(num) {
    return num + 1;
}
const res = addOne(3);
console.log(res);
// Arrow function
const double = (x, y) => x * y;
const result = double(2, 60);
console.log(result);
//Function expression
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Shem"));
//# sourceMappingURL=functionParametersAnnotations.js.map