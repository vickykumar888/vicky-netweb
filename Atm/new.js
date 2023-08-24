const outputDiv = document.getElementById('newOutputDiv');
const notesTable = document.getElementById('notesTable');
const totalAmountCell = document.getElementById('totalAmountCell');

function renderNewWithdrawal() {
    outputDiv.innerHTML = `
      <h2>New Withdrawal</h2>
      <input type="number" id="withdrawalAmount" placeholder="Enter amount">
      <button id="confirmWithdrawal" onclick="confirmTransaction()">Confirm</button>
      <div id="withdrawalTable"></div>
    `;
}

function confirmTransaction() {
    const withdrawalAmount = parseInt(document.getElementById('withdrawalAmount').value, 10);
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    } else if (withdrawalAmount % 5 !== 0) {
        const lowerValue = Math.floor(withdrawalAmount / 5) * 5;
        const upperValue = Math.ceil(withdrawalAmount / 5) * 5;
        const confirmation = confirm(`The Entered amount ${withdrawalAmount} is not possible to withdraw.\n` + `Would you like to choose either ${lowerValue} or ${upperValue}?`);
        if (confirmation) {
            const selectedValue = parseFloat(prompt(`Enter either ${lowerValue} or ${upperValue}:`));
            if (selectedValue === lowerValue || selectedValue === upperValue) {
                console.log(`Transaction Confirmed for ${selectedValue}`);
                updateBalance(selectedValue);
            } else {
                console.log("Invalid selection. Transaction Canceled");
                return;
            }
        } else {
            console.log(`Transaction confirmed for ${withdrawalAmount}.`);
            updateBalance(withdrawalAmount);
            return;
        }
    } else {
        console.log(`Transaction confirmed for ${withdrawalAmount}.`);
        updateBalance(withdrawalAmount);
    }
}

function updateBalance(amount) {
    const totalBalance = parseInt(localStorage.getItem('totalMoney'));
    if (amount > totalBalance) {
        alert("Insufficient balance for withdrawal.");
        return;
    }
    let updatedOriginalNotes = {};
    const withdrawalTable = document.getElementById('withdrawalTable');
    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    logs.push({
        amount: amount,
        timestamp: new Date().toLocaleString(),
        id: new Date().getTime(),
       
        
    });
    localStorage.setItem('withdrawalLogs', JSON.stringify(logs));

    const notes = JSON.parse(localStorage.getItem('money')) || {};
    let remainingAmount = amount;

    const notesBeforeTransaction = { ...notes };


    const sortedNotes = Object.keys(notes).sort((a, b) => b - a);

    for (const note of sortedNotes) {
        const noteValue = parseInt(note);
        if (noteValue <= remainingAmount && notes[note] > 0) {
            const noteCount = Math.min(Math.floor(remainingAmount / noteValue), notes[note]);
            notes[note] -= noteCount;
            remainingAmount -= noteCount * noteValue;
        }
        if (remainingAmount === 0) {
            break;
        }
    }

    localStorage.setItem('money', JSON.stringify(notes));

    localStorage.setItem('originalNotes', JSON.stringify(notesBeforeTransaction));

    const storedOriginalNotes = JSON.parse(localStorage.getItem('originalNotes'));
    const storedUpdatedNotes = JSON.parse(localStorage.getItem('money'));
    const originalNote = Object.keys(storedOriginalNotes);
    const updatedNote = Object.keys(storedUpdatedNotes);
    const originalNoteCounts = Object.values(storedOriginalNotes);
    let updatedNoteCounts = Object.values(storedUpdatedNotes);
    const newOriginalNoteCounts = originalNoteCounts.map((count, index) => {
        return count - updatedNoteCounts[index];
    });

    originalNote.forEach((value, index) => {
        updatedOriginalNotes[value] = newOriginalNoteCounts[index];
    });
    

    localStorage.setItem('originalNotes', JSON.stringify(updatedOriginalNotes));

    totalAmountCell.textContent = amount;
    notesTable.classList.remove("hidden");

    const newBalance = totalBalance - amount;
    localStorage.setItem('totalMoney', newBalance);
    alert(`Withdrawal successful! New balance: ${newBalance}`);

    let tableHtml = '<h3>Withdrawal Summary</h3>';
    tableHtml += `<tr><td>Total Balance :  </td><td>${newBalance}</td></tr>`;
    tableHtml += '<tr><td>Updated Notes :</td><td>';
    for (const note in updatedOriginalNotes) {
        tableHtml += `${note}: ${updatedOriginalNotes[note]}<br>`;
    }
    tableHtml += '</td></tr>';
   
    withdrawalTable.innerHTML = tableHtml;

   

    document.getElementById('withdrawalAmount').value = '';
}
renderNewWithdrawal();