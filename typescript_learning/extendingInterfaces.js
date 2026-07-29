"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie1 = {
    name: "Code Wars",
    genre: "Tech thriller",
    ratings: 10,
    printMovieInfo(name, price, ratings) {
        return `
    Movie Name: ${name}, 
    price: ${price},
    ratings: ${ratings}`;
    },
};
const resp = movie1.printMovieInfo("Escape From Sobibor", 1000, 8.5);
console.log(resp);
//# sourceMappingURL=extendingInterfaces.js.map