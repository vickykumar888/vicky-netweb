async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();
    const tableBody = document.getElementById("data");

    data.products.map((item) => {
      const row = document.createElement("tr");
      row.id = `${item.id}`;
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.brand}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td><button onclick="deleteItem(${item.id})">Delete</button></td>
      `;
      tableBody.appendChild(row);

    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();
async function deleteItem(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Delete request failed.");
    }

    // Remove the row from the HTML table
    const row = document.getElementById(`${id}`);
    row.remove()

  } catch (error) {
    console.error("Error deleting item:", error);
  }
}


