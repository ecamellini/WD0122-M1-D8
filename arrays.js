console.log("----------------ARRAYS/LISTS------------------\n")

// We want to represent a grocery list
// A grocery list item could be something like "Milk"

let groceryList = [
  "Milk", "Biscuits", "Sugar"
] // This is a list of strings
console.log(groceryList)

let multiplesOfFive = [5, 10, 15, 20, 25]
console.log(multiplesOfFive)

let orders = [
  { id: "1234", product: "iPhone", quantity: 1},          // first element, index 0
  { id: "0912", product: "Paper clips", quantity: 50},    // second element, index 1
  { id: "0213", product: "Post it notes", quantity: 100}, // third element, index 2
]

console.log("\n---------------KNOW HOW MANY THEY ARE------------------\n")

console.log("How many items does our grocery list contain?")
console.log(groceryList.length)

console.log("\n---------------ACCESS THE VALUE OF AN ITEM------------------\n")

// Let's get the second order from the orders list.
// IN ARRAYS, THE ORDER MATTERS. THEY ARE SEQUENCES.
// The items are in the order of insertion/of declaration
// You always start counting from 0, so the second element has index 1 in the sequence
let secondOrder = orders[1]
console.log(`The second order in the list of order is:`)
console.log(secondOrder)

console.log(`\nThe quantity of the third order is: ${orders[2].quantity}`)

console.log("\nThe sum of the first two multiples of five is:")
console.log(multiplesOfFive[0] + multiplesOfFive[1])

// Another way to do it
console.log("\nThe sum of the third and fourth multiples of five is:")
let third = multiplesOfFive[2]
let fourth = multiplesOfFive[3]
console.log(third + fourth)

console.log("\n---------------ADDING AN ITEM AT THE END------------------\n")
groceryList.push("10 oranges")
console.log("We added oranges to our grocery list.")
console.log(groceryList)

console.log("\n---------------ADDING AN ITEM IN THE MIDDLE------------------\n")
// Splice (unfortunately) is the way to insert & remove elements in arrays in JS
// The first element you pass inside the round brackets is the POSITION in the array where you want to operate.
// The second element is HOW MANY items you want to remove starting from there
// The third element is the item / items to insert starting from there
groceryList.splice(1,0,"Water")
console.log(groceryList)

console.log("\n---------------REMOVE AN ELEMENT------------------\n")
// We want to remove the first element
groceryList.splice(0, 1) // This will remove the element with index 0
console.log(groceryList)

// Let's remove also the third element
groceryList.splice(2, 1)
console.log(groceryList)


console.log("\n---------------FIND THE INDEX OF AN ELEMENT------------------\n")
console.log(`Biscuits are in the list at index: ${groceryList.indexOf("Biscuits")}`)

console.log("Potatoes are in the list at index:")
console.log(groceryList.indexOf("Potatoes")) // this would print -1 because there is no "Potatoes" in the list


console.log("\n--------------SOME MORE EXAMPLE OF MIXING STRUCTURAL TYPES-----------\n")

let facebookUser = {
  name: "Eric",
  age: 30,
  hobbies: ["Climbing", "Cycling", "Theather"]
}

console.log(facebookUser)
console.log("Their favourite hobby is", facebookUser.hobbies[0])

// I imagine that this is a table, but its just a list of lists
let table = [
  [1, 4, 9],
  [2, 4, 5],
  [2, 7, 10]
]
console.log(table)
console.log("Element in the first row, second column:", table[0][1])
