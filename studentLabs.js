// Task 4
let studentLabs = [
    {
      student: "Carly",
      runLab: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Erica",
      d: function (num) {
        return num * num;
      },
    },
  ];
  function gradeLabs(labs) {
    labs.forEach((lab) => {
      if (lab.runLab) {
        console.log(`${lab.student} code worked:` + lab.runLab(2));
        result = lab.runLab(2);
      } else {
        try {
          throw new Error();
        } catch (err) {
          err.message = "Error thrown";
          result = err.message;
          console.log(err.message);
        }
      }
    });
    return `End`;
  }
  console.log(gradeLabs(studentLabs));