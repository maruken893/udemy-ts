export {};

// never型は中で全体にreturnをしない事を表す。
function error(message: string): never {
  throw new Error(message);
}

try {
  let res = error('test');
  console.log(res);
} catch(err) {
  console.log(err);
}

let foo: void = undefined;
let bar: never = error('only me');