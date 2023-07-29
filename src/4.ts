function cleaning(x: (number | string)[]) {
  let cleaned: number[] = [];

  x.forEach(b => {
    if (typeof b === "string") {
      cleaned.push(parseFloat(b));
    } else {
      cleaned.push(b);
    }
  });
  return cleaned;
}

console.log(cleaning([123, "3"]));
