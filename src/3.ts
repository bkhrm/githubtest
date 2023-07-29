function 내함수(x: number | string) {
  if (typeof x === "string") {
    console.log(x + "1");
  } else {
    console.log(x + 1);
  }
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

let 이름: string = "kim";
