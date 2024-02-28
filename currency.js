 // currency;
  // currency INR: tells the currency to be used eg indian rupee (INR).
  // style currency: tells the style of formatting  which is currency in this case
  // maximumSignificantDigits 6 Specifies that only up to 6 significant digits it will be
  //  shown If the number has more than 6 significant digits, it will be rounded to 6 significant digits
  
  
  // Intl.NumberFormat : it is language-sensitive number formatting.
  let numberForIndia = 1234343;
  let IntlCurrencyForIndia = new Intl.NumberFormat("en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 6
    })
    .format(numberForIndia);
  console.log(IntlCurrencyForIndia, "currency");


// for Norway
  let numberForNorway = 3456237123;
  let resultForNorway = new Intl.NumberFormat("en-NO", 
  {
    style: "currency",
    currency: "NOK",
    maximumSignificantDigits: 4
  }).format(numberForNorway);

  console.log(resultForNorway);


