const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
let students = [];
let iseditMode = false; 
let editedIndex = null;

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (name && age &&  course) {
        const student = { name, age, course };

        if (iseditMode && editedIndex !== null) {
            students[editedIndex] = student;
            iseditMode = false;
            editedIndex = null;
        } else {
            students.push(student);
        }
        displayStudents();
        studentForm.reset();
    }
}

function displayStudents() {
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${student.name}, 
        Age: ${student.age}, Course: ${student.course}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editStudent(index));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteStudent(index));
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        studentList.appendChild(listItem);
    });
}

function editStudent(index) {
    iseditMode = true;
    editedIndex = index;
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
