// function to sum 

function sumNum(...nums){
    return nums.reduce((accu, num)=>
      accu + num)
    
    
}
console.log(sumNum(1,2,3,4))

// or 

function addNum(a,b,c,d){
    return a+b+c+d;
}
 
console.log(addNum(1,4,9,7));