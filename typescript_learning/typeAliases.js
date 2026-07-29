"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printUserInfo = (user) => {
    return `Name: (${user.name}) - Age: (${user.age}) Location: (${user.location})`;
};
const response = printUserInfo({ name: "Shem", age: 21, location: "NYC" });
console.log(response);
//# sourceMappingURL=typeAliases.js.map