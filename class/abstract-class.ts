export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return `Roar`;
  }
}

class Tiger extends Animal {
  cry(): string {
    return `Grrrr`;
  }
}
