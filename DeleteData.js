
async function deleteData() {
    try {
      const response = await fetch('https://dummyjson.com/products/2', {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
    deleteData()