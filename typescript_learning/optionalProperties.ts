type User = {
  name: string;
  age?: number;
  readonly location: string;
};

const user: User = {
  name: "Shem",
  age: 30,
  location: "Kenya",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
