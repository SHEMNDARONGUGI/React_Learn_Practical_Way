"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersonData {
    first;
    last;
    personAge;
    personSalary;
    constructor(first, last, personAge, personSalary) {
        this.first = first;
        this.last = last;
        this.personAge = personAge;
        this.personSalary = personSalary;
    }
    getFullDetails() {
        return `Fullname: ${this.first} ${this.last} Age: ${this.personAge}, Salary: ${this.personSalary}`;
    }
}
let firstPerson = new PersonData("Shem", "Ngugi", 21, 500000);
console.log(firstPerson.getFullDetails());
class SalaryList extends PersonData {
    constructor(first, last, personAge, personSalary) {
        super(first, last, personAge, personSalary);
    }
    getSalary() {
        return `
============================================================ 

Fullname: ${this.first} ${this.last}
Salary: ${this.personSalary}`;
    }
}
let person1Salary = new SalaryList("Glory", "Wanjiru", 21, 100000);
console.log(person1Salary.getSalary());
let person2Salary = new SalaryList("John", "Doe", 25, 23000);
console.log(person2Salary.getSalary());
//# sourceMappingURL=accessModifiers.js.map