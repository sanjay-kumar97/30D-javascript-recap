var base = prompt("Enter base");
var height = prompt("Enter height");
var area = 0.5 * base * height;
console.log("The area of the triangle is", area);

var a = prompt("Enter side a");
var b = prompt("Enter side b");
var c = prompt("Enter side c");
console.log("The perimeter of the triangle is", a + b + c);

var length = prompt("Enter length");
var width = prompt("Enter width");
console.log("The area of rectangle is", length * width);
console.log("The perimeter of rectangle is", 2 * (length + width));

var radius = prompt("Enter radius");
console.log("The area of circle is", 3.14 * radius * radius);
console.log("The circumference of circle is", 2 * 3.14 * radius);

var x1 = 2,
  y1 = 2;
var x2 = 6,
  y2 = 10;
var slope1 = (y2 - y1) / (x2 - x1);
console.log("The slope between point (2, 2) and point (6, 10) is", slope1);

var x = prompt("Enter value of x");
var y = x * x + 6 * x + 9;
console.log("The value of y (y = x^2 + 6x + 9) is", y);

var hours = prompt("Enter hours");
var ratePerHour = prompt("Enter rate per hour");
console.log("Your weekly earning is", hours * ratePerHour);

var firstName = prompt("Enter your first name");
console.log(firstName.length > 7 ? "Your name is long" : "Your name is short");

var firstName = "Asabeneh";
var lastName = "Yetayeh";
console.log(
  firstName.length > lastName.length
    ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
    : `Your first name, ${firstName} is shorter than your family name, ${lastName}`
);

var myAge = 250;
var yourAge = 25;
console.log("I am", myAge - yourAge, "years older than you.");

var birthYear = prompt("Enter birth year");
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
console.log(
  age >= 18
    ? `You are ${age}. You are old enough to drive`
    : `You are ${age}. You will be allowed to drive after ${18 - age} years.`
);

var years = prompt("Enter number of years you live");
console.log("You lived", years * 365 * 24 * 60 * 60, "seconds.");

var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth() + 1).padStart(2, "0");
var day = String(date.getDate()).padStart(2, "0");
var hours = String(date.getHours()).padStart(2, "0");
var minutes = String(date.getMinutes()).padStart(2, "0");
console.log("YYYY-MM-DD HH:mm", `${year}-${month}-${day} ${hours}:${minutes}`);
console.log("DD-MM-YYYY HH:mm", `${day}-${month}-${year} ${hours}:${minutes}`);
console.log("DD/MM/YYYY HH:mm", `${day}/${month}/${year} ${hours}:${minutes}`);
