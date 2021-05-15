const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("js");
const path = require("path");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Managers Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Managers ID Number:",
  },
  {
    type: "input",
    name: "email",
    Message: "Email Address:",
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "nextChoice",
    Message: "Would you like to add additional employees?",
    choices: ["Engineer", "Intern", "No, my team is complete."],
  },
];
