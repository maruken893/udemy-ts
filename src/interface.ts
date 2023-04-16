export {};

// type ObjectType = { name: string; age: number };

// interfaceは=(イコールを使わない)
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'ken',
  age: 24,
};
