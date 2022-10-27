const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateTeam = require('./src/page-template');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teammates = [];
const ids = [];

//functions
console.log(
    '\nUse command `npm run reset` to reset the app\n'
)

function appInit() {

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Would you like to add an intern or engineer to your team?',
                    name: 'memberChoice',
                    choices: ["Engineer", "Intern", "None"]
                }
            ])
            .then((userChoice) => {
                switch(userChoice.memberChoice) {
                    case 'Engineer':
                        createEngineer();
                        break;
                    case 'Intern':
                        createIntern();
                        break;
                    default:
                        buildTeam();
                }
            })
    };

    function createManager() {
        console.log('Please build your team');
        inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "Enter the manager's name",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "Enter the manager's id",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a number.'
                    }
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "Enter the manager's email address",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: "Enter the manager's office",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teammates.push(manager);
                ids.push(answers.managerId);
                createTeam();
            });
    };

    function createEngineer() {
        inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "Enter the engineer's name.",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "Enter the engineer's ID",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a number.'
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "Enter the engineer's email address",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "Enter the engineer's github account",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub
                );
                teammates.push(engineer);
                createTeam();
            });
    };

    function createIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "Enter the intern's name.",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "Enter the intern's ID",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a number.'
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "Enter the intern's email address",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "Enter the intern's school name",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a character.';
                    },
                },
            ])
            .then(answers => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internSchool
                );
                teammates.push(intern);
                createTeam();
            });
    };
 
    function buildTeam() {
        console.log("Team is successfully created!")

        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, generateTeam(teammates), 'UTF-8');
    }

    createManager();
}

appInit();