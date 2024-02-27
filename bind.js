const obj = {
    animal: "dog",
    type : "Domestic",
    info: function(){
        return (`${this.animal} is a ${this.type} aniaml`)
    }
}

let information = obj.info.bind(obj);

console.log(information())


function fullName(){
    return (`${this.firstName} ${this.lastName}`)

}
obj1 = {
    firstName: "Rahul",
    lastName: "kumar"
}

let name1 = fullName.bind(obj1);
console.log(name1())