export class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(this);
  }
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
}
