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
        <td style={{display:'flex'}}><span ><button onclick="editItem(${item.id})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button></span>
        </td>
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

// Define the function to edit an item
async function editItem(id) {
  try {
    // Get the row of the item to edit
    const row = document.getElementById(`${id}`);
    // Get the product data from the row
    const [productId, title, brand, price, description] = Array.from(row.children).map(td => td.textContent);
    // console.log( Array.from(row.children).map(td => td.textContent))
    // Replace the row with an editable version
    row.innerHTML = `
      <td><input type="text" id="edit-id" value="${productId}" readonly></td>
      <td><input type="text" id="edit-title" value="${title}"></td>
      <td><input type="text" id="edit-brand" value="${brand}"></td>
      <td><input type="text" id="edit-price" value="${price}"></td>
      <td><input type="text" id="edit-description" value="${description}"></td>
      <td >
        <button onclick="saveEdit(${id})">Update</button>
        <button onclick="deleteItem(${id})">Delete</button>
      </td>
    `;
  } catch (error) {
    console.error("Error editing item:", error);
  }
}

// Define the function to save the edited item
async function saveEdit(id) {
  try {
    // Get the updated data from the inputs
    const updatedData = {
      id: document.getElementById("edit-id").value,
      title: document.getElementById("edit-title").value,
      brand: document.getElementById("edit-brand").value,
      price: document.getElementById("edit-price").value,
      description: document.getElementById("edit-description").value,
    };
    // Send the updated data to the server
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error("Update request failed.");
    }
    // Update the row in the HTML table with the new data
    const row = document.getElementById(`${id}`);
    row.innerHTML = `
      <td>${updatedData.id}</td>
      <td>${updatedData.title}</td>
      <td>${updatedData.brand}</td>
      <td>${updatedData.price}</td>
      <td>${updatedData.description}</td>
     
      <td >
        <button onclick="editItem(${updatedData.id})">Edit</button>
        <button onclick="deleteItem(${updatedData.id})">Delete</button>
      </td>
    `;
  } catch (error) {
    console.error("Error saving edit:", error);
  }
}





