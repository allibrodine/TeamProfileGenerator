const Employee = require('./Employee');

class Manager extends Employee {

    constructor (name, id, email, officeNumber) {
        
        //pull elements from parent class Employee
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;