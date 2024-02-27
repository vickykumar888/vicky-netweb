// apply;
let myBooks = {
    bookName: "Live and let live",
    bookPrice: "$234",
    author: "Narayan murthy",
    method: function (args) {
        console.log(args); 
        console.log(this.bookName);
    }
};

let MyfavBook = {
    bookName: "my Experiment with truth",
    bookPrice: "$234",
};

myBooks.method.apply(MyfavBook, [4, 3, 4, 5, 6, 7]);
// if we would have used call in this case if would have returned array of [4, 3, 4, 5, 6, 7])all these
const bioData = {
  info: function(city, country) {
    return this.grade + " " + this.age + "," + city + "," + country;  
  }
}

const detailPerson1 = {
  grade: "A",
  age: 21,
}

const detailPerson2 = {
  grade: "B",
  age: 29,
}

 console.log(bioData.info.apply(detailPerson2, ["Amritsar", "India"])); 
// if we will apply call method instead of apply then it will give undefined
//  console.log(bioData.info.call(detailPerson2, ["Amritsar", "India"])); 

