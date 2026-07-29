"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) { }
}
let x;
function neverReturns() {
    while (true)
        ;
}
x = neverReturns();
//# sourceMappingURL=never.js.map