interface Movie {
  readonly movieName: string;
  movieDescription: string;
  ratings: number;
  // Optional property hence we us the optional chaining ?.
  genre?: string;
}

const movie1: Movie = {
  movieName: "Code Wars",
  movieDescription:
    "A brilliant programmer is recruited to stop a global cyber attack before it brings down the world's financial systems.",
  ratings: 9.1,
  genre: "Tech Thriller",
};

console.log(movie1);

// function interface
console.log("\nFunction Interface");
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(78, 79));

const subtract: MathOperation = (a, b) => a - b;
console.log(subtract(1782, 79));
