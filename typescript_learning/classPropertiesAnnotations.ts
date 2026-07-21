class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Shem", 21);
const person2 = new Person("Mercy", 20);
console.log(person);
