const data = [
    { name: 'John', age: 30, group: 'A' },
    { name: 'Mary', age: 25, group: 'B' },
    { name: 'Mike', age: 20, group: 'A' },
    { name: 'Jane', age: 15, group: 'C' },
    { name: 'Peter', age: 25, group: 'B' }
  ];
  
  // for loop
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    document.write(data[i].name + " " + data[i].age+ "<br>")
  }
document.write("<br>");

  // forEach loop
data.forEach(function(item) {
    console.log(item);
    document.write(item.name + " " + item.age + " " +  "<br>")
  });

document.write("<br>")

  // for...in loop
for (const key in data) {
    console.log(key, data[key].age);
   document.write(key,  data[key].group + " " + "<br>") ;
  }
document.write("<br>");

  // for...of loop
for (const item of data) {
    console.log(item);
document.write(item.name + " " + "<br>")
}
document.write("<br>")


    // filter out people whose age is greater than 20
const filteredData = data.filter(function(item) {
   return  item.age > 20;
  });
  console.log(filteredData);


document.write("<br>");

  //map method to iterate the ARRAY OF OBJECT
  const newarary = data.map((element)=>{
    document.write(element.name + " " + element.age + "<br>");
  })


  //print sum value from 1 to 100 by for loop
  for(i = 0; i <= 100; i=i+2){
    document.write(i + "<br>")
  }

  
