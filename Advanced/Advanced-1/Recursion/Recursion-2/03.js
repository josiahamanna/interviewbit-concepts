const solve = (A) => {
  let result = [];

  for (let j = 0; j < 2 ** A; j++) {
    let bin = j.toString(2);
    bin = bin.split("");
    for (let i = bin.length; i < 32; i++) {
      bin.unshift("0");
    }
    let grey = [Number(bin[0])];
    for (let i = 1; i < bin.length; i++) {
      grey[i] = Number(bin[i]) ^ Number(bin[i - 1]);
    }
    result.push(parseInt(grey.join(""), 2));
    //result.push(grey.join(""));
  }

  return result;
};

console.table(solve(10));
