function printMessage(message: string): void {
  console.log(`This is my ${message}`);
}

printMessage("first certificate");

//void arrow function
const printMessage2 = (message: string): void => {
  console.log(`This is my ${message}`);
};

printMessage2("first time interacting with typescript");
