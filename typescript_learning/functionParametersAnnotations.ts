// Regular fuction
function addOne(num: number) {
  return num + 1;
}

const res = addOne(3);
console.log(res);

// Arrow function
const double = (x: number, y: number) => x * y;
const result = double(2, 60);
console.log(result);

//Function expression

const greet = function (name: string) {
  return `Hello, ${name}!`;
};
console.log(greet("Shem"));
