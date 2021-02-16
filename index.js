// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [  inquirer.prompt([
    {
        type: "input",
        name: "title",
        message:"What is your project title?",
    },
    {
        type: "input",
        name: "desctiption",
        message:"Tell me about your project.",
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
        name: "github",
        message:"What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message:"What is your email?",
    },
]).then(function(data) {
    console.log(data);
})];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
