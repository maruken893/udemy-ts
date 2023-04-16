export {};

// * owner
//   * 所有者
//   * 初期化時に設定
//   * 途中で変更できない
//   * 参照できる

// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint(): string {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ken', 123456789);

// card.owner = 'けん';  // privateなため変更できない
console.log(card.owner);

console.log(card.debugPrint());
card.secretNumber = 111111111;
console.log(card.debugPrint());
// console.log(card._secretNumber); // privateなため参照できない
console.log(card.secretNumber)