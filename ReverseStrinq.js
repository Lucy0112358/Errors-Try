// Task 1
function reverseString(s) {
    if (typeof s !== "string") {
      try {
        throw new TypeError(`s.split is not a function`);
      } catch (err) {
        console.log(err.message);
      }
      return s;
    } else {
      return (s = s.split("").reverse().join(""));
    }
  }
  console.log(reverseString(`1234`));