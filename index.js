let date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth() + 1
const currentYear = date.getFullYear()


console.log(currentDate, currentMonth, currentYear)

{/** date in utc format */ }
let dateInUTCFormat = date.toUTCString();
console.log(dateInUTCFormat, "dateinUTCFormat");


{/** date formatting using INTL */ }
let dateForInTl = new Intl.DateTimeFormat("en-IN").format(date);
// let dateForInTl = new Intl.DateTimeFormat("en-US").format(date);

{/** in the INTL we can pass the options */ }
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Asia/Kolkata",
};
let dateOfInTl = new Intl.DateTimeFormat("en-IN", options).format(date);
// {
//   /** India format */
// }
console.log(dateOfInTl, "dateInIntl");

let currency = 12654
let IntlCurrency = new Intl.NumberFormat("en-US", { currency: "INR", style: "currency", maximumSignificantDigits: 4 }).format(currency);
console.log(IntlCurrency)


let number = 45678
let currencyType = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency", maximumSignificantDigits: 5 }).format(number);
console.log(currencyType)

class student {
  constructor(name, age) {
    this.name = name,
      this.age = age

  }
  display() {
    console.log(`${this.name} ${this.age}`)
  }
}
let newOne = new student("sam", 22);
console.log(newOne)
newOne.display()

let rohan = new student("herry", 34)
console.log(rohan)
rohan.display()

class student2 extends student {
  numberOfStudent = 20

}


let newData = new student2("rishi", 21)
console.log(newData)
newData.numberOfStudent

class cars {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  car() {
    console.log(`${this.name}${this.year}`)
  }
}
let newOneCar = new cars("audi", 2015)
console.log(newOneCar)
newOneCar.car()
class car2 extends cars {
  oneCarMore = "BMW"
}
let newCar = new car2("alto", 2016)
console.log(newCar)
newCar.oneCarMore
