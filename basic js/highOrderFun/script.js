

//-------------------------------FILTER

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);


//---------------------------------MAP

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => num + 10)
console.log(newNums);


//-------------------------------REDUCE

const myNums = [1, 2, 3]
const myTotal = myNums.reduce( (acc, curr) => acc+curr)
console.log(myTotal);


//-------------------------------FIND

const Nums = [6, 2, 3]
const Total = Nums.find((num)=>{
    if(num<3){
        return num;
    }
})
console.log(Total);

//-----------------------------FIND-INDEX

const Numss = [6, 2, 3]
const Totall = Numss.findIndex((num)=>{
    if(num<3){
        return num;
    }
})
console.log(Totall);


//------------------------------SOME


const Numsss = [6, 2, 3]
const Totalls = Numsss.some((num)=>{
    if(num<3){
        return num;
    }
})
console.log(Totalls);


//---------------------------EVERY

const Numssss = [6, 4, 5]
const Totallss = Numssss.every((num)=>{
    if(num>3){
        return num;
    }
})
console.log(Totallss);