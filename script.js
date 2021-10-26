// 0. Create as many variables with your favorite foods and log them to the console in less than 1 minute. The first one has been provided.
var favFood1 = "Pizza";
var favFood2 = "Chicken";
var favFood3 = "Pasta";
var favFood4 = "Apples";
var favFood5 = "Pesto";



//1a. CREATE a list of your favorite foods (also known as an array in Javascript)
var favFood = ["Pizza", "Chicken", "Pasta", "French Fries", "Apple", "Pesto"]


// b. Print out the entire array
console.log(favFood)
console.log(favFood[5])
console.log(favFood[1])

//c. add food item
favFood.push("Stew")
console.log(favFood)
favFood.push("Ice Cream")
console.log(favFood)

//d. Change the 2nd food to a different food
favFood[1] = "Peanut Butter Cup"
console.log(favFood)

//e. Remove an item .pop() .shift()
favFood.pop()
console.log(favFood)

favFood.shift()
console.log(favFood)
//f. remove the first item
favFood.shift()
console.log(favFood)


//g. Print out the length of the favFoods array
console.log(favFood.length)


//2. READ: Access the 5th value in the array below using index values.
var names = ["Nafi", "Abdoulbaari", "Sena", "Ashton", "Salimata", "Afi", "Mike", "Mohamed", "Niya", "Dayja-Ney", "Abdurahman", "Nathaniel", "Michelle", "Justin", "Mosiah", "Walid", "Joi", "Rafiq", "Majic", "Karen", "Jasmine", "Tediane", "Samiya"];
console.log(names[4])



//3. UPDATE: Change the 3rd student on the list to a different name.
names[2] = "Momo"


//4. UPDATE: Using .push, add more students not currently in the class to the list
names.push("Sena")


//5. DELETE: Remove a student from the list using .pop and .shift.
names.pop()
names.shift()


//6. Insert an item into the list of names


//7. Replace the student at index of 2 with the variable below.
var newStudent = "Steven";
names[2] = newStudent


//8. Print out the current length of your list of names.
console.log(names.length)


//9. Print out the message "_______ takes computer science for the first 5 people in the array"
console.log(`${names[0]} takes computer science`)
console.log(`${names[1]} takes computer science`)
console.log(`${names[2]} takes computer science`)
console.log(`${names[3]} takes computer science`)
console.log(`${names[4]} takes computer science`)


//10. Create an array of your favorite TV shows. Add at least 6 TV shows to the array
var tvShows = ["Rick and Morty", "Bobs Burgers", "Family Guy", "The Simpsons", "South Park", "Archer"]


//11. Print out the length of the TV shows array
console.log(tvShows.length)


//12. Print out "I like to watch _____" for the 3rd, 4th, and 5th items on your list
console.log(`I like to watch ${tvShows[2]}`)
console.log(`I like to watch ${tvShows[3]}`)
console.log(`I like to watch ${tvShows[4]}`)




//13. Delete the tv show that is at the index of 3
tvShows.splice(3,1)
console.log(tvShows)

//14. Sort the TV shows array so that the shows are alphabatized
tvShows.sort()
console.log(tvShows)



var cool_numbers = [
  99, 18, 89, 8, 48, 61, 30, 66, 14, 68, 76, 38, 37, 59, 38, 12, 87, 25, 67, 53, 17, 23, 89,
  45, 43, 99, 96, 21, 35, 79, 88, 63, 91, 15, 58, 5, 73, 58, 13, 41, 77, 84, 31, 22, 57,
  24, 72, 2, 90, 77, 39, 67, 55, 0, 73, 61, 65, 70, 17, 83, 99, 79, 56, 32, 66, 12, 9,
  92, 20, 76, 52, 67, 11, 89, 53, 6, 58, 2, 10, 30, 21, 23, 62, 84, 24, 27, 48, 49, 90,
  18, 76, 78, 20, 88, 80, 21, 59, 52, 83, 12, 40, 77, 53, 78, 88, 49, 93, 39, 21, 42,
  71, 59, 53, 14, 21, 9, 68, 46, 81, 48, 53, 98, 51, 77, 65, 64, 93, 11, 73, 91, 31, 62,
  98, 73, 85, 43, 61, 82, 81, 1, 43, 73, 25, 62, 14, 71, 37, 61, 14, 35, 6, 12, 43, 73,
  4, 39, 76, 79, 13, 78, 7, 19, 61, 58, 30, 10, 84, 84, 3, 51, 33, 10, 15, 3, 44, 45,
  28, 61, 58, 10, 13, 40, 85, 49, 13, 60, 16, 62, 5, 93, 7, 87, 42, 69, 27, 22, 40,
  5, 19, 30
]
//15. Sort the cool_numbers array from highest to lowest
cool_numbers.sort()
console.log(cool_numbers)

//16. CHALLENGE: Print out a random number in the array using Math.random



//17. CHALLENGE: Print out the maximum value in the cool_numbers array
