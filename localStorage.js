// localStorage:
  // to store key value pair;
//  by setting values once using localstorage: data will be available in form of key
//  value pair even after closing browser
  let name = "Pooja";
  let value = "bsc";
  window.localStorage.setItem(name, value);


  let obj = {
    product: "pencil",
    cost: 5,
    color: "red",
  }
  window.localStorage.setItem("myObject", JSON.stringify(obj));
 
  // is it stored with keyname myObject
  let storedString = localStorage.getItem("myObject");
let storedObject = JSON.parse(storedString);
console.log(storedObject);

  //to remove item
  window.localStorage.removeItem("myObject");

  //  removing everything
  window.localStorage.clear();