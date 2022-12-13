const solve = (A) => {
  console.log(A);
  let s = [];

  const removeDirectory = () => {
    while (getTop() !== "/" && s[s.length - 1]) {
      s.pop();
    }
  };

  const getTop = () => {
    return s[s.length - 1];
  };

  for (let i = 0; i < A.length; i++) {
    if (!s.length) {
      s.push(A[i]);
    } else {
      if (A[i] === "/" && getTop() !== "/") {
        s.push(A[i]);
      } else if (A[i] === "." && A[i + 1] === ".") {
        if (getTop() === "/") s.pop();
        removeDirectory();
        console.log("remove", s.join(""));
        i++;
      } else if (A[i] !== "." && A[i] !== "/") {
        s.push(A[i]);
      }
    }
    console.log("l", A[i], s.join(""), s.length);
  }

  if (s[0] !== "/") s.unshift("/");
  if (s[s.length - 1] === "/") s.pop();

  if (!s.length) return "/";
  else return s.join("");
};

/* console.log(
  solve(
    "/./.././ykt/xhp/nka/eyo/blr/emm/xxm/fuv/bjg/./qbd/./../pir/dhu/./../../wrm/grm/ach/jsy/dic/ggz/smq/mhl/./../yte/hou/ucd/vnn/fpf/cnb/ouf/hqq/upz/akr/./pzo/../llb/./tud/olc/zns/fiv/./eeu/fex/rhi/pnm/../../kke/./eng/bow/uvz/jmz/hwb/./././ids/dwj/aqu/erf/./koz/.."
  )
); */
console.log(solve("/../"));
