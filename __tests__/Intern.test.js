const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const name = "Victor Lawal";
  const id = 4;
  // const email = "milton.waddams@initech.com";
  const school = "UCLA Coding Bootcamp";
  const role = "Intern";
  const testIntern = new Intern(name, id);

  // it("Should return the correct school", () => {
  //   expect(testIntern.getSchool()).toBe(school);
  // });

  // it("Should return the Intern name when requested", () => {
  //   expect(testIntern.getName()).toBe(name);
  // });

  it("Should return the Intern id when requested", () => {
    expect(testIntern.getId()).toBe(id);
  });

  // it("Should return the Intern email when requested", () => {
  //   expect(testIntern.getEmail()).toBe(email);
  // });

  it("Should return the Intern role when requested", () => {
    expect(testIntern.getRole()).toBe(role);
  });
});