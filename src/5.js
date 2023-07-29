var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function Subject(x) {
    if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else if (typeof x.subject === "string") {
        return x.subject;
    }
    else {
        return "에러입니다.";
    }
}
console.log(Subject(철수쌤));
console.log(Subject(영희쌤));
console.log(Subject(민수쌤));
