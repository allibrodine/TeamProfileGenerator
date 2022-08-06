const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generate-page');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter your name.')
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptList();
    })
};

const promptList = () => {
    return inquirer.prompt([
        {
            type:'list',
            name: 'menu',
            message: 'Select which team member you would like to add or select done:',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
    //switch function to choose employee category or default to the end to build the team
    .then(choice => {
        switch(choice.menu) {
            case "Engineer": promptEngineer();
            break;
            case "Intern": promptIntern();
            break;
            default: buildTeam();
        }
    })
}

const promptEngineer = () => {

    console.log(`
    ===============
    Add an Engineer
    ===============`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's e-mail address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's Github username."
        }
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptList();
    })
}

const promptIntern = () => {

    console.log(`
    =============
    Add an Intern
    =============`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the intern's employee ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's e-mail address."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school that the intern is attending."
        }
    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptList();
    })
}

const buildTeam = () => {

    console.log(`
    =================
    Assemble the Team
    =================`);

    //variable to hold generated page
    const pageHTML = generatePage(teamMembers);
    
        //create html file in dist folder
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Page created!');

        //copy style sheet to dist folder
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
            }
            });
        })
    }

promptManager();
