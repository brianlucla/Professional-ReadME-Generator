// TODO: Include packages needed for this application
const inquirer = request("inquirer");
const fs = request("fs");
const path = request('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projName",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please provide a detailed explanation of the installation process for this project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide an explanation of how to use your project.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please provide a short description concerning your collaborators, third party assets, or tutorials that you may have used.",
    name: "credits",
    default: "N/A",
  },
  {
    type: "input",
    message: "Please provide an explanation of the features of your project.",
    name: "features",
    default: "N/A",
  },
  {
    type: "input",
    message:
      "Please provide any details or instructions for users looking to contribute to the repository.",
    name: "howToContribute",
    default: "N/A",
  },
  {
    type: "input",
    message: "Please provide an explanation on how to test your project.",
    name: "tests",
    default: "N/A",
  },
  {
    type: "list",
    message:
      "Please select the license that you have chosen to use for your project.",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUser",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
     return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([questions])
    .then((response) =>{
      writeToFile("README.md", generateMarkdown({...response}));
    });   
    
}

// Function call to initialize app
init();
