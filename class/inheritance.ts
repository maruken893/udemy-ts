export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`;
  }
}

// const animal = new Animal();
// console.log(animal.run());

// const lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
