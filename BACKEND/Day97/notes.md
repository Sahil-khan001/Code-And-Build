API's level Validation -- 

npm install validator installs the Validator.js library into your project.

It is used to validate and sanitize strings, especially user input.

Install
npm install validator
Use
const validator = require("validator");

console.log(validator.isEmail("abc@gmail.com")); // true
console.log(validator.isEmail("abcgmail.com"));  // false

console.log(validator.isURL("https://google.com")); // true
console.log(validator.isNumeric("12345"));          // true
console.log(validator.isEmpty(""));                 // true
Why use it?

Instead of writing validation yourself, it provides ready-made functions like:

isEmail()
isURL()
isMobilePhone()
isNumeric()
isLength()
isStrongPassword()

In one line: validator is an npm package that helps you check whether user input is valid before saving it to your database or processing it.

gpt tell me in short all imp. fuctions that we used most in short

Here are the most commonly used validator functions:

Function	Example	Returns
isEmail(str)	"abc@gmail.com"	Checks email
isURL(str)	"https://google.com"	Checks URL
isMobilePhone(str, "en-IN")	"9876543210"	Checks phone number
isStrongPassword(str)	"Abc@12345"	Checks password strength
isLength(str, { min: 3, max: 20 })	"Aman"	Checks string length
isEmpty(str)	""	Checks if string is empty
isNumeric(str)	"12345"	Checks if only numbers
isAlpha(str)	"Aman"	Checks if only letters
isAlphanumeric(str)	"Aman123"	Checks letters + numbers
equals(str1, str2)	"abc", "abc"	Compares two strings
contains(str, seed)	"Hello GPT", "GPT"	Checks if text contains a word
matches(str, regex)	"abc123", /^[a-z]+\d+$/	Checks using regex
isJSON(str)	'{"name":"Aman"}'	Checks valid JSON
isDate(str)	"2026-07-19"	Checks valid date
escape(str)	"<script>"	Escapes HTML (&lt;script&gt;)
trim(str)	" Aman "	Removes spaces from both ends
normalizeEmail(str)	"ABC@GMAIL.COM"	Normalizes email format
Most important for backend (Express + MongoDB)
✅ isEmail()
✅ isStrongPassword()
✅ isLength()
✅ isEmpty()
✅ isMobilePhone()
✅ trim()
✅ escape()

These are the functions you'll use most often while validating data from req.body before saving it to MongoDB.

<!-- ----------------------------------------------------------------------------------------------------------------------------- -->


we can validate data based on API's level --
api level validation 

-- like before this line can we validate the data --

// app.post("/info" , async (req , res)=>{
//     await User.create(req.body);
//     res.send("User Registered Successfully");
// })


await User.create(req.body);
before creating the data in backend can we validate the date 
means whatever data we are going to send first validate then create/store

for this --
like in first name we mention in schema validation -- required : true
can we check here 
that data consist of firstname or not --


benefit is --
if we do at schema level than what happened we have high bill 
soo much network call
all validation at schema level 

why not at api level otherwise for each quiery pay the money --
now how we write code for field that have required : true;

const mandatoryField = ["firstName" , "email", "age"];

const isAllowed = manatoryField.every((k) => Object.keys(req.body).includes(k));
if(!isAllowed)
throw new Error("Field Missing");