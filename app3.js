// //1. Check Character Type (Number, Uppercase, or Lowercase)
// let char = prompt("Enter a character:");
// let ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     console.log("Number");
// } else if (ascii >= 65 && ascii <= 90) {
//     console.log("Uppercase Letter");
// } else if (ascii >= 97 && ascii <= 122) {
//     console.log("Lowercase Letter");
// } else {
//     console.log("Other Character");
// }



// //2. Display the Larger Integer or If Equal
// let num1 = prompt("Enter the first integer:");
// let num2 = prompt("Enter the second integer:");

// if (num1 > num2) {
//     console.log(`${num1} is larger.`);
// } else if (num2 > num1) {
//     console.log(`${num2} is larger.`);
// } else {
//     console.log("Both integers are equal.");
// }



// //3. Check if Number is Positive, Negative, or Zero
// let number = (prompt("Enter a number:"));

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }




// //4. Check if Character is a Vowel
// let char = prompt("Enter a character:").toLowerCase();

// if ("aeiou".includes(char)) {
//     console.log(true);
// } else {
//     console.log(false);
// }



// //5. Password Validation
// let correctPassword = "password123";
// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password");
// }



// //6.Fix the If/Else Statement
// let greeting;
// let hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);




// //7.Convert 24-Hour Time to AM/PM
// let time = prompt("Enter time in 24-hour format (e.g., 1900):"));

// if (time >= 0 && time < 1200) {
//     console.log("Morning");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Evening");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Night");
// } else {
//     console.log("Invalid time input");
// }
