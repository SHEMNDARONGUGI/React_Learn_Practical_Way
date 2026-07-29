"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientAccount {
    _clientBalance = 0;
    get clientBalance() {
        return this._clientBalance;
    }
    set clientBalance(value) {
        this._clientBalance = value;
    }
}
const myInstance = new ClientAccount();
console.log(`Current Value: ${myInstance.clientBalance}`);
let deposit = 10000;
myInstance.clientBalance = deposit;
console.log(`Current Value: ${myInstance.clientBalance}`);
//# sourceMappingURL=gettersSetters.js.map