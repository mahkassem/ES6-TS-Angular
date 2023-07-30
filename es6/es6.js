// let myName = 'Ahmed'

// myName = 'Mohamed'

// {
//   const getName = () => {
//     console.log(myName)
//   }

//   getName();
// }

// console.log(myName)

// for(var i = 0; i < 5; i++) {
//   console.log(i);
//   // ...
// }

// console.log(i)
// ---

// const student = {
//   name: "Abdallah",
//   class: "JavaScript"
// }

// console.log(student)

// student.class = "TypeScript"

// student.age = 25

// console.log(student)

// for(const i = 0; i < 5; i++) {
//   console.log(i);
// }

// const array1 = [1, 2, 3]

// let students = [];

// function addStudent(name, age, major) {
//   return students.push({
//     name, age, major
//   })
// }

// addStudent(
//   'Michel',
//   '25',
//   'CS'
// )

// console.log(students)

// addStudent(
//   'Ahmed',
//   26
// )

// console.log(students)

// let students = [];

// function addStudent(name, age, ...rest) {
//   let student = {
//     name, age
//   };

//   const [major, color] = rest

//   if (major) student = { ...student, major }
//   if (color) student = { ...student, color }

//   students.push(student);

//   console.log(major)
// }

// addStudent(
//   'Abdelmageed',
//   24,
//   'CS',
//   'red'
// )

// console.log(students)

// const cat = { name: 'Meshmesh', toy: 'teddy bear' }
// const catDetails = { color: 'orange', pattern: 'stripped' }

// const catInfo = { ...cat, ...catDetails }

// console.log(catInfo)

// function that return a function
// const greet = name => {
//   return {
//     morning: () => `Good morning ${name}`,
//     evening: () => `Good evening ${name}`,
//     custom: (text) => `${text} ${name}`
//   }
// }
// const johnGreeting = greet('John')
// console.log(johnGreeting.morning())
// console.log(johnGreeting.evening())
// console.log(johnGreeting.custom('Hello'))

// let greet = 'my greeting'

// const person = {
//   name: "John",
//   age: 20,
//   greet: function() {
//     return `Hello I'm ${this.name}`
//   }
// }

// console.log(person.greet())
