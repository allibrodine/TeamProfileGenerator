const Engineer = require('../lib/Engineer');

const engineer = new Engineer ('Jon', '4', 'jon@gmail.com', 'JonDoe');

test ('creates an engineer object', () => {
    
    expect(engineer.name).toBe('Jon');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('jon@gmail.com');
    expect(engineer.github).toBe('JonDoe');

});

test ('get engineer name from getName() method', () => {

    expect(engineer.getName()).toBe('Jon');

});

test ('get engineer ID from getId() method', () => {

    expect(engineer.getId()).toBe('4');

});

test ('get engineer e-mail from getEmail() method', () => {

    expect(engineer.getEmail()).toBe('jon@gmail.com');

});

test ('get engineer GitHub useranme from getGethub() method', () => {

    expect(engineer.getGithub()).toBe('JonDoe');

});

test ("declares employee's role to be 'Engineer'", () => {

    expect(engineer.getRole()).toBe('Engineer');

});