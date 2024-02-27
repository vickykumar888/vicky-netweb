/** to store the data in browser memory we use the local storage */

{/** to store the item  */}
// let user = "Mohit";
// window.localStorage.setItem("name", user)

{/** to store an array or object or an array of object */}

// let data = [{name:"Mohit"}]
// window.localStorage.setItem("data", JSON.stringify(data)); {/** this is used only when value is in the form or array or object  */}

{/** to remove an item */}

// window.localStorage.removeItem("data");
// window.localStorage.removeItem("name");

{/** to remove all item from local storage */}

// window.localStorage.clear();

{/** to get an item from local storage */}
// window.localStorage.setItem("user");
{/** when value is store is string format you need to parse it  */}
// let data = JSON.parse(window.localStorage.setItem("data")) 
// console.log(data , "data")