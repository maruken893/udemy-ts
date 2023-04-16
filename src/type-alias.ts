export {};

// stringを別名として定義
type Mojiretsu = string;

const fooString: string = 'hello';
const barString: Mojiretsu = 'こんにちは';

// オブジェクトの型を定義
type Profile = {
  name: string;
  age: number;
}

const example1: Profile = {
  name: 'ken',
  age: 24
}

const example2: Profile = {
  name: 'kengo',
  age: 79
}

// ある変数の型の情報を用いて、自動で型を設定
type Profile2 = typeof example1;