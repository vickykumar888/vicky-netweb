var students = [
    {name: 'John', grade: 8, gender: 'M'},
    {name: 'Sarah', grade: 12, gender: 'F'},
    {name: 'Bob', grade: 16, gender: 'M'},
    {name: 'Johnny', grade: 2, gender: 'M'},
    {name: 'Ethan', grade: 4, gender: 'M'},
    {name: 'Paula', grade: 18, gender: 'F'},
    {name: 'Donald', grade: 5, gender: 'M'},
    {name: 'Jennifer', grade: 13, gender: 'F'},
    {name: 'Courtney', grade: 15, gender: 'F'},
    {name: 'Jane', grade: 9, gender: 'F'},
    {name: 'Steve', grade: 12, gender: 'M'},
    {name: 'Serena', grade: 18, gender: 'F'}
]

// Average of grades
function averageGrades(){
    return students.reduce(
        (acc, curr) => acc + curr.grade, 0)/students.length;
}

console.log(averageGrades())

// Average grades of boys

let averageGradesBoys = () =>{
    const boys = students.filter((students) => students.gender === 'M');
    const boysTotalGrades = boys.reduce((acc, curr) => acc + curr.grade, 0);
    return (boysTotalGrades/boys.length).toFixed(1);
}
console.log(averageGradesBoys());

// Average grades of Girls

let averageGradesGirls = () =>{
    const girls = students.filter((students) => students.gender === 'F');
    const girlsTotalGrades = girls.reduce((acc, curr) => acc + curr.grade, 0);
    return (girlsTotalGrades/girls.length).toFixed(1);
}
console.log(averageGradesGirls());

// highest grade 
let highestGrades = () => {
    return (Math.max(...students.map((students) => students.grade)))
}

console.log(highestGrades());

// highest grade for boys 

let highestGradesBoys = () => {
    return (Math.max(...students.filter((students) => students.gender === 'M')
    .map((students) => students.grade)))
}

console.log(highestGradesBoys());


// highest grade for girls  

let highestGradesGirls = () => {
    return (Math.max(...students.filter((students) => students.gender === 'F')
    .map((students) => students.grade)))
}

console.log(highestGradesGirls());

// total grades 

let totalGrades = () => {
    return (students.reduce((acc, curr) => acc + curr.grade, 0));
}
console.log(totalGrades());

// unique grades 

// const onlyGrades = () =>{
//     return [...new Set(students.map((students) => students.grade))]
// }
// console.log(onlyGrades()); 

// const onlyGrades = ()=>{
//     let array =[]
//     array.push(students.map((students)=> students.grade))
//     return array;
// }

// console.log(onlyGrades())


// passing students

let passingStudent = (passingMarks) =>{
    return (students.filter((student) => student.grade > passingMarks))
}

console.log(passingStudent(7));