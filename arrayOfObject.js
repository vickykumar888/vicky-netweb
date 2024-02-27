let students = [
    { name: 'John', age: 23, },
    { name: 'Sarah', age: 12 },
    { name: 'Bob', age: 34 },
    { name: 'Johnny', age: 21 },
    { name: 'Ethan', age: 22 },
]

const result = students.map((item) => item.name)
console.log(result)
console.log(students[1])

const persons = [
    { 
      name: 'Alice',
      age: 20,
      subjects: [
        { name: 'Math', score: 90 },
        { name: 'Science', score: 85 },
        { name: 'English', score: 95 }
      ]
    },
    { 
      name: 'Bob',
      age: 21,
      subjects: [
        { name: 'Math', score: 80 },
        { name: 'Science', score: 75 },
        { name: 'English', score: 85 }
      ]
    },
]

console.log(persons[0])
console.log(persons[1])