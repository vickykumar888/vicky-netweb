const submitShopButton = document.getElementById('submitShopButton');

submitShopButton.addEventListener('click', submitShopForm);

// function submitShopForm() {
//   const name = document.getElementById('name').value;
//   const address = document.getElementById('address').value;

//   let orderDetails = 'Order Details:\n';
//   let totalPrice = 0;

//   listCards.forEach((product) => {
//     if (product) {
//       orderDetails += `Product: ${product.title}\nPrice: $${product.id.toLocaleString()}\n`;
//       totalPrice += product.id;
//     }
//   });
  
//   orderDetails += `Total Price: $${totalPrice.toLocaleString()}\n`;
//   orderDetails += `Name: ${name}\nAddress: ${address}`;
// console.log("ubwubcwuc",orderDetails)
//   alert(orderDetails);
// }


function submitShopForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
  
    if (!name || !address) {
        alert("Please fill out all fields in the form.");
        return;
      }

    let orderDetails = 'Order Details:\n';
    let totalPrice = 0;
  
    listCards.forEach((product) => {
      if (product) {
        orderDetails += `Product: ${product.title}\nPrice: $${product.id.toLocaleString()}\n`;
        totalPrice += product.id;
      }
    });
  
    console.log("Total Price before formatting:", totalPrice);  
    orderDetails += `Total Price: $${totalPrice.toLocaleString()}\n`;
    orderDetails += `Name: ${name}\nAddress: ${address}`;
  
    console.log("Total Price after formatting:", totalPrice); 
  
    console.log(orderDetails);   
    alert(orderDetails);
  }
  