"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    content;
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("Hello, Shem");
console.log(stringBox.getContent());
stringBox.setContent("New content Added");
console.log(stringBox.getContent());
const numberBox = new Box(24);
console.log(numberBox.getContent());
numberBox.setContent(300);
console.log(numberBox.getContent());
//# sourceMappingURL=genericClasses.js.map