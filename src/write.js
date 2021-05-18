const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const managerCard = (member) => {
  const manager = `<div class="card col-3 m-3">
  <div class="card-header bg-info">
    <h3>${member.getRole()}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${member.getName()}</li>
    <li class="list-group-item">ID: ${member.getId()}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${member.getPhone()}</li>
  </ul>
</div>`;
  return manager;
};
const engineerCard = (member) => {
  const engineer = `<div class="card col-3 m-3">
  <div class="card-header bg-info">
    <h3>${member.getRole()}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${member.getName()}</li>
    <li class="list-group-item">ID: ${member.getId()}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
    <li class="list-group-item">GitHub Username: <a href="https://github.com/${member.getGitHub()}">${member.getGitHub()}</a></li>
  </ul>
  </div>`;
  return engineer;
};
const internCard = (member) => {
  const intern = `<div class="card col-3 m-3">
  <div class="card-header bg-info">
    <h3>${member.getRole()}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${member.getName()}</li>
    <li class="list-group-item">ID: ${member.getId()}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
    <li class="list-group-item">School: ${member.getSchool()}</li>
  </ul>
</div>`;
  return intern;
};

const writer = (team) => {
  console.log(team);
  let employeeCards = "";
  team.forEach((member) => {
    switch (member.getRole()) {
      case "Manager":
        employeeCards += managerCard(member);
        break;
      case "Engineer":
        employeeCards += engineerCard(member);
        break;
      case "Intern":
        employeeCards += internCard(member);
        break;
      default:
        break;
    }
  });
  const htmlText = `
      <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team SuperCrew</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />
       <script
         src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
         crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <header class="container-fluid bg-success p-5">
          <h1 class="text-center p-3 text-info fs-1 fw-bold">Project Team</h1>
        </header>
        <main class="container row">
          ${employeeCards}
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
         integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
         crossorigin="anonymous"
        ></script>
        <script
         src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
         crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `;
  return htmlText;
};

const fileExport = (fileName, data) => {
  return fs.writeFile(path.join(__dirname + "./dist", fileName), data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};

// fileExport("index.html", writer());

module.exports = writer;
