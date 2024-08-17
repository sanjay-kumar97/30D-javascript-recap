var variable1;
var variable2;
var variable3;
var variable4;

var variable1 = 1;
var variable2 = 2;
var variable3 = 3;
var variable4 = 4;

// Multiple line declarations
(function() {
  let firstName = "Sanjay";
  let lastName = "Kumar";
  let maritalStatus = "Single";
  let country = "India";
  let age = 22;

  console.log("Multiple line declarations", firstName, lastName, maritalStatus, country, age);
})();

// Single line declarations
(function() {
  let firstName = "Sanjay", lastName = "Kumar", maritalStatus = "Single", country = "India", age = 22;
  console.log("Single line declarations", firstName, lastName, maritalStatus, country, age);
})()
