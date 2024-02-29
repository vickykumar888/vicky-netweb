// to update existing code
async function sendData() {
    const data = {
      "Id": 12345,
      "Customer": "John Smith",
      "Quantity": 1,
      "Price": 10.00
    };
  
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions);
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  sendData();
  