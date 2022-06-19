// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your username!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'gitLink', 
        message: 'Please provde a link to your GitHub repository.', 
        validate: gitLinkInput => {
            if (gitLinkInput) {
              return true;
            } else {
              console.log('Please enter a link!');
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'Please provide your email.', 
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'reachOut', 
        message: 'How would you like for people to reach out to you if they have addiitonal questions?', 
        validate: reachOutInput => {
            if (reachOutInput) {
              return true;
            } else {
              console.log('Please enter a value!');
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'title', 
        message: 'What is the title of your project?', 
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title of your project!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'descript', 
        message: 'Please provide a description of your project.', 
        validate: descriptInput => {
            if (descriptInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'instructions', 
        message: 'Please provide installation instructions for your project.', 
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'usage', 
        message: 'Please provide usage information for your project.', 
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'contrib', 
        message: 'Please provide any contribution guidelines.', 
        validate: contribInput => {
            if (contribInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    }, 
    {
        type: 'input', 
        name: 'test', 
        message: 'Please provide any test instructions.', 
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    }
])}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init(); 
promptUser()