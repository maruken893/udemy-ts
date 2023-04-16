export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Ken';
  static lastName: string = 'Maru';

  static work(): string {
    // return 'Hey, guys! Are you interested in TypeScript?';
    return `Hey, guys! This is ${this.firstName}. Are you interested in TypeScript? Let's dive into TypeScript.`;
  }
}

const me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
