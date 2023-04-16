export {};

class VisaCard {
  public readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

const myVisaCard = new VisaCard('ken');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'けん';

//
class JCBCard {
  constructor(public readonly owner: string) {}
}

const myJCBCard = new JCBCard('ken');
console.log(myJCBCard.owner);
// myJCBCard.owner = 'けん';