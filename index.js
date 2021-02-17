// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const renderLicenseLink = require("./utils/generateMarkdown");
const renderLicenseBadge = require("./utils/generateMarkdown");
const renderLicenseSection = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [  inquirer.prompt([
    {
        type: "input",
        name: "filename",
        message:"What should we call your file?",
    },
    {
        type: "input",
        name: "title",
        message:"What is your project title?",
    },
    {
        type: "input",
        name: "desctiption",
        message:"Tell us about your project.",
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
        type: "list",
        name: "license",
        message:"What kind of license do you require?",
        choices: [
            'MIT',
            'GPLv2',
            'GPLv3',
            'Apache',
            'BDS 3-clause',
            'BDS 2-clause',
            'Unlicense',
        ]
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
    // console.log(data);
    var licenseName = data.license;
    console.log(licenseName);
    // renderLicenseLink(licenseName);
    // renderLicenseBadge(licenseName);
    // renderLicenseSection(licenseName);
    // $.ajax({
    //     url: "application/vnd.github.v3+json",
    //     method: "GET",
    //     dataType: "json",
    //     license: licenseName
    // }).then(function (response){
    // console.log(response)
    // })
    // try {await octokit.request('GET /licenses/{license}', {
    //     license: licenseName
    //   })} catch(error){
    //     console.log("nope")
    // }
    
})];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // this should be the async functions for writing to the file. I'm not sure what to do with the fileName part yet... 
    generateMarkdown(data)
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
