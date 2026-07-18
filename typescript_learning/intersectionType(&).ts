type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type newUser = UserInfo & AccountDetails;

const userShem: newUser = {
  first: "Shem",
  last: "Ngugi",
  age: 22,
  email: "test@gmail.com",
  password: "asdfjkl;V",
};

console.log(
  `Name: ${userShem.first} ${userShem.last} Age: ${userShem.age} Email: ${userShem.email} Password: ${userShem.password}`,
);
