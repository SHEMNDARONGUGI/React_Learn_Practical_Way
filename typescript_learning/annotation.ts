// Typescript annotations
type Person = {
  name: string;
};

const person: Person = {
  name: "Shem",
};

console.log(person.name);

let myFullName: string = "Shem Ndaro Ngugi";
myFullName = "Ndaro Ngugi Shem";
console.log(myFullName);

let myAge: number = 21;
console.log(`my name is: ${myFullName}
I am: ${myAge}`);

let tsHard: boolean = false;
console.log(tsHard);
