// generate random number between two given numbers

function randomNum(min , max){
   return Math.floor(Math.random()* (max-min) ) + (min)
}

console.log(randomNum(220 , 487));


