const Employee = require('../lib/Employee');

const employee = new Employee ('Sara', '2', 'sara@gmail.com');

test ('creates an employee object', () => {
    
    expect(employee.name).toBe('Sara');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('sara@gmail.com');

});

test ('get employee name from getName() method', () => {

    expect(employee.getName()).toBe('Sara');

});

test ('get employee ID from getId() method', () => {

    expect(employee.getId()).toBe('2');

});

test ('get employee e-mail from getEmail() method', () => {

    expect(employee.getEmail()).toBe('sara@gmail.com');

});

test ("declares employee's role to be 'Employee'", () => {

    expect(employee.getRole()).toBe('Employee');
})



