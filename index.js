const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const writer = require("./src/write");
const team = [];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Managers ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
  },
  {
    type: "input",
    name: "number",
    message: "Office Number:",
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "nextChoice",
    message: "Would you like to add additional employees?",
    choices: ["Engineer", "Intern", "No"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Engineer's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
  },
  {
    type: "input",
    name: "gitHub",
    message: "GitHub User Name:",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
  },
  {
    type: "input",
    name: "school",
    message: "School of Origin:",
  },
];

engineerInput = () => {
  inquirer
    .prompt([...engineerQuestions, ...employeeQuestions])
    .then((data) => {
      team.push(new Engineer(data.name, data.id, data.email, data.gitHub));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No": {
          printHtml(team);
          break;
        }
      }
    })
    .catch((err) => console.log(err));
};
internInput = () => {
  inquirer
    .prompt([...internQuestions, ...employeeQuestions])
    .then((data) => {
      team.push(new Intern(data.name, data.id, data.email, data.school));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No": {
          printHtml(team);
          break;
        }
      }
    })
    .catch((err) => console.log(err));
};
const fileExport = (fileName, data) => {
  return fs.writeFile(path.join(__dirname + "/dist", fileName), data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};
printHtml = (data) => {
  // console.log(data);
  fileExport("index.html", writer(data));
};

listTeam = () => {
  inquirer
    .prompt([...managerQuestions, ...employeeQuestions])
    .then((data) => {
      team.push(new Manager(data.name, data.id, data.email, data.number));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

listTeam();
