// Regular function
function double1(x: number): number {
  return x * x;
}

const resp = double1(89);
console.log(resp);

//Arrow function
const double2 = (x: number): number => x * x;

console.log(double2(4));
