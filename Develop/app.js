const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employees = [];
// Write code to use inquirer to gather information about the development team members,;
//ask for email, id.
//intern will ask for school
//enginerr will provide github username
//manager will provide office number

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
function createEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is this employee's Role?",
      choices: ["Manager", "Engineer", "Intern"],
    },]).then((data) => {
      console.log(data)
      switch(data.choices){
        case "Manager":
          createManager();
        break;
        case "Engineer":
          createEngineer();

        break;
        case "Intern":
          createIntern();
      }
    });
  


}

function createManager(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
    {
      type: "confirm",
      name: "askAgain",
      message: "Do you want to add another employee?",
    },
  ]).then((data) => {
    console.log(data)
    if(data.askAgain === "Y"){
      createEmployee();
    } else {buildTeam()};
  });

};

function createEngineer(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is their github username?"
    },
    {
      type: "confirm",
      name: "askAgain",
      message: "Do you want to add another employee?",
    },
  ]).then((data) => {
    console.log(data)
    if(data.askAgain === "Y"){
      createEmployee();
    } else {buildTeam()};
  });

}
function createIntern(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school do they attened?"
    },
    {
      type: "confirm",
      name: "askAgain",
      message: "Do you want to add another employee?",
    },
  ]).then((data) => {
    console.log(data)
    if(data.askAgain === "Y"){
      createEmployee();
    } else {buildTeam()};
  });

}
function createTeam(){
  

}
inquirer.prompt([
  {
    type: "list",
    name: "role",
    message: "What is this employee's Role?",
    choices: ["Manager", "Employee", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What is their name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "confirm",
    name: "askAgain?",
    message: "Do you want to add another employee?",
  },
]).then((data) => {
  console.log(data)
});


function buildTeam(team) {
  let team = employees;
  fs.writeFileSync(outputPath, render(), (err) =>{
    if(err) throw err;
  })
};
  