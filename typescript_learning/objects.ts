const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Shem",
  lastName: "Ndaro",
  age: 21,
};

console.log(`Name: ${person.firstName} ${person.lastName} - Age ${person.age}`);

// Function parameters

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Steve",
    age: 29,
    location: "Kenya",
  };
}

const res = printUser();
console.log(res);
