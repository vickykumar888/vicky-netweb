let date = new Date();
const currentDate = date.getDate();
const currentDay = date.getDay()+1
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