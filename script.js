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

//Check whether a given string contains equal number of p's and t's
function checkPT(str) {
  var str_p = str.replace(/[^p]/g, "");
  var str_t = str.replace(/[^t]/g, "");

  var p_sum = str_p.length;
  var t_sum = str_t.length;

  return p_sum === t_sum;
}
console.log(checkPT("potato"));
console.log(checkPT("parrot"));
console.log(checkPT("type"));

//program to return the divvision of two non negative integer as string

function IntString(x, y) {
  if (y === 0) {
    return "it is not divideable";
  }
  var devide = Math.abs(x) / Math.abs(y);
  var result = devide.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return result;
}
console.log(IntString(20, 0));
console.log(IntString(123545, 2));
console.log(IntString(123545, 3));

//function to sort the words in alphabelical order
function sortString(str) {
  str = str.split(" ");

  var result = str.sort();

  return result.join(" ");
}
console.log(sortString("ball appple"));
console.log(sortString("mango apple"));

//function to return the string to n times
function Repeat(str, n) {
  if (n < 0) {
    return false;
  } else {
    return str.repeat(n);
  }
}
console.log(Repeat("pal", 3));

//take a string and make a new string using last 3 digits of string by repeating 4 times
function NewString(str) {
  var last = str.substring(str.length - 3);

  return last.repeat(4);
}
console.log(NewString("dream"));

//program to return the exact half of the string of even length
function halfString(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(halfString("garden"));
console.log(halfString("dreamgarden"));

//program to return new string by concartinating two string without first letter
function FirstString(str1, str2) {
  return str1.substring(1) + str2.substring(1);
}
console.log(FirstString("dream", "garden"));

//make new string by adding the last 3 digits of string to front
function lastFirst(str) {
  if (str <= 3) {
    return str;
  }

  return str.substring(str.length - 3) + str;
}
console.log(lastFirst("garden"));

//return the middle three char of string of odd
function midChar(str) {
  if (str.length % 2 === 0) {
    return str;
  }
  var mid = (str.length + 1) / 2;

  return str.substring(mid - 2, mid + 1);
}
console.log(midChar("garden"));
console.log(midChar("dream"));
console.log(midChar("gokarna"));

//return the concartinate two string if the length is not matched then remove the char form longer str
function conString(str1, str2) {
  // const m=Math.min(str1.length, str2.length)
  // console.log(m)
  // return(str1.substring(str1.length-m))+(str2.substring(str2.length-m))

  if (str1 < str2) {
    return str1 + str2.substring(0, str1.length);
  } else {
    return str1.substring(0, str2.length) + str2;
  }
}
console.log(conString("dream", "garden"));
console.log(conString("himachal", "gokarna"));

//check if the str is end with script
function checkScript(str) {
  return str.substring(str.length - 6, str.length) === "Script";
}
console.log(checkScript("javaScript"));
console.log(checkScript("server Script"));
console.log(checkScript("clientScript"));
console.log(checkScript("clientScripts"));

//return the string if the string strat with new and los
function NewLos(str) {
  if (str.substring(0, 3) == "New" || str.substring(0, 3) == "Los") {
    return str;
  }
  return "";
}
console.log(NewLos("New York"));
console.log(NewLos("LosAngels"));
console.log(NewLos("Angels"));

//Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function checkP(str) {
  if (str.charAt(0) == "p" || str.charAt(str.length - 1) == "p") {
    return str.substring(1, str.length - 1);
  }
  return str;
}
console.log(checkP("poop"));
console.log(checkP("port"));
console.log(checkP("troop"));

//return a new string using the n number of last and first character of str
function firstLastN(str, n) {
  var first = str.substring(0, n);
  var last = str.substring(str.length - n);
  return first + last;
}
console.log(firstLastN("gokarna", 2));
console.log(firstLastN("gokarna", 5));

function sumArray(nums) {
  var sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sumArray([20, 33, 44, 56]));

//Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function checkOne(arr) {
  return arr[0] == 1 || arr[arr.length - 1] == 1;
}
console.log(checkOne([2, 1, 2, 3, 4, 1, 3]));
console.log(checkOne([2, 1, 2, 3, 4, 1]));
console.log(checkOne([1, 2, 3, 4, 1, 3]));

//return all the int of array to largest value in array in first and last
function all_same(arr) {
  var max_arr = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = max_arr;
  }
  return arr;
}
console.log(all_same([1, 2, 3, 4, 5, 6]));
console.log(all_same([1, 2, 3, 4, 5, 7]));

//return the new array by combining middle elements of two array
function newArray(arr1, arr2) {
  if (arr1.length % 2 == 0 && arr2.length % 2 == 0) {
    mid1 = arr1[arr1.length / 2];
    mid2 = arr2[arr2.length / 2];
    return [mid1, mid2];
  }
  return false;
}
console.log(newArray([1, 5, 4, 7, 9, 5], [2, 5, 8, 9, 7, 4]));

//. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
function check(arr) {
  var flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 3) {
      flag = true;
    }
  }
  return flag;
}
console.log(check([3, 2, 4, 5, 6, 7]));
console.log(check([2, 4, 5, 1, 7]));
console.log(check([6, 2, 4, 5, 8, 7]));

//Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice.
function checkTwice(array) {
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 30 || array[i] === 40) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}
console.log(checkTwice([40, 5, 7, 8, 4, 40]));
console.log(checkTwice([40, 5, 7, 8, 4, 0]));
console.log(checkTwice([30, 5, 7, 8, 4, 30]));

//return the sum of the elements of integer
function add_digit(n) {
  var sum = 0;
  var digit = n.toLocaleString().split("");
  for (let i = 0; i < digit.length; i++) {
    sum += parseInt(digit[i]);
  }
  return sum;
}
console.log(add_digit(225));
console.log(add_digit(785));

//find the largest element in the array
function largest(arr) {
  var large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}
console.log(largest([1, 2, 4, 5, 8]));

function largeString(str) {
  var largest = str[0];
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > largest.length) {
      largest = str[i];
    }
  }
  return largest;
}
console.log(largeString(["ball", "great"]));
console.log(largeString(["ball", "great", "garden", "hello"]));

const array = ["sandesh", "gokarnaChau", "bisheshLim"];
let longLenth = [0];
//let shortLength = [0];
array.forEach((element, index) => {
  if (longLenth.length < element.length) {
    longLenth = element;
  }
});
console.log(longLenth);

// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.

function NextLetter(str) {
  strArr = str.split("");
  let newString = "";

  for (let i = 0; i < strArr.length; i++) {
    strCode = str[i].charCodeAt() + 1;
    newString += String.fromCharCode(strCode);
  }
  return newString;
}
console.log(NextLetter("abc"));
console.log(NextLetter("dream"));

// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
function SumPart(arr) {
  let newArr = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      newArr[1] += arr[i];
    } else {
      newArr[0] += arr[i];
    }
  }
  return newArr;
}
console.log(SumPart([1, 2, 4, 5, 6, 7]));

function MatchArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(MatchArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(MatchArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]));

function kth_large(arr, k) {
  let large = arr[0];
  for (let i = 0; i < k; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}
console.log(kth_large([2, 3, 4, 6, 5], 4));

//merge two string

function mergeStr(str1, str2) {
  let newStr = "";

  for (let i = 0; i < str1.length && i < str2.length; i++) {
    newStr += str1[i] + str2[i];
  }
  return newStr;
}
console.log(mergeStr("Hello", "world"));

//function to sort the sentance alphabetically
function SortSentence(str) {
  return str.toLowerCase().split(" ").sort().join(" ");
}
console.log(SortSentence("This is test sentence"));

const man = {
  name: "gokarna",
  age: 23,
  adderess: "kalanki",
};
console.log(man);
for (const [key, value] of Object.entries(man)) {
  console.log(`${key}: ${value}`);
}

//check if two array are equivalent
function checkArray(arr1, arr2) {
  let arr = "";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr = true;
      } else {
        arr = false;
      }
    }
  }
  return arr;
}
console.log(checkArray([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(checkArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(checkArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

//return the elements of string to capitalized
function CapitalLetter(str) {
  result = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}
console.log(CapitalLetter("Eng"));
console.log(CapitalLetter("english"));

function reverseSection(arr) {
  if (arr.length % 2 !== 0) {
    return false;
  }
  var part1 = arr.slice(0, arr.length / 2);
  var part2 = arr.slice(arr.length / 2, arr.length);
  return part2 + "," + part1;
}
console.log(reverseSection([1, 2, 3, 4, 5, 6]));
console.log(reverseSection([2, 5, 4, 7, 8, 6, 5, 4, 7, 5]));

//duplicate elelment in array
function duplicateArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArray.indexOf(arr[i]) == -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(duplicateArray([1, 2, 2, 3, 1, 5, 4]));

//Error handling of undefined object handling
try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error: Property access to undefined object");
  } else {
    throw error;
  }
}

//handle the exception of nuimber devide if the second number is 0 then throw error
function Divide_Error(num1, num2) {
  if (num2 === 0) {
    //throw new Error("Error: Undivisible");
  }
  return num1 / num2;
}

console.log(Divide_Error(40, 2));
console.log(Divide_Error(40, 0));

//Empty Array handling exception
function EmptyArray(arr) {
  if (arr.length === 0) {
    throw new Error("array is empty");
  }
}
try {
  const result = EmptyArray([]);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

//Array index outof bound
function arrOutOfBound(arr, i) {
  try {
    if (arr[i] == undefined) {
      throw new Error("Error: Array index out of boud");
    }
    return arr;
  } catch (error) {
    console.log(error.message);
  }
}
console.log(arrOutOfBound([1, 2, 3, 5], 4));

//handling multiple error
function MultipleError(x, y) {
  try {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new TypeError("both arguments should be number");
    }
    if (y === 0) {
      throw new Error("Invalid number. it is not divisible");
    }

    return x / y;
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("TypeError:", error.message);
    } else {
      console.log("Error:", error.message);
    }
  } finally {
    console.log("CleanUp code executed.");
  }
}
console.log(MultipleError(40, "2"));
console.log(MultipleError(40, 0));

// Decode uri error
function Decode_URI(uriString) {
  try {
    const DecodedURI = decodeURI(uriString);
    return DecodedURI;
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError:", error.message);
    }
  }
}
console.log(Decode_URI("https://example.com/"));
console.log(Decode_URI("https://example.com/%%invalidURI"));

//Syntax error handling
function JsonDataHandling(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("SyntaxError:", error.message);
    }
  }
}
console.log(JsonDataHandling('{"name":"gokarna", "age":22}'));
console.log(JsonDataHandling('{"name":"gokarna", "age":22,}'));

