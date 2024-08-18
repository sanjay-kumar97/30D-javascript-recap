const challenge = "30 Days Of JavaScript";

console.log(challenge);

console.log("LENGTH", challenge.length);

console.log("UPPERCASE", challenge.toUpperCase());

console.log("LOWERCASE", challenge.toLowerCase());

console.log("FIRST WORD", challenge.substring(0, 2));

console.log("REMAINING WORDS", challenge.substring(3, challenge.length));

console.log("INCLUDES", challenge.includes("Script"));

console.log("SPLITTED", challenge.split(" "));

const newString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log("SPLITTED WITH COMMA", newString.split(", "));

console.log("REPLACED", challenge.replace("JavaScript", "Python"));

console.log("CHARACTER AT INDEX 15", challenge.charAt(15));

console.log("CHARACTER CODE OF J", challenge.charCodeAt(challenge.indexOf("J")));

console.log("INDEX OF A", challenge.indexOf("a"));

console.log("LAST INDEX OF A", challenge.lastIndexOf("a"));

const sentence = "You cannot end a sentence with because because because is a conjunction";

console.log("INDEX OF BECAUSE", sentence.indexOf("because"));

console.log("LAST INDEX OF BECAUSE", sentence.lastIndexOf("because"));

console.log("SEARCH INDEX OF BECAUSE", sentence.search("because"));

const trailedWhitespace = " 30 Days Of JavaScript ";

console.log("TRAILING WHITESPACE", trailedWhitespace.trim());

console.log("STARTS WITH 30", challenge.startsWith("30"));

console.log("ENDS WITH OF", challenge.endsWith("JavaScript"));

console.log("MATCHES", challenge.match(/a/g));

console.log("CONCAT", new String("30 Days of").concat(" JavaScript"));

console.log("REPEAT", challenge.repeat(2));