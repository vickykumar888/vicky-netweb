let product ={
    productName :'pencil',
    price :200,
    color:"red",
    raating:"5 Stars" 
}
// to access obj 
console.log(product.productName);
console.log(product.price);
console.log(product.color);

// to access entire obj using object.enteries
const obj = { a: "riya", b: "aashiya", c: "disha"};
const newEntries = Object.entries(obj);
console.log(newEntries);

// to access keys using object.keys
const animal = {
    name :"lion",
    title:"king of jungle",
    queen:"linoess",
}
const resultKey = Object.keys(animal);
console.log(resultKey);

// to access values using object.values
let device = {

    deviceName :"iphone",
    devicePrice :"2lakhs",
    deviceColor:"silver",
}
const newDevice = Object.values(device);
console.log(newDevice)