function js_style() {
  const Text = document.getElementById("text");
  Text.style = "color:red; font-size: 20px; font-family:Comic Sans MS";
}

//get form data
function getFormData() {
  var form = document.getElementById(["form1"]);
  for (var i = 0; i < form.length; i++) {
    if (form.elememts[i].value != "submit") {
      console.log(form.elememts[i].value);
    }
  }
}

//to insert the row in tabkle
function InsertTable() {
  var x = document.getElementById("myTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);

  y.innerHTML = "New Cell";
  z.innerHTML = "New Cell";
}
//change the content of table row and col
function changeContent() {
  var row = prompt("Enter the row");
  var col = prompt("Enter the column");
  var text = prompt("Enter the content to be changed");

  var table =
    document.getElementById("sampleTable").rows[parseInt(row, 10)].cells;
  table[parseInt(col, 10)].innerHTML = text;
}

//create table using user inputs
function createTable() {
  rown = prompt("Enter the number of rows", 1);
  coln = prompt("Enter the number of cols", 1);
  for (var r = 0; r < parseInt(rown, 10); r++) {
    var T = document.getElementById("Mytable").insertRow(r);
    for (var c = 0; c < parseInt(coln, 10); c++) {
      var y = T.insertCell(c);
      y.innerHTML = "row" + r + "col" + c;
    }
  }
}

//remove the option form dropdown
function removeData() {
  var Data = document.getElementById("RemoveData");
  Data.remove(Data.selectedIndex);
}

//show random image
function RandomImage() {
  var Images = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "240",
      height: "160",
    },
  ];
  console.log(Image.length);
  var preBuffer = [];

  for (var i = 0; i < Image.length; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = Image[i].src;
    preBuffer[i].width = Image[i].width;
    preBuffer[i].height = Image[i].height;
  }

  function getRandomInt(min, max) {
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }
  var newImage = getRandomInt(0, preBuffer.length - 1);

  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  document.body.appendChild(newImage);
}

//delete the property from object
Object.objsize = function (Myobj) {
  var osize = 0,
    key;
  for (key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};
var student = {
  name: "gokarna",
  roll: 22,
  class: "bachelor",
};
console.log(student);
delete student.class;
console.log(student);
var objsize = Object.objsize(student);
console.log("size of object:" + objsize);

//object operations
function person(fname, lname, age) {
  this.Fname = fname;
  this.Lname = lname;
  this.Age = age;
}
person.prototype.name = function () {
  return this.Fname + " " + this.Lname;
};
const Man = new person("gokarna", "chaudhary", 22);
console.log("My name is " + Man.name());

var man1 = {
  fname: "Rohan",
  lname: "Shrestha",
  age: 22,
  address: "Lalitpur",
};
var man2 = {
  fname: "Bishesh",
  lname: "Limbu",
};

Object.assign(man1, man2);

var data = Object.entries(man1);
console.log(data);

var fruits = {
  banana: 200,
  apple: 2220,
  mango: 100,
  lichhi: 2000,
};

let Data = "";
for (let [name, amount] of Object.entries(fruits)) {
  Data += name + ":" + amount + ", ";
}
console.log(Data);

//setTimeOut
const myTime = setTimeout(Wish, 2000);
function Wish() {
  //alert('hello its been 2 second');
  console.log("hello it is call after 2sec");
}

//Write a JavaScript program to check a credit card number.
function checkCreditCard(string) {
  let regular = (regexp =
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/);
    if(regular.test(string)){
      return 'valid';
    }else{
      return ' valid'
    }
  }
console.log(checkCreditCard(123456789545121361))