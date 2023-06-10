const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const name = "Mohammed Elzanaty";
  const id = 3;
  // const email = "bill.lumbergh@initech.com";
  // const officeNumber = "3";
  const role = "Manager";
  const testManager = new Manager(name, id);

  // it("Should return correct office number", () => {
  //   expect(testManager.officeNumber).toBe(officeNumber);
  // });

  it("Should return the Manager name when requested", () => {
    expect(testManager.getName()).toBe(name);
  });

  it("Should return the Manager id when requested", () => {
    expect(testManager.getId()).toBe(id);
  });

  // it("Should return the Manager email when requested", () => {
  //   expect(testManager.getEmail()).toBe(email);
  // });

  it("Should return the Manager role when requested", () => {
    expect(testManager.getRole()).toBe(role);
  });
});
