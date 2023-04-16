export {};

// unknown型は型安全なany型 : 型が不明なため処理を制限しくれる型。
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// 型ガード(重要) : 変数の型を判別して処理を実行
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
