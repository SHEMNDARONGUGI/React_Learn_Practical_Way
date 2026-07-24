// Normal functions

function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printBoolean(
  item: boolean,
  defaultValue: boolean,
): [boolean, boolean] {
  return [item, defaultValue];
}

const numberValue = printNumber(12, 20);
const stringValue = printString("Python", "Java");
const booleanValue = printBoolean(false, true);

console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);
console.log("============ Generic Functions ============");

// Generic Functions
// type perimeter area, value perimeter area
function printValue<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

const numValue = printValue<number>(10, 20);
const strValue = printValue<string>("C++", "C#");
const boolValue = printValue<boolean>(false, true);

console.log(numValue);
console.log(strValue);
console.log(boolValue);
