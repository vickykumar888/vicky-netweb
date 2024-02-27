{/** example of apply */}

let person = {
    name:"Mohit", 
    greet:function(message){message.map((item)=>{console.log(item, this.name)})}
}

let anotherPerson = {
    name:"Sahil",
}

person.greet.call(anotherPerson, ["hello", "John"])
person.greet.apply(anotherPerson, [["hello", "bye"]]) // in aplly method we need to pass the argument in array of array 