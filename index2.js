// function 기계(a, b) {
//   this.q = a; //자식만 가짐
//   this.w = b;
// }
// 기계.prototype.name = "kim"; //부모만 가짐
// let nunu = new 기계("consume", "snowball");
// let garen = new 기계("strike", "courage");
// class Hero {
//   constructor() {
//     this.q = 구멍;
//     this.w = 스킬;
//   }
// }
// new Hero();
// class Person {
//   name: string; //타입스크립트는 미리 필드값으로 사용할 변수가 정의되어있어야 constuctor 안에서 사용가능
//   constructor(a) {
//     // 자식만 가능
//     this.name = a;
//   }
//   함수(a: string) {
//     //자식이 다 쓸 수 있는 부모 유전자
//     console.log("안녕" + a);
//   }
// }
// let 사람1 = new Person("kim");
// let 사람2 = new Person("park");
// 사람1.함수("메롱");
// class Animal {
//   add(숫자: number) {
//     console.log(숫자 + 1);
//   }
// }
var Car = /** @class */ (function () {
    function Car(a, b) {
        model: a;
        price: b;
    }
    return Car;
}());
var sonata = new Car("소나타", 3000);
console.log(sonata);
