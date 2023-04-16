export {};

// objectだと制約が甘いため、実際に使う頻度は少ない
let profile1: object = { name: 'ken' };
profile1 = { birthYear: 1998 };

// objectの制約を厳しくした。string型のnameがオブジェクトのプロパティに存在する必要がある。
let profile2: { name: string } = { name: 'ken' };
profile2 = { name: 'kengo' };
