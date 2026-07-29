"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    bark() {
        console.log("woof woof");
    }
}
class Cat {
    meow() {
        console.log("meow meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
//# sourceMappingURL=instanceofOperator.js.map