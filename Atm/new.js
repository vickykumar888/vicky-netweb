const outputDiv = document.getElementById('newOutputDiv')
const confirmBtn = document.getElementById('confirmWithdrawal')
const notesTable = document.getElementById('notesTable')
const totalAmountCell = document.getElementById('totalAmountCell')


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
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0 ) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    else if( withdrawalAmount % 5 !==0){
        const lowerValue = Math.floor(withdrawalAmount/5)*5;
        const upperValue = Math.ceil(withdrawalAmount/5)*5;
        const comfirmation = confirm(`The Entered amount ${withdrawalAmount} is not possible to withdrawal.\n`+`Would you like to choose either ${lowerValue} or ${upperValue}?`);
        if(comfirmation){
            const selectedValue = prompt(`Enter either ${lowerValue} or ${upperValue}:`);
            if (selectedValue === null) {
                alert("Transaction Canceled");
                return;
            }
            if(parseFloat(selectedValue) ===lowerValue || parseFloat(selectedValue) ===upperValue){
                console.log(`Transaction Confirmed for ${selectedValue}`);
            }
            else{
                console.log("Invalid selection. Transaction Canceled");
                return
            }
        
        }
        else{
            console.log(`Transaction confirmed for ${withdrawalAmount}.`);
            return;
        }
    }
    
    const withdrawalTable = document.getElementById('withdrawalTable');
    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    logs.push({
        amount: withdrawalAmount,
        timestamp: new Date().toLocaleString(),
        id: new Date().getTime()
    });

    localStorage.setItem('withdrawalLogs', JSON.stringify(logs));
    const totalBalance = parseInt(localStorage.getItem('totalMoney'));
    if (withdrawalAmount > totalBalance) {
        alert("Insufficient balance for withdrawal.");
        return;
    }

    const notes = JSON.parse(localStorage.getItem('money')) || {};
    let remainingAmount = withdrawalAmount;
    const sortedNotes = Object.keys(notes).sort((a, b) => b - a);

    for (const note of sortedNotes) {
        const noteValue = parseInt(note);
        if (noteValue === remainingAmount && notes[note] > 0) {
            notes[note] -= 1;
            remainingAmount -= noteValue;
            break;
        } else if (notes[note] > 0 && noteValue <= remainingAmount) {
            const noteCount = Math.min(Math.floor(remainingAmount / noteValue), notes[note]);
            notes[note] -= noteCount;
            remainingAmount -= noteCount * noteValue;
        }
        if (remainingAmount === 0) {
            break;
        }
    }
    localStorage.setItem('money', JSON.stringify(notes));

    totalAmountCell.textContent = withdrawalAmount;
    notesTable.classList.remove("hidden");

    const newBalance = totalBalance - withdrawalAmount;
    localStorage.setItem('totalMoney', newBalance);
    alert(`Withdrawal successful! New balance: ${newBalance}`);

    let tableHtml = '<h3>Withdrawal Summary</h3>';
    tableHtml += `<tr><td>Total Balance :  </td><td>${newBalance}</td></tr>`;
    withdrawalTable.innerHTML = tableHtml;

    document.getElementById('withdrawalAmount').value='';
}
renderNewWithdrawal();