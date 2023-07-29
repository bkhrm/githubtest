function sayHi(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
console.log(sayHi("아름"));
function count(x) {
    return x.toString().length;
}
console.log(count("12345"));
function 결혼가능(소득, 집, 매력) {
    let score = 0;
    if (집 === true) {
        score += 500;
    }
    if (소득) {
        score = score + 소득;
    }
    if (매력 === "상") {
        score = score + 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능(500, true, "상"));
//# sourceMappingURL=2.js.map