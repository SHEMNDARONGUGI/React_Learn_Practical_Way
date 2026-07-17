type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) - Age: (${user.age}) Location: (${user.location})`;
};

const response = printUserInfo({ name: "Shem", age: 21, location: "NYC" });
console.log(response);
