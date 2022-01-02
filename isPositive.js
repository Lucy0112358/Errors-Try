// Task 2
function isPositive(a) {
    try {
      if (a > 0) {
        a = `yes`;
      } else {
        throw new TypeError();
      }
    } catch (err) {
      if (a === 0) {
        err.message = `Zero Error.`;
      } else {
        err.message = `Negative Error.`;
      }
      console.log(err.message);
    }
    return a;
  }
  console.log(isPositive(-6));