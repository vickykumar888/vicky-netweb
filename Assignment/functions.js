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

{/** average grade of students */}

// const averageGrade= (students)=>{
//     let sum =0 ;
//     for(let i =0 ; i <students.length ; i++){
//         sum+=students[i]?.grade
//     }
//     let averageGradeOfStudents= sum / students.length 
//     return averageGradeOfStudents;
// }

{/** Q1 :- The average grade of this class */}
// let averageGradeInClass= averageGrade(students);

// console.log(averageGradeInClass, "averagGradeInClass")

{/** Q2 The average grade of the boys */}
// const averageGradeOfBoys = () => {
//   let boys = students.filter((student) => student.gender === "M");
//   let averageGradeOfBoysInClass = averageGrade(boys).toFixed(2);
//   console.log(averageGradeOfBoysInClass);
// };
// averageGradeOfBoys();

{/** Q3 The average grade of the girls */}
// const averageGradeOfGirls = () => {
//   let girls = students.filter((student) => student.gender === "F");
//   let averageGradeOfGirlsInClass = averageGrade(girls).toFixed(2);
//   console.log(averageGradeOfGirlsInClass);
// };
// averageGradeOfGirls();

{/** Q4 The highest grade from the class */}

// const highestGradeInClass = () => {
//   let AllGardes = students.map((student) => student.grade);
//   console.log(Math.max(...AllGardes));
// };
// highestGradeInClass();

{/** Q5 highest Grade among boys */}
// const highestGradeAmongBoys = ()=>{
//     let boysGarde = students.filter((student) => student.gender === "M").map((student)=>student.grade);
//     console.log(Math.max(...boysGarde));
// }
// highestGradeAmongBoys();

{/** Q5 highest Grade among girls */}
// const highestGradeAmongGirls = ()=>{
//     let girlsGarde = students.filter((student) => student.gender === "F").map((student)=>student.grade);
//     console.log(Math.max(...girlsGarde));
// }
// highestGradeAmongGirls();

{/** Q6 Sum of All Gardes */}

// const sumOfAllGrades =()=>{
//     let sum =0 ;
//     for(let i =0 ; i <students.length ; i++){
//         sum+=students[i]?.grade
//     }

//     console.log(sum, "sum")
// }

// sumOfAllGrades();

{/** Q7 unique grade of class */}
// const unqiueGardeOfClass =()=>{
//     const AllGardes= students.map((student)=>student.grade);
//     const uniqueGrade= new Set(AllGardes);
//     console.log(uniqueGrade, "unique");
// }
// unqiueGardeOfClass();

{/** another approach */}

// const unqiueGardeOfClass =()=>{
//     const AllGardes= students.map((student)=>student.grade);
//     let uniqueGarde =[];
//     for(let i=0;i<AllGardes.length;i++){
//         if(AllGardes[i]!==AllGardes[i+1]){
//             if(!uniqueGarde.includes(AllGardes[i])){
//                 uniqueGarde.push(AllGardes[i]);
//             }
           
//         }
//     }
//     console.log(uniqueGarde, "uniqueGarde");

// }
// unqiueGardeOfClass();


{/** Q8 passing marks */}

// const passingMarks = ()=>{
//  let passedStudents = students.filter((student)=>student.grade >= 10)
//  console.log(passedStudents)
// }

// passingMarks();

