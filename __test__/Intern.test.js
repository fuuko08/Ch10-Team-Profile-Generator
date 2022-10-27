const Intern = require('../lib/Intern');

test("Creating the new Intern card.", () => {
    const e = new Intern();
    expect (typeof(e)).toBe("object");
});

test("Creating intern's school.", () => {
    const testSchool = "UCLA";
    const e = new Intern("Selina", 10, "test@test.com", testSchool);
    expect(e.school).toBe(testSchool);
});

test("Checking if the function getSchool() works", () => {
    const testSchool = "UCLA";
    const e = new Intern("Selina", 10, "test@test.com", testSchool);
    expect(e.getSchool()).toBe(testSchool);
});

test("Checking if the function getRole() works", () => {
    const role = "Intern";
    const e = new Intern("Selina", 10, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(role);
});