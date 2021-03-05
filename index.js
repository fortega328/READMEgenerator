const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type:"input",
        name: "title",
        message: "Please give your project a name...",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"
        }
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your github username?",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"
        }

    },
    {
        type: "list",
        name: "license",
        message: "please select your license...",
        choices: [{
            name: "MIT",
            value: "MIT"
        },
        {
            name: "Apache 2.0",
            value: "Apache%202.0"
        },
        {
            name: "GPL Public License",
            value: "GPL%20Public%20License"
        }
            
        ]
    },
    {
        type: "input",
        name: "tests",
        message:  "How would you run tests on this project?",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"
        }
    },
    {
        type: "input",
        name: "description",
        message:  "Please provide a brief description of your project.",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"}
    },
    {
        type: "input",
        name: "installation",
        message:  "What do you need to install in order for your application to work?",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"}
    },
    {
        type:"input",
        name: "usage",
        message: "How will you use your application?",
        validate: answer =>{
            if(answer!==""){
                return true;
            }
            return "Please enter valid answer"
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answer=>{
        console.log(answer)
        writeToFile("README.md",generateMarkdown(answer))
    })

}

// function call to initialize program
init();
