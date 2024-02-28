 // date;
 let date = new Date();
 console.log("current date" + date);

 let currentMonth = date.getMonth() + 1;
 console.log(currentMonth);

 // to get full YEAR
 let year = date.getFullYear();
 console.log(year)

 //  UTC global timimg
 //  date in utc format 
 let UTCformat = date.toUTCString();
 console.log(UTCformat);

 //  date formatting using INTL 
 // india
//  Intl.DateTimeFormat = it is for language-sensitive date and time formatting.
 let dateForIntl = new Intl.DateTimeFormat("en-IN").format(date);
 console.log(dateForIntl);
 // canada
 let dateForIntls = new Intl.DateTimeFormat("en-CA").format(date);
 console.log(dateForIntls);

 // adding options
 // let date = new Date();
 const options = {
   hour: "numeric",
   minute: "numeric",
   second: "numeric",
   timeZone: "Europe/London",
 }
 let dateForInT = new Intl.DateTimeFormat("en-IN", options).format(date);
 console.log(dateForInT)


//  in addition to these we can add more options like

// weekday: "short", "long"
// year: "numeric", "2-digit" 
// month: "numeric", "2-digit", "short", "long" -
// day: "numeric", "2-digit" -
