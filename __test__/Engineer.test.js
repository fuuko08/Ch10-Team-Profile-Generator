const Engineer = require('../lib/Engineer');

test("Creating the new Engineer card.", () => {
    const e = new Engineer();
    expect (typeof(e)).toBe("object");
});

test("Creating engineer's github.", () => {
    const testGithub = "fuuko08";
    const e = new Engineer("Selina", 10, "test@test.com", testGithub);
    expect(e.github).toBe(testGithub);
});

test("Checking if the function getGithub() works", () => {
    const testGithub = "fuuko08";
    const e = new Engineer("Selina", 10, "test@test.com", testGithub);
    expect(e.getGithub()).toBe(testGithub);
});

test("Checking if the function getRole() works", () => {
    const role = "Engineer";
    const e = new Engineer("Selina", 10, "test@test.com", "fuuko08");
    expect(e.getRole()).toBe(role);
});