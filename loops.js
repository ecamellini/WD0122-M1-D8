console.log("\n---------------LOOPS----------------")

console.log("\n--------------MANUAL REPETITION OF A TASK-----------")

console.log("Count 1")
console.log("Count 2")
console.log("Count 3")
console.log("Count 4")
console.log("Count 5")
console.log("Count 6")
console.log("Count 7")
console.log("Count 8")
console.log("Count 9")
console.log("Count 10")
// What if we want to count to 100? Too much time & effort.

// let countTo = 150
// What if we want to count to the value contained into countTo
// Maybe, it comes from the user, we don't know what it will contain

console.log("\n--------------WHILE LOOP-----------")

let countTo = 100
let currentCount = 1

while (currentCount <= countTo) {
  console.log(`Count ${currentCount}`)
  currentCount += 1
}

// This would work but still manual
// console.log(`Count ${currentCount}`)
// currentCount += 1
// console.log(`Count ${currentCount}`)
// currentCount += 1
// console.log(`Count ${currentCount}`)
// currentCount += 1

// There are other loops that you can use
// The for loop
// The do ... while loop
// You can do EVERYTHING with a while loop.
// The rest is just syntactic sugar.

console.log("\n--------------FOR LOOP-----------\n")

// Exactly the same thing as above
// When we write count++ it's exactly like saying count += 1, we increase by one
for (let count = 0; count <= 76; count++) {
  console.log(`Number ${count}`)
}

// there are also for loops that allow you to go through the elements in a list
// For ... of
// But, you can do everything with a while

console.log("\n--------------LOOPING THROUGH AN ARRAY-----------\n")

let students = [
  { name: "John", age: 30},
  { name: "Paul", age: 35},
  { name: "Jack", age: 20},
  { name: "J", age: 30},
  { name: "CJ", age: 35},
  { name: "Joe", age: 20},
]

// One year has passed, and we want to increase the age of all our students

// This is what we want to do... we are just counting, the count is the index of the array
// students[0].age += 1
// students[1].age += 1
// students[2].age += 1
// students[3].age += 1
// students[4].age += 1

console.log(students)

for (let index = 0; index < students.length; index++) {
  students[index].age += 1
}

console.log(students)
