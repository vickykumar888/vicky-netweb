let currency = 12654
let IntlCurrency = new Intl.NumberFormat("en-US", { currency: "INR", style: "currency", maximumSignificantDigits: 4 }).format(currency);
console.log(IntlCurrency)


let number = 45678
let currencyType = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency", maximumSignificantDigits: 5 }).format(number);
console.log(currencyType)