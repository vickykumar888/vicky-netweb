let btn = document.getElementById("button_click");

//api call on Button Click

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    getData(result);
    console.log(result, "result");
  } catch (error) {}
};

//Delete Data from Api

const DeleteData = async (userId) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    });
    console.log(`user with id ${userId} removed `);
  } catch (error) {
    console.log(error)
  }
};

//Edit Data in api

const Edit_Data = async (userId, newEmail) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//Post Data

btn.addEventListener("click", fetchData);

const getData = (result) => {
  let container = document.getElementById("data_table");

  result.forEach((value) => {
    let row = document.createElement("tr");

    container.appendChild(row);

    //for-useName
    let userName = document.createElement("td");
    userName.textContent = value.username;
    row.appendChild(userName);

    //for-name
    let name = document.createElement("td");
    name.textContent = value.name;
    row.appendChild(name);

    //for email
    let email = document.createElement("td");
    email.textContent = value.email;
    row.appendChild(email);

    //Delete Button
    let delete_button = document.createElement("button");
    delete_button.textContent = "Delete";
    delete_button.addEventListener("click", () => {
      DeleteData(value.id);
      row.remove();
    });
    let action = document.createElement("td");
    action.appendChild(delete_button);
    row.appendChild(action);

    //Edit Button
    let edit_btn = document.createElement("button");
    edit_btn.textContent = "Edit";

    edit_btn.addEventListener("click", () => {
      Edit_Data(value.id, (value.email = "peter@gmail.com"));
      // row.appendChild()
    });

    let edit_action = document.createElement("td");
    edit_action.appendChild(edit_btn);
    row.appendChild(edit_action);
  });
};


//Post_Data 
let data = document.getElementById("post_data");

const Post_Data = async (email, userName) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: userName,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

data.addEventListener("click", () => {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  Post_Data(emailInput, nameInput);
});
