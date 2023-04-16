export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const taro = new Person('たろう', 30);
console.log(taro);
console.log(taro.profile());
// const hanako = new Person();
