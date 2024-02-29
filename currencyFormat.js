let number = 1234343
let IntlCurrency = new Intl.NumberFormat("en-US", {currency:"INR", style:"currency", maximumSignificantDigits:4}).format(number);
console.log(IntlCurrency, "currency")
