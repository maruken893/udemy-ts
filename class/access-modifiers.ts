export {};

class Person {
  // publicはデフォルトで設定されるため、省略する
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;  // ageはprivateなので、使用できない
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

const taro = new Person('たろう', 30, 'JP');

console.log(taro.name);
console.log(taro.profile());
// console.log(taro.age);  // ageはprivateなためインスタンスから呼び出せない

const atom = new Android('アトム', 0, 'JP');
console.log(atom.age);
console.log(atom.nationality);