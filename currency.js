// let number = 12345;
// let intlCurrency = new Intl.NumberFormat("en-US",{currency:"USD",style:"currency", maximumSignificantDigits:5}).format(number);
// let intlCurrency1 = new Intl.NumberFormat("en-IN",{currency:"INR",style:"currency", maximumSignificantDigits:5}).format(number);
// console.log(intlCurrency1);


let restaurant = {
    item: "pizza",
    price: 299,

    priceWithCurrency: function() {
        return new Intl.NumberFormat("en-IN", { currency: "INR", style: "currency" }).format(this.price);
    }

}
console.log(restaurant.priceWithCurrency());
// let rupees = new Intl.NumberFormat("en-IN",{currency: "INR", style: "currency"}).format(restaurant.price);
// console.log(rupees);

// console.log(restaurant);

let restaurant1 = {
    item: "bread",
    price: 55
}

console.log(restaurant.priceWithCurrency.call(restaurant1));