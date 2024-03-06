    async function fetchNews() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async function showOutput() {
        const data = await fetchNews();
        const container = document.querySelector(".container-item");

        data.forEach(item => {
            const tr = document.createElement("tr");
            tr.setAttribute("data-id", item.id);
            

            const id = document.createElement("td");
            id.textContent = item.id;
            tr.appendChild(id);

            const name = document.createElement("td");
            name.textContent = item.name;
            tr.appendChild(name);

            const userName = document.createElement("td");
            userName.textContent = item.username;
            tr.appendChild(userName);

            const email = document.createElement("td");
            email.textContent = item.email;
            tr.appendChild(email);

            const delete_action = document.createElement("td");
            const delete_button = document.createElement("button");
            delete_button.classList.add("btn");
            delete_button.innerText = "Delete";
            delete_button.addEventListener("click", function () {
                deletePost(item.id, tr);
                delete_button.innerHTML = "Deleted &#10004;";
            });
            delete_action.appendChild(delete_button);

            const edit_button = document.createElement("button");
            edit_button.classList.add("btn");
            edit_button.innerText = "Update";
            edit_button.setAttribute("data-bs-toggle", "modal");
            edit_button.setAttribute("data-bs-target", "#exampleModal");
            edit_button.addEventListener("click", function () {
                populateModal(item.id, item.email, item.body);
                console.log("hello")
            });
            delete_action.appendChild(edit_button);

            tr.appendChild(delete_action);

            container.appendChild(tr);
        });
    }

    showOutput();

    function populateModal(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
    const title = row.querySelector('td:nth-child(4)').textContent;
    document.getElementById("postId").value = id;
    document.getElementById("email").value = title;
    $('#exampleModal').on('hidden.bs.modal', function (e) {
        document.getElementById("postId").value = "";
        document.getElementById("email").value = "";
    });
    }
    
    async function saveChanges() {
        const postId = document.getElementById("postId").value;
        const newTitle = document.getElementById("email").value;

        const url = `https://jsonplaceholder.typicode.com/users/${postId}`;
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: newTitle,
                // body: newBody
            })
        };

        try {
            const response = await fetch(url, requestOptions);
            if (response.ok) {
                const updatedData = await response.json();
                const email = document.querySelector(`tr[data-id="${postId}"] td:nth-child(4)`);
                // const userName = document.querySelector(`tr[data-id="${postId}"] td:nth-child(4)`);
                email.textContent = updatedData.email;
                // $('#exampleModal').modal('hide');
                
                
            } else {
                throw new Error('Failed to update post.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    function deletePost(id, row) {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    row.remove();
                }
            });
    }