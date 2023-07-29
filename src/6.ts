//type alias
type Animal = { name: string; age: number };

let 동물: Animal = {
  name: "몽구",
  age: 7,
};

type Girlfriend = {
  readonly name: string;
};

const 여친: Girlfriend = {
  name: "아름",
};

type Name = string;
type Age = number;
type Person = Name | Age;
type Alien = Name & Age;

type Water = {
  name: string;
  ml: number;
};
type Beverage = {
  name: string;
  color: string;
};

type Liquid = Water & Beverage;

let 액체: Liquid = { name: "삼다수", ml: 350, color: "transparent" };

type Clothes = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 옷: Clothes = {
  size: 40,
  position: [1, 2, 3],
};

type UserInfo = {
  name: string;
  phone: number;
  email: string;
};

let user: UserInfo = { name: "kim", phone: 123, email: "abc@naver.com" };

type Adult = { adult: boolean };

type Kid = UserInfo & Adult;

let 회원가입: Kid = {
  name: "kim",
  phone: 10,
  email: "dkfdma",
  adult: true,
};
