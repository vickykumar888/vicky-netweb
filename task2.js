// let button = document.getElementById('btn')
// let root2 = document.getElementById('row')
// button.addEventListener('click',function(){

//     console.log("hello")
    
//     var tableNumber = prompt("Enter the number");
//     if(tableNumber >= 1  ){
//     var tab = "";
//     for (let i = 1; i <= 10; i++) {
//             for (let j = tableNumber; j <= tableNumber; j++) {
//                     tab += `${j} x ${i} = ${i * j} \n`
//                     root2.innerHTML += `<div>${j} x ${i} = ${i * j} </div> \n` 
//                 }
//             }
//             console.log(tab)
//         }
//         else{
//             console.log("NOt a positvie number")
//         }
            
            
//   } )

let button = document.getElementById('btn1')
let root = document.getElementById('root1')
button.addEventListener("click",function(){
    console.log("hello")
    let input = document.getElementById('number').value;
    if(input >= 1  ){
        document.getElementById('root1').innerHTML = "";
            var tab = "";
            for (let i = 1; i <= 10; i++) {
                    for (let j = input; j <= input; j++) {
                            tab += `${j} x ${i} = ${i * j} \n`
                            root.innerHTML += `<div>${j} x ${i} = ${i * j} </div> \n` 
                        }
                    }
                    console.log(tab)
                }
                else{
                    console.log("NOt a positvie number")
                }

} )
  