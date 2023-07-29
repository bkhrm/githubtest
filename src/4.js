function cleaning(x) {
    var cleaned = [];
    x.forEach(function (b) {
        if (typeof b === "string") {
            cleaned.push(parseFloat(b));
        }
        else {
            cleaned.push(b);
        }
    });
    return cleaned;
}
console.log(cleaning([123, "3"]));
