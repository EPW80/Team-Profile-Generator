const Employee = require("./Employee.js");
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this, (school = school);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
