const Manager = require('../lib/Manager');

const manager = new Manager ('Dave', '3', 'dave@gmail.com', '1234567');

test ('creates an employee object', () => {
    
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('3');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe('1234567');

});

test ('get manager name from getName() method', () => {

    expect(manager.getName()).toBe('Dave');

});

test ('get manager ID from getId() method', () => {

    expect(manager.getId()).toBe('3');

});

test ('get manager e-mail from getEmail() method', () => {

    expect(manager.getEmail()).toBe('dave@gmail.com');

});

test ("declares manager's role to be 'Manager'", () => {

    expect(manager.getRole()).toBe('Manager');
})
