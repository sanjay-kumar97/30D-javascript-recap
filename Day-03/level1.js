const variables = {
  firstName: "Sanjay",
  lastName: "Kumar",
  country: "India",
  city: "Chennai",
  age: 22,
  isMarried: false,
  year: 2024,
};

Object.entries(variables).forEach(([key, value]) => {
  console.log(`${key}: ${typeof value}`);
});

console.log(typeof "10" === typeof 10);

console.log(parseInt("9.8") === 10);

console.log(true || false);

console.log(10 < 20);
console.log("Hello" === "Hello");
console.log(true === true);

console.log(10 > 20);
console.log("Hello" === "Hi");
console.log(true === false);

// 4 > 3 | true
console.log("4 > 3", 4 > 3);

// 4 >= 3 | true
console.log("4 >= 3", 4 >= 3);

// 4 < 3 | false
console.log("4 < 3", 4 < 3);

// 4 <= 3 | false
console.log("4 <= 3", 4 <= 3);

// 4 == 4 | true
console.log("4 == 4", 4 == 4);

// 4 === 4 | true
console.log("4 === 4", 4 === 4);

// 4 != 4 | false
console.log("4 != 4", 4 != 4);

// 4 !== 4 | false
console.log("4 !== 4", 4 !== 4);

// 4 != "4" | true
console.log("4 != '4'", 4 != "4");

// 4 == "4" | true
console.log("4 == '4'", 4 == "4");

// 4 === "4" | false
console.log("4 === '4'", 4 === "4");

console.log("python".length != "jargon".length);

// 4 > 3 && 10 < 12 | true
console.log("4 > 3 && 10 < 12", 4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12 | false
console.log("4 > 3 && 10 > 12", 4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12 | true
console.log("4 > 3 || 10 < 12", 4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12 | true
console.log("4 > 3 || 10 > 12", 4 > 3 || 10 > 12);

// !(4 > 3) | false
console.log("!(4 > 3)", !(4 > 3));

// !(4 < 3) | true
console.log("!(4 < 3)", !(4 < 3));

// !(false) | true
console.log("!(false)", !false);

// !(4 > 3 && 10 < 12) | false
console.log("!(4 > 3 && 10 < 12)", !(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12) | true
console.log("!(4 > 3 && 10 > 12)", !(4 > 3 && 10 > 12));

// !(4 === "4") | true
console.log("!(4 === '4')", !(4 === "4"));

console.log(!"dragon".includes("on"), !"python".includes("on"));

const date = new Date();
console.log("Year:     ", date.getFullYear());
console.log("Month:    ", date.getMonth());
console.log("Date:     ", date.getDate());
console.log("Day:      ", date.getDay());
console.log("Hours:    ", date.getHours());
console.log("Minutes:  ", date.getMinutes());
console.log("Seconds:  ", date.getTime());
