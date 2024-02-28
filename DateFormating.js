{/** Date in js */}
// console.log(window.Date()); {/** in  browser */}

let date = new Date();
// console.log(date, "date"); {/** will return me the current date in ISO format */}

// let currentDate= date.getDate();
// console.log(currentDate, "currentDate");
console.log(date, "date")

// let currentMonth = date.getMonth()+1; {/** it return the monthis from 0 to 11 not from 1 to 12 so 1 is Feb Month */}
// console.log(currentMonth, "currentMonth"); 

// let currentYear = date.getFullYear();
// console.log(currentYear, "currentYear");

{/** date in utc format */}
// let dateInUTCFormat = date.toUTCString();
// console.log(dateInUTCFormat, "dateinUTCFormat");

{/** date formatting using INTL */}
// let dateForInTl = new Intl.DateTimeFormat("en-US").format(date); {/** US format */}
// let dateForInTl = new Intl.DateTimeFormat("en-IN").format(date); {/** India format */}
// console.log(dateForInTl, "dateForInTl");

{/** in the INTL we can pass the options */}
// const options = {
//   year: "numeric",
//   month: "2-digit",
//   day: "2-digit",
//   timeZone: "Asia/Kolkata",
// };
// let dateForInTl = new Intl.DateTimeFormat("en-IN", options).format(date);
// {
//   /** India format */
// }
// console.log(dateForInTl, "dateInIntl");

