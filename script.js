let num1;
let num2;

let output = document.querySelector("#output");

// Function to validate the input
function validateInput(input) {
  // Regular expression to check for any non-digit characters or spaces
  const isValid = /^\d+(\.\d+)?$/.test(input);
  return isValid;
}

function updateNumbers() {
  num1 = parseFloat(document.querySelector("#firstNumber").value);
  num2 = parseFloat(document.querySelector("#secondNumber").value);
}

function sum() {
  updateNumbers();

  if (!isNaN(num1) && !isNaN(num2)) {
    output.value = num1 + num2;
  } else {
    output.value = "Invalid number";
  }
}

function sub() {
  updateNumbers();

  if (!isNaN(num1) && !isNaN(num2)) {
    output.value = num1 - num2;
  } else {
    output.value = "Invalid number";
  }
}
function mul() {
  updateNumbers();

  if (!isNaN(num1) && !isNaN(num2)) {
    output.value = num1 * num2;
  } else {
    output.value = "Invalid number";
  }
}
function div() {
  updateNumbers();

  if (!isNaN(num1) && !isNaN(num2)) {
    output.value = num1 / num2;
  } else {
    output.value = "Invalid number";
  }
}
function mod() {
  updateNumbers();

  if (!isNaN(num1) && !isNaN(num2)) {
    output.value = num1 % num2;
  } else {
    output.value = "Invalid number";
  }
}

//showing current time and day
var today = new Date();
var day = today.getDay();

var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
console.log("Today is:" + dayList[day]);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = hour >= 12 ? "PM" : "AM";

var hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

console.log(
  "Current Time is: " + hour + " " + prepand + " : " + minute + " : " + second
);

//print window content
function print_current_page() {
  window.print();
}

//showing current date
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

//format date as mm-dd-yyyy
today = mm + "-" + dd + "-" + yyyy;
console.log(today);

//formate date as mm/dd/yyyy
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

//format date as dd-mm-yyyy
today = dd + "-" + mm + "-" + yyyy;
console.log(today);

//format date as dd/mm/yyyy
today = dd + "/" + mm + "/" + yyyy;
console.log(today);

//area of triangle with sides 5,6,7
var s1 = 5;
var s2 = 6;
var s3 = 7;

var s = (s1 + s2 + s3) / 2;

var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log("Area of Traingle: " + area);

//leap year
function leapYear(year) {
  return year % 4 === 0 ? year % 100 === 0 : year % 400 === 0;
}
console.log(leapYear(2000));

//to find the 1st january is sunday in between 2014 and 2050

for (var year = 2014; year <= 2050; year++) {
  var date = new Date(year, 0, 1);

  if (date.getDay() === 0) {
    console.log("1st january is sunday in " + year);
  }
}

//Program that takes the random numbers between 1 and 2 and prompt the user to gusess the number
// var num = Math.ceil(Math.random() * 10);
// console.log(num);

// var guess =prompt("Guess the number between 1 to 10 inclusive");

// if (isNaN(guess) || guess == "") {
//   alert("invalid number");
// } else if (guess == num) {
//   alert("good Job");
// } else {
//   alert("Not Matched, the number was " + num);
// }

//calculate the number of days until the cristmas
today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);

//check if the current date is after the december 25th
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}

//conver the one day to millisecond
var one_day = 1000 * 60 * 60 * 24;

var days = Math.ceil((cmas.getTime() - today.getTime()) / one_day);
console.log(days + " days are left until cristmas");

//MUltiply and divide

function MultiplyBy() {
  var Num1 = document.getElementById("num1").value;
  var Num2 = document.getElementById("num2").value;
  if (Num1 !== "" && Num2 !== "") {
    var output = Num1 * Num2;
  } else {
    output = "Fill the fields";
  }

  document.getElementById("result").innerHTML = output;
}

function DivideBy() {
  var Num1 = document.getElementById("num1").value;
  var Num2 = document.getElementById("num2").value;
  if (Num1 !== "" && Num2 !== "") {
    var output = Num1 / Num2;
  } else {
    output = "Fill the fields";
  }

  document.getElementById("result").innerHTML = output;
}

//Centigrate to and form Fahrenheit

function cTOf(celsius) {
  var Centigrate = celsius;

  var Fahrenheit = (9 * Centigrate) / 5 + 32;
  var result = Centigrate + "\xB0C is " + Fahrenheit + "\xB0F";
  console.log(result);
}
cTOf(36);

function fToc(fahre) {
  var Fahrenheit = fahre;

  var Centigrate = (5 / 9) * (Fahrenheit - 32);
  var result = Fahrenheit + "\xB0F is " + Centigrate + "\xB0C";
  console.log(result);
}
fToc(96);

//Create a variable using a user-defined name
var user_name = "gokarna";
var name = "bishesh";

this.user_name = name;

console.log(this.user_name);

//get the extension of file

var filename = "index.php";
console.log(filename.split(".").pop());
//reassign the file
filename = "index.js";
console.log(filename.split(".").pop());

