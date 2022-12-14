/* 
Given a string A representing an absolute path for a file (Unix-style).

Return the string A after simplifying the absolute path.

Note:

In Unix-style file system:

A period '.' refers to the current directory.
A double period '..' refers to the directory up a level.
Any multiple consecutive slashes '//' are treated as a single slash '/'.
In Simplified Absolute path:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path doesn't end with trailing slashes '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Path will not have whitespace characters.
*/

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
