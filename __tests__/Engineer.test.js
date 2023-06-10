const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const name = "Erik Williams";
  const id = 1;
  const email = "erikpw009@gmail.com";
  const gitHubUsername = "EPW80";
  const role = "Engineer";
  const returnedGitHub = `<a href="https://github.com/${gitHubUsername}">https://github.com/${gitHubUsername}</a>`;

  const testEngineer = new Engineer(name, id, email, gitHubUsername);

  // it("Should return github linked account", () => {
  //   expect(testEngineer.getGithub()).toBe(returnedGitHub);
  // });

  it("Should return the Engineer name when requested", () => {
    expect(testEngineer.getName()).toBe(name);
  });

  it("Should return the Engineer id when requested", () => {
    expect(testEngineer.getId()).toBe(id);
  });

  it("Should return the Engineer email when requested", () => {
    expect(testEngineer.getEmail()).toBe(email);
  });

  it("Should return the Engineer role when requested", () => {
    expect(testEngineer.getRole()).toBe(role);
  });
});
