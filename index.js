// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require('fs');
var markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [  
    {
        type: "input",
        name: "fileName",
        message:"What should we call your file?",
    },
    {
        type: "input",
        name: "title",
        message:"What is your project title?",
    },
    {
        type: "list",
        name: "license",
        message:"What kind of license would you like to use?",
        choices: [
            'MIT',
            'Apache',
            'Unlicense',
        ]
    },
    {
        type: "input",
        name: "desctiption",
        message:"Tell me about your project.",
    },
    {
        type: "input",
        name: "tech",
        message:"What languages and technologies did you use?",
    },
    {
        type: "input",
        name: "install",
        message:"How do users install your app?",
    },
    {
        type: "input",
        name: "usage",
        message:"What is it used for?",
    },
    {
        type: "input",
        name: "contributions",
        message:"Who helped you?",
    },
    {
        type: "input",
        name: "resources",
        message:"What other resources did you use? Include links.",
    },
    {
        type: "input",
        name: "tests",
        message:"question about tests",
    },
    {
        type: "input",
        name: "repo",
        message:"What is the link to your repo?",
    },
    {
        type: "input",
        name: "deployed",
        message:"What is the link to your deployed app?",
    },
    {
        type: "input",
        name: "github",
        message:"What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message:"What is your email?",
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, markdown(data), err => {
        if(err) throw err
    } )
//   
}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