//program to return difference of number and 13
function difference(num) {
  if (num <= 13) {
    return 13 - num;
  } else {
    return (num - 13) * 2;
  }
}
console.log(difference(11));

//program to return sum if nums are equal then triple of sum
function sum(n1, n2) {
  if (n1 == n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(sum(2, 3));

//check if one of number is 50 or sum of numbers is 50
function check(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(check(20, 30));

//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function testHundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(testHundred(380));

//Remove a character at the specified position of a given string and return the new string
function remove_character(str, remove) {
  var part1 = str.substring(0, remove);
  var part2 = str.substring(remove + 1, str.length);

  return part1 + part2;
}
console.log(remove_character("gokarna", 1));

//Create a new string from a given string changing the position of first and last characters

function replaceChar(str) {
  if (str.length <= 1) {
    return str;
  }

  mid_char = str.substring(1, str.length - 1);

  return str.charAt(str.length - 1) + mid_char + str.charAt(0);
}

console.log(replaceChar("go"));

//new string with the first letter is added to front and back
function newStr(str) {
  if (str.length <= 1) {
    return str;
  }
  mid_str = str.substring(1, str.length - 1);

  return str.charAt(0) + mid_str + str.charAt(0);
}
console.log(newStr("mango"));

//multiple of by 3 and 7

function checkMultiple(num) {
  if (num % 3 == 0 || num % 7 == 0) {
    return "multiple of 3 and 7";
  } else {
    return "not the multiple of 3 and 7";
  }
}
console.log(checkMultiple(27));

//Create a new string from a given string taking the last 3 characters and added at both the front and back
function backRepace(str) {
  if (str.length < 3) {
    return str;
  }
  back = str.substring(str.length - 3);
  return back + str + back;
}
console.log(backRepace("radhe"));

//check if the string starts with java

function checkJava(str) {
  if (str < 4) {
    return false;
  }

  front = str.substring(0, 4);

  if (front == "java") {
    return true;
  } else {
    return false;
  }
}
console.log(checkJava("javaScript"));
console.log(checkJava("script"));

function check(num) {
  if (num >= 50 && num <= 99) {
    return true;
  } else {
    return false;
  }
}
console.log(check(52));
console.log(check(100));

function threeCheck(a, b, c) {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}
console.log(threeCheck(20, 50, 99));
console.log(threeCheck(50, 52, 99));

// check if the script is in the 5th position
// function script(str) {
//   if (str < 6) {
//     return str;
//   }
//   var newStr = str;

//   if (str.substring(10, 4) == "script") {
//     newStr = str.substring(0, 4) + str.substring(10, str.length);
//   }
//   return newStr;
// }
// console.log(script("javascript"));

//closest value to 100
function closest(x, y) {
  if (Math.abs(x - 100) < Math.abs(y - 100)) {
    return x + " is closer to 100";
  } else {
    return y + " is closer to 100";
  }
}
console.log(closest(40, 30));

//ramnge check to 40-60 or 70-100
function Range(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return "is in range";
  } else {
    return "is not in range";
  }
}
console.log(Range(52, 55));
console.log(Range(66, 87));
console.log(Range(74, 87));

//check the char in the string
function check_str(str, char) {
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) return true;
  return false;
}
console.log(check_str("gokarna", "o"));

// check the three number that has same last digit
function checkLast(x, y, z) {
  if (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10) {
    return true;
  } else {
    return false;
  }
}
console.log(checkLast(22, 30, 300));
console.log(checkLast(10, 30, 300));

//program to make the string upper and lower case
function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }

  front = str.substring(0, 3).toLowerCase();
  back = str.substring(3, str.length).toUpperCase();

  return front + back;
}
console.log(upper_lower("gokarna"));
console.log(upper_lower("gok"));

function checkSum(x, y) {
  if (x == 15 || y == 15 || x + y == 15 || x - y == 15) {
    return true;
  }
  return false;
}
console.log(checkSum(10, 5));
console.log(checkSum(10, 10));

//multiple of 7
function checkMul(a, b) {
  return Math.abs(a) % 7 == 0 || Math.abs(b) % 7 == 0;
}
console.log(checkMul(21, 24));
console.log(checkMul(20, 24));

//reverse string
function ReverseString(str) {
  return str.split("").reverse().join("");
}
console.log(ReverseString("javaScript"));

//make the first letter uppercase of sting
function upperCase(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
}
console.log(upperCase("This is test code"));

//given integer to time
function timeInt(num) {
  var hour = Math.floor(num / 60);
  var minute = num % 60;
  return hour + ":" + minute;
}
console.log(timeInt(75));

//short the char of word alphabelically
function Sort(str) {
  str = str.split("").sort().join("");
  return str;
}
console.log(Sort("world"));

//match the pattern
function ab_match(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}
console.log(ab_match("gokarnab"));
console.log(ab_match("gokarnb"));

//count vowels in string
function countVowel(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("gokarna"));
console.log(countVowel("what is this man"));
