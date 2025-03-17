interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

const user = {
  name: "Alice",
  age: 30
};

greet(user); // Outputs: Hello, Alice! You are 30 years old.
