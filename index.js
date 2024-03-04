


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
        <td style={{display:'flex'}}><span ><button onclick="editItem(${item.id})"  class="btn">Edit</button>
        <button onclick="deleteItem(${item.id})" class='btn delete'>Delete</button></span>
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
    const row = document.getElementById(`${id}`);
    const [productId, title, brand, price, description] = Array.from(row.children).map(td => td.textContent);

    // Populate modal with existing item data
    document.getElementById("id").value = productId;
    document.getElementById("title").value = title;
    document.getElementById("brand").value = brand;
    document.getElementById("price").value = price;
    document.getElementById("description").value = description;

    // Show the modal
    const modal = document.getElementById("myModal")
    modal.style.display = "block";

  } catch (error) {
    console.error("Error editing item:", error);
  }
}

document.querySelector(".close").addEventListener("click", function () {
  const modal = document.getElementById("myModal")
  modal.style.display = "none"
})


// Define the function to save the edited item
async function updateItem() {
  try {
    const id = document.getElementById("id").value;
    const updatedData = {
      id: document.getElementById("id").value,
      title: document.getElementById("title").value,
      brand: document.getElementById("brand").value,
      price: document.getElementById("price").value,
      description: document.getElementById("description").value,
    };

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

    const row = document.getElementById(`${id}`);
    row.innerHTML = `
      <td>${updatedData.id}</td>
      <td>${updatedData.title}</td>
      <td>${updatedData.brand}</td>
      <td>${updatedData.price}</td>
      <td>${updatedData.description}</td>
      <td>
        <button onclick="editItem(${updatedData.id})"  class="btn">Edit</button>
        <button onclick="deleteItem(${updatedData.id})"  class="btn delete">Delete</button>
      </td>
    `;

    // Close the modal
    const modal = document.getElementById("myModal");
    modal.style.display = "none";

  } catch (error) {
    console.error("Error updating item:", error);
  }
}






