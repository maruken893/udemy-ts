export {};

let name = 'Ken';

name = 'taro';

let nickname = 'Maru' as const;
nickname = 'Marutaro';

// object
let profile = {
  name: 'ken',
  height: '170',
} as const;

profile.name = 'Maru';
profile.height = '175';
