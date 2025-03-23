// 1.	Create a Date object with the current date and change the year to 2000. Print the updated date

let currentdate = new Date()
console.log (currentdate)
currentdate.setFullYear(2000)
console.log(currentdate)

// 2.	Set the year of today’s date 5 years ahead from the current year(use setFullyear for getFullyear)

let curentdate = new Date()
console.log(curentdate.getFullYear())
curentdate.setFullYear(2030)
console.log(curentdate)

// 2nd method

let curenttdate = new Date()
curenttdate.setFullYear(curenttdate.getFullYear() + 5)
console.log(curenttdate)


// 3.	Change the month of the current date to December and display the result.(use index of month)
let date = new Date()
console.log(date)
date.setMonth(11)
console.log(date)

// 4.	Write a function named greet that takes a name as a parameter and returns a greeting message(like hello and name)

function greet(name){
  return "hello" + name
}
console.log(greet("zukhruf"))

// 5.	Create a function called add that takes two numbers as parameters and returns their sum.

function add(a, b){
    return a + b
}
console.log(add (5,5))

// 6.	Write a function multiply that takes three numbers as arguments and returns their product.

function multiplication(x,y,z){
    return x*y*z
}
console.log(multiplication(2,3,4))

// 7.	Write a function doubleno that takes a number as input and returns double its value.(like 2 with param)

function doubleno(number){
 return number * 2
}
console.log(doubleno(4))

// 8.	Write a function getFullName that takes a first name and last name as parameters and returns the full name.

function getFullName(firstname, lastname ){
 return firstname + lastname
}
console.log(getFullName("Saylani","Smith"))
