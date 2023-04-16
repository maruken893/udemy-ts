export {};

class Person {
  // コンストラクターにアクセス修飾詞をつけると簡単に記述できる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('ken', 24);
console.log(me);
