export {};

interface Pitcher {
  throwingSpeed: number;
}

interface Batter {
  battingAverage: number;
}

const Sasaki: Pitcher = {
  throwingSpeed: 154,
};

const Ochiai: Batter = {
  battingAverage: 0.367,
};

// &を使ってPitcherとBatterを再利用
type TwoWayPlayer = Pitcher & Batter;

const Ohtani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
