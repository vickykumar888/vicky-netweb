//---------------------------------------LOOPS

//----------------------------------------FOR LOOP

for (let i = 0; i <= 10; i++) {
    if(i%2==0){
        console.log(i);
    }
}

//---------------------------------------WHILE LOOP

let i=0;
while(i<10){
    console.log(i);
    i++;
}


//----------------------------------------OF LOOP

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//---------------------------------------IN LOOP 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//-----------------------------------FOR-EACH -------not return any thing.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//---------------------------------------------function

function sum(a,b){
    return a+b
}
console.log(sum(2,3))


//---------------------------------------------ARROW FUNCTION
let anss=(a,b)=> a+b;
console.log(anss(2,34))

