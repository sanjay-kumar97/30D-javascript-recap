const variables = require("./variables.js");

Object.entries(variables).forEach(([key, value]) => {
  console.log(`${key}: ${typeof value}`);
});
