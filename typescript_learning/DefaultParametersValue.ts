function greeting(person: string = "Visitor") {
  return `Hello ${person}`;
}

const sayGreet = greeting("Shem");
console.log(sayGreet);
