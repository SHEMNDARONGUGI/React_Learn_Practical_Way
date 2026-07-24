interface MovieDetails {
  readonly name: string;

  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: "Code Wars",
  genre: "Tech thriller",
  ratings: 10,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number,
  ): string | number {
    return `
    Movie Name: ${name}, 
    price: ${price},
    ratings: ${ratings}`;
  },
};

const resp = movie1.printMovieInfo("Escape From Sobibor", 1000, 8.5);
console.log(resp);
