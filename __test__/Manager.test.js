const Manager = require('../lib/Manager');

test("Creating the new Manager card.", () => {
    const e = new Manager();
    expect (typeof(e)).toBe("object");
});

test("Creating Manager's officeNumber.", () => {
    const testOfficeNumber = "10";
    const e = new Manager("Selina", 10, "test@test.com", testOfficeNumber);
    expect(e.officeNumber).toBe(testOfficeNumber);
});

test("Checking if the function getofficeNumber() works", () => {
    const testOfficeNumber = "fuuko08";
    const e = new Manager("Selina", 10, "test@test.com", testOfficeNumber);
    expect(e.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Checking if the function getRole() works", () => {
    const role = "Manager";
    const e = new Manager("Selina", 10, "test@test.com", 10);
    expect(e.getRole()).toBe(role);
});