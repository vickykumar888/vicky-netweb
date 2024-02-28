const date = new Date();
console.log(date);

const month = new Date().getMonth()+1;
console.log(month)

console.log(new Date().getDate());
console.log(new Date().getDay()+1);
console.log(new Date().getFullYear());
console.log(new Date().getMinutes());

let a = new Date(0);
console.log(a) // 1970-01-01T00:00:00.000Z it does not change

// UTC format

// let dateInUTCFormat = date.toUTCString();
// console.log(dateInUTCFormat,"date")

// using INTL;

// let dateForIntl = new Intl.DateTimeFormat("en-US").format(date);
// console.log(dateForIntl);
// let dateForIntl1 = new Intl.DateTimeFormat("en-IN").format(date);
// console.log(dateForIntl1);

// const options = {
//     year: "numeric",
//     month: "2-digit",
//     day:  "2-digit",
//     timeZone: "Asia/Kolkata"
// }
// let dateForIntl1 = new Intl.DateTimeFormat("en-IN",options).format(date);
// console.log(dateForIntl1);

// last date of month 

// function lastDayOfMonth (year , month) {
//     let date = new Date(year, month+1,0);
//     return date.getDate();
// }

// console.log(lastDayOfMonth(2023, 0));
// console.log(lastDayOfMonth(2023, 1));
// console.log(lastDayOfMonth(2023, 2));
// console.log(lastDayOfMonth(2023, 3));
// console.log(lastDayOfMonth(2023, 4));

