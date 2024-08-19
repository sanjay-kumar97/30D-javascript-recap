console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

var given = "10";
console.log(typeof +given === typeof 10);

var given = parseFloat("9.8");
console.log(Math.round(given) === 10);

console.log("python".includes("on"));
console.log("jargon".includes("on"));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

console.log(Math.floor(Math.random() * 256));

var given = "JavaScript";
console.log(given.charAt(Math.floor(Math.random() * given.length)));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

var given =
  "You cannot end a sentence with because because because is a conjunction";
console.log(given.substr(given.indexOf("because because because"), 23));
