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
