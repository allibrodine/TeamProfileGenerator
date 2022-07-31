const Intern = require('../lib/Intern');

const intern = new Intern ('Jack', '5', 'jack@gmail.com', 'SMU');

test ('creates an intern object', () => {
    
    expect(intern.name).toBe('Jack');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('jack@gmail.com');
    expect(intern.school).toBe('SMU');

});

test ('get intern name from getName() method', () => {

    expect(intern.getName()).toBe('Jack');

});

test ('get intern ID from getId() method', () => {

    expect(intern.getId()).toBe('5');

});

test ('get intern e-mail from getEmail() method', () => {

    expect(intern.getEmail()).toBe('jack@gmail.com');

});

test ('get intern school from getSchool() method', () => {

    expect(intern.getSchool()).toBe('SMU');

});

test ("declares intern's role to be 'Intern'", () => {

    expect(intern.getRole()).toBe('Intern');
});
