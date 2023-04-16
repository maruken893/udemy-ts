export {};

let name: any = 'Ken';

// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length;

length = 'foo';
