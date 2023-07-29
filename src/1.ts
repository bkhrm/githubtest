const sum = (a: number, b: number) => a + b;

export default sum;

const name: string = "ahreum";

let birthPlace: string = "Daejeon";

let favArtist: { title: string; artist: string } = {
  title: "sandman",
  artist: "beenzino",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let members: (string | number)[];
members = [1, 2, 3];
let myInfo: { age: string | number } = { age: 20 };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
