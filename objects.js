console.log("----------------DEFINING OBJECTS------------------\n")

let student = {
  name: "John",
  surname: "Doe",
  age: 30,
  hasWebcam: true // this is a Boolean property: remember the "Question" naming convention
}

console.log(student)

console.log("\n----------------ACCESSING OBJECT PROPERTIES------------------\n")
// Our app, wants to check if the (potential) student can access the course.
// They can only if they are over 18.

// To know the age of the student, we need to access its name property.
// We do it with the DOT NOTATION
if ( student.age >= 18 ) {
  // A good way to insert data inside strings is using string formatting.
  // You can do as follows, using the ${}, ONLY IN STRINGS DEFINED USING BACKTICKS
  console.log(`Congratulations student ${student.name} ${student.surname},
You can access the course.`) // Strings with backtics can also go on multiple lines of code

  // ANOTHER WAY TO DO THE FOLLOWING (Syntactic sugar)
  // console.log("Congratulations student", student.name, student.surname)
  // console.log("You can access the course.")

  // OR
  // console.log("Congratulations student " + student.name + " " + student.surname)
} else {
  console.log("Sorry, you need to wait a few years.")
}

console.log("\n-------------MODIFY OBJECT PROPERTIES------------\n")
// It's been one year. Student is now 31...
student.age += 1

// The webcam of the student is not working anymore...
student.hasWebcam = false // We assign false to the property hasWebcam of the object student

console.log("Student is now one year older and the webcam doesn't work anymore:")
console.log(student)

// Unlike arrays, where you acccess values by position, because they are a sequence of values..
// In objects you access values of the properties by name, by key, because they are a set of key-value properties
// If you say student.age, you will get the age, no matter if it's the last or the first property

console.log("\n--------------ADD NEW OBJECT PROPERTIES-------------\n")
// Our software now needs to change language based on the student location...
// Do we have the student location in our model?

// We do it in the same way we modify an existing property.
student.city = "Berlin"
// It's like if this property was already there, but with value undefined
// And now it's not undefined anymore...

console.log(student)

console.log("\n--------------REMOVE OBJECT PROPERTIES-------------\n")

// We do not need the information about the webcam anymore...
// We actually never used it in our code.
delete student.hasWebcam
console.log(student)

console.log("\n------------NESTING OBJECTS------------\n")
// Suppose that you want to model the home address of a student
// The home address has some properties: street, house number
// One way to do it...
// student.street = "State Street"
// student.number = 57

// But, what if we do this:
student.address = {
  street: "State Street",
  number: 57,
}

console.log(student)
console.log(`The address of ${student.name} ${student.surname} is:`)
console.log("The street:", student.address.street)
console.log("The number:", student.address.number)

let student2 = {
  name: "Jack",
  surname: "Miller",
  age: 27,
  city: "Milan",
  address: {
    street: "Central street",
    number: 1
  }
}

console.log(student2)
