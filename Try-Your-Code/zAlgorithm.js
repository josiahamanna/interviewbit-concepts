let counter = 0;

const myFunction = function (usedBy) {
  const incrementCounter = function () {
    console.log(usedBy, ": before: ", counter);
    counter = counter + 1;
    console.log("after: ", counter);
  };

  return incrementCounter;
};

const anotherFunction = myFunction("anotherFunction");
const newFunction = myFunction("newFunction");

anotherFunction();
newFunction();
anotherFunction();
newFunction();
