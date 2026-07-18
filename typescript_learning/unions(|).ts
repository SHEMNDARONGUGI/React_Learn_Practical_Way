let password: string | number = 20;

type UserInformation = {
  first: string;
  last: string;
  age: number;
};

type AccountInfo = {
  email: string;
  password: string;
};

let userDetails: UserInformation | AccountInfo = {
  email: "test@gmail.com",
  password: "password123",
};

const items: (number | string)[] = [1, 5, 3, "Hello", "Greeting"];
console.log(items);
