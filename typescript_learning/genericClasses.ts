class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, Shem");
console.log(stringBox.getContent());

stringBox.setContent("New content Added");
console.log(stringBox.getContent());

const numberBox = new Box<number>(24);
console.log(numberBox.getContent());

numberBox.setContent(300);
console.log(numberBox.getContent());
