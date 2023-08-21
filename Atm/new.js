const outputDiv = document.getElementById('newOutputDiv')
const confirmBtn = document.getElementById('confirmWithdrawal')
const notesTable = document.getElementById('notesTable')
const totalAmountCell = document.getElementById('totalAmountCell')
const notesTableBody = document.getElementById('notesTableBody')
function renderNewWithdrawal() {
    outputDiv.innerHTML = `
      <h2>New Withdrawal</h2>
      <input type="number" id="withdrawalAmount" placeholder="Enter amount">
      <button id="confirmWithdrawal" onclick="confirmTransaction()">Confirm</button>
      <div id="withdrawalTable"></div>
    `;
}
function updateNotesDenominations(newNotes) {
    localStorage.setItem('notesDenominations', JSON.stringify(newNotes));
}
function confirmTransaction() {
    const withdrawalAmount = parseInt(document.getElementById('withdrawalAmount').value, 10);
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    
    const withdrawalTable = document.getElementById('withdrawalTable');


    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    logs.push({
        amount: withdrawalAmount,
        timestamp: new Date().toLocaleString(),
        id: new Date().getTime()
    });
    localStorage.setItem('withdrawalLogs', JSON.stringify(logs));
    // let balance = parseInt(localStorage.getItem('money'));
    const totalBalance = parseInt(localStorage.getItem('totalMoney'));

    if (withdrawalAmount > totalBalance) {
        alert("Insufficient balance for withdrawal.");
        return;
    }

    const notes = JSON.parse(localStorage.getItem('notesDenominations')) || [2000, 1000, 500, 100, 50, 20, 10, 5];
    let remainingAmount = withdrawalAmount;



    notesTableBody.innerHTML = "";

    for (const note of notes) {
        const noteCount = Math.floor(remainingAmount / note);
        remainingAmount %= note;

        const row = document.createElement("tr");
        const noteCell = document.createElement("td");
        const countCell = document.createElement("td");

        noteCell.textContent = note;
        countCell.textContent = noteCount;
        row.appendChild(noteCell);
        row.appendChild(countCell);

        notesTableBody.appendChild(row);
    }

    totalAmountCell.textContent = withdrawalAmount;
    notesTable.classList.remove("hidden");

    const newBalance = totalBalance - withdrawalAmount;
    localStorage.setItem('totalMoney', newBalance);
    alert(`Withdrawal successful! New balance: ${newBalance}`);

    let tableHtml = '<h3>Withdrawal Summary</h3>';
    // tableHtml += `<tr><td>Withdrawal Amount :   </td><td>${withdrawalAmount}</td></tr><br>`;
    tableHtml += `<tr><td>Total Balance :  </td><td>${newBalance}</td></tr>`;
    withdrawalTable.innerHTML = tableHtml;
}


renderNewWithdrawal();