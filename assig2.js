// Chapter 15: Arrays [Use index number]

//1.          Q1: Declare an array named `fruits` and display the third fruit.

let fruits = ["Banana", "Lichi", "Mango", "Apple", "Strawberry"]
console.log(fruits)
// displaying 3rd number fruit
console.log(fruits[2])


// 2.          Q2: Define an array of cities and display the first and last city.

let cities = ["Peshawar", "Multan", "Karachi", "Lahore", "Islamabad"]
console.log(cities)
// displaying first and last city
console.log(cities[0])
console.log(cities[4])


// 3.          Q3: Declare an array with mixed data types and display each element.

let mixdata = ["apple", "huma", 1, 2, 3, "true", "false"]
console.log(mixdata)

// ---------------------------------------------------------------->

// Chapter 16: Adding and Removing Elements in Arrays
// 4.          Q1: Declare an empty array and add five student names.

let emptyarray = [];
console.log(emptyarray)
emptyarray.push("Zukhruf")
emptyarray.push("huma")  
emptyarray.push("saba")
console.log(emptyarray)
// 2nd method
emptyarray[3] = ("sehrish")
emptyarray[4] = ("kausar")
console.log(emptyarray)

// 5. Q2: Declare an array of colors. Use `push()` to add two colors at the end of an array.

let colors = ["Black", "Red", "Golden" , "White" , "Purple"]
 console.log(colors)
 colors.push("green")
 colors.push("yellow")
 console.log(colors)


//  6. Q3: Declare an array with five numbers and add a new number at the end

let numbers = [ 1,2,3,4,5]
console.log(numbers)
numbers.push(6)
numbers.push(7)
numbers.push(8)
numbers.push(9)
console.log(numbers)

// 7. Q4: Use `pop()` to remove the last element from an array

let removearry = [ 1,2,3,4,5]
console.log(removearry)
removearry.pop()
console.log(removearry)

// Chapter 17: Removing, Inserting, and Extracting Elements

// 8. Q1: Declare an array named `animals ` Use `unshift()` to add an animal at the start of an array.

let animals = ["cat","dog","cow", "rabbit"]
console.log(animals)
animals.unshift("goat")
console.log(animals)


// 9. Q2: Use `shift()` to remove the first element of an array

let cars = ["mehran", "BNW" , "Rangrover", "Bugati"]
console.log(cars)
cars.shift()
console.log(cars)


// 10. Q3: Copy the first three elements from an array of sports into a new array. [Use slice method]

let sports = [ "cricket", "hocky", "tennis" , "vollyball", "football"]
console.log(sports)
sports.slice(0,3)
console.log(sports.slice(0,3))
  
// 11. Q4: Use `slice()` to extract and copy the last three elements of an array.hint(use negative index)

let sportsss = [ "cricket", "hocky", "tennis" , "vollyball", "football"]
console.log(sportsss)
sportsss.slice(-3)
console.log(sportsss.slice(-3))


// 12. Q5: Use `splice()` to remove two elements from index 2 in an array.

let items = [1,2,3,4,5,6 ]
console.log(items)
items.splice(2,2);
console.log(items)


// 13. Q6: Use `splice()` to add two cities at index 3 of an array.

let city = ["Peshawar", "Multan", "Karachi", "Lahore", "Islamabad"]
console.log(city)
console.log(city.splice(2,0, "kpk", "abtabad"))
console.log(city)


// 14. Q7: Use `slice()` to extract and copy the last three elements of an array.

let  extractarray= [ 0,1,2,3,4,5]
 console.log( extractarray)
 extractarray.slice(-3)
 console.log(extractarray.slice(-3))

// 15. Q8: Use `splice()` to replace two elements in an array.

let fruitsss = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
console.log(fruitsss)
fruitsss.splice(2, 2, "Grapes", "Mango") 
console.log(fruitsss)


// 16. Q9: Remove a subject from an subject array using `splice()` after taking index number from user.

let subjects = ["Math", "English", "Computer Science"];
console.log(" original array : " + subjects)
let index = prompt("Enter the index of the subject to remove:");
subjects.splice(index,1)
console.log(subjects)


// 17. Q10: Insert 'Laptop' and 'Tablet' at index 2 in an array of gadgets. [Use splice method]

let gadgets = ["Phone", "Smartwatch", "Camera", "Speaker"]
console.log(gadgets)
gadgets.splice(2, 0, "Laptop", "Tablet") 
console.log(gadgets) 
