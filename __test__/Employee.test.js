const Employee = require('../lib/Employee');

test("Creating the new employee card.", () => {
    const e = new Employee();
    expect (typeof(e)).toBe("object");
});

test("Creating employee's name.", () => {
    const testName = "Selina";
    const e = new Employee(testName);
    expect(e.name).toBe(testName);
});

test("Creating employee's id.", () => {
    const testId = 10;
    const e = new Employee("Selina", testId);
    expect(e.id).toBe(testId);
});

test("Creating employee's email", () => {
    const testEmail = "test@test.com";
    const e = new Employee("Selina", 10, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Check if function getName() works", () => {
    const testName = "Selina";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Check if function getId() works", () => {
    const testId = 10;
    const e = new Employee("Selina", testId);
    expect(e.getID()).toBe(testId);
});

test("Check if function getEmail() works", () => {
    const testEmail = "test@test.com";
    const e = new Employee("Selina", 10, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

test("Check if function getRole() works", () => {
    const role = "Employee";
    const e = new Employee("Selina", 10, "test@test.com");
    expect(e.getRole()).toBe(role);
});