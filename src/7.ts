let 접니다: "대머리" | "솔로";

function 함수(a: "가위" | "바위" | "보"): (typeof a)[] {
  return ["가위"];
}

함수("가위");

let 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}

내함수(자료.name);

//object 안에 함수 만들 수 있음
type Member = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => string;
};

type Str = (a: string) => string;
type Num = (a: string) => number;
let cutZero: Str = function (str) {
  return str.replace(/^0+/, "");
};
let removeDash: Num = function (str) {
  return parseFloat(str.replace(/-/g, ""));
};

function callBack(a: string, func1: Str, func2: Num) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

callBack("010-1111-2222", cutZero, removeDash);
