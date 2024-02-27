//in case of objects  this refers to the object itself;
let carInfo={
    name :"Thaar",
    price:"50lakhs",
    model:"new",
    method :function(tyre){
        console.log(this.name   + this.price  +tyre)

    }
}
carInfo.method("mrf");

// example of this + call
function getResult() { 
    console.log(this.name + ' is calling'); 
  }
  
  var obj = {
    name: 'Pooja'
  };
  
  getResult.call(obj); 
  