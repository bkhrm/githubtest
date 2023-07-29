var 접니다;
function 함수(a) {
    return ["가위"];
}
함수("가위");
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
var cutZero = function (str) {
    return str.replace(/^0+/, "");
};
var removeDash = function (str) {
    return parseFloat(str.replace(/-/g, ""));
};
function callBack(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
callBack("010-1111-2222", cutZero, removeDash);
