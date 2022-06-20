// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
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
        message: 'How would you like for people to reach out to you if they have additional questions?', 
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
      type: 'checkbox', 
      name: 'license', 
      message: 'Please choose the license that suits your project.', 
      choices: ['GNU', 'Apache', 'MIT', 'Unlicense', 'MPL 2.0', 'Boost'], 
      validate: licenseInput => {
        if(licenseInput) {
          return true; 
        } else {
          console.log('Please choose a license for your project.');
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
        name: 'install', 
        message: 'Please provide installation instructions for your project.', 
        validate: installInput => {
            if (installInput) {
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
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err); 
        }
    
    console.log('Success! You can now preview your README file!'); 
    
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput)); 
    });
};

// Function call to initialize app
init(); 
