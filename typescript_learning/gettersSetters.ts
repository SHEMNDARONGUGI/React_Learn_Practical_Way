class ClientAccount {
  private _clientBalance: number = 0;

  get clientBalance(): number {
    return this._clientBalance;
  }

  set clientBalance(value: number) {
    this._clientBalance = value;
  }
}

const myInstance = new ClientAccount();

console.log(`Current Value: ${myInstance.clientBalance}`);

let deposit = 10000;
myInstance.clientBalance = deposit;

console.log(`Current Value: ${myInstance.clientBalance}`);
