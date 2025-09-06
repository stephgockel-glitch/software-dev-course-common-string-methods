let inputString = " Welcome to the Coding Bootcamp! Learn JavaScript today. ";

// ----------------
// 1. Searching
// ----------------

// 1.1 Check if "JavaScript" is in the string
let hasJavaScript = inputString.includes("JavaScript");
console.log("Has JavaScript:", hasJavaScript);

// 1.2 Find the position of "Coding"
let codingPosition = inputString.indexOf("Coding");
console.log("Coding Position:", codingPosition);

// 1.3 Check if the string starts with "Welcome"
let startsWithWelcome = inputString.trim().startsWith("Welcome"); 
console.log("Starts with Welcome:", startsWithWelcome);

// 1.4 Check if the string ends with "today."
let endsWithToday = inputString.trim().endsWith("today.");
console.log("Ends with today:", endsWithToday);

// ----------------
// 2. Transforming
// ----------------

// 2.1 Convert to lowercase
let lowercaseString = inputString.toLowerCase();
console.log("Lowercase String:", lowercaseString);

// 2.2 Convert to uppercase
let uppercaseString = inputString.toUpperCase();
console.log("Uppercase String:", uppercaseString);

// 2.3 Remove extra spaces
let trimmedString = inputString.trim();
console.log("Trimmed String:", trimmedString);

// 2.4 Replace "JavaScript" with "coding"
let replacedString = inputString.replace("JavaScript", "coding");
console.log("Replaced String:", replacedString);

// ----------------
// 3. Breaking Apart
// ----------------

// 3.1 Split into words
let wordsArray = inputString.trim().split(" ");
console.log("Words Array:", wordsArray);

// ----------------
// 4. Retrieving
// ----------------

// 4.1 First character of trimmed string
let firstCharacter = trimmedString.charAt(0);
console.log("First Character:", firstCharacter);

// 4.2 Extract "Bootcamp"
let extractedBootcamp = inputString.slice(
  inputString.indexOf("Bootcamp"),
  inputString.indexOf("Bootcamp") + "Bootcamp".length
);
console.log("Extracted Bootcamp:", extractedBootcamp);
