// A simple TypeScript class with a constructor and a single method
class MyClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// A function that creates a new instance of the `MyClass` class and calls its `sayHello` method
function main() {
  const person = new MyClass("Alice");
  person.sayHello();
}
