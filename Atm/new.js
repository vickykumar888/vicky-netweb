const outputDiv = document.getElementById('newOutputDiv')
const confirmBtn = document.getElementById('confirmWithdrawal')
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
    }


    const withdrawalTable = document.getElementById('withdrawalTable');
    let tableHtml = '<h3>Withdrawal Summary</h3>';
    tableHtml += `<tr><td>Total Amount :   </td><td>${withdrawalAmount}</td></tr>`;
    withdrawalTable.innerHTML = tableHtml;


    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    logs.push({
        amount: withdrawalAmount,
        timestamp: new Date().toLocaleString(),
    });
    localStorage.setItem('withdrawalLogs', JSON.stringify(logs));

    let balance = parseInt(localStorage.getItem('money'));
    const totalBalance = parseInt(localStorage.getItem('totalMoney'));
    function withdrawMoney(withdrawalAmount) {
        if (withdrawalAmount > totalBalance) {
            alert("Insufficient balance for withdrawal.");
        } else {
            const newBalance = totalBalance - withdrawalAmount;

            localStorage.setItem('totalBalance', newBalance);

            alert(`Withdrawal successful! New balance: ${newBalance}`);
        }
    }
}

renderNewWithdrawal();