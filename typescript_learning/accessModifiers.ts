class PersonData {
  public first: string;
  public last: string;
  private personAge: number;
  protected personSalary: number;

  constructor(
    first: string,
    last: string,
    personAge: number,
    personSalary: number,
  ) {
    this.first = first;
    this.last = last;
    this.personAge = personAge;
    this.personSalary = personSalary;
  }

  getFullDetails(): string {
    return `Fullname: ${this.first} ${this.last} Age: ${this.personAge}, Salary: ${this.personSalary}`;
  }
}

let firstPerson = new PersonData("Shem", "Ngugi", 21, 500000);
console.log(firstPerson.getFullDetails());

class SalaryList extends PersonData {
  constructor(
    first: string,
    last: string,
    personAge: number,
    personSalary: number,
  ) {
    super(first, last, personAge, personSalary);
  }
  getSalary(): string {
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
