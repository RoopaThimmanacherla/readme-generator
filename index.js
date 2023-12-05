// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter title of the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Please enter the description of the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter description of the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Installation",
      message: "Please enter your installatin instructions: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter on how to install!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is your usage information?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter any usage info!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What type of license used in your applicaion?",
      choices: [
        "None",
        "Apache license 2.0",
        "Boost Software License 1.0",
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 1.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "GNU Lesser General Public License v3.0",
        "MIT",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "contribute",
      message: "what are your contributor guidelines?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter any how to contribute info!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "what are test instructions?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter how to test application!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "what is your github username?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "what is your email id?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your email id!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data)
    .then(() => console.log("successfully generated the README"))
    .catch((err) => console.err(err));
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => {
      console.log(answers);
      return generateMarkdown(answers);
    })

    .then((generatedMarkdown) => {
      writeToFile("GENERATEDREADME.md", generatedMarkdown);
      console.log("README.md created!");
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
