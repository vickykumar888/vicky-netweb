
const selectedLogId = localStorage.getItem('selectedLogId');
const selectedNotesCount = localStorage.getItem('originalNotes');   
const selectedWithdrawalAmount = localStorage.getItem('selectedAmountWithdraw');
const selectedTimeStam = localStorage.getItem('selectedTimeStamp')
const logIdDiv = document.getElementById('logIdDiv');
const notesTableDiv = document.getElementById('notesTableDiv');
const table = document.getElementById('data-table');

const data = JSON.parse(selectedNotesCount)
        for (const key in data) {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell2.textContent = data[key];
            cell1.textContent = key;
        }
if (selectedLogId && selectedWithdrawalAmount && selectedTimeStam ) {
    logIdDiv.innerHTML = `
        <h2>Log Details</h2>
        <p>Log ID: ${selectedLogId}</p>
        <p>Amount Withdrawal: ${selectedWithdrawalAmount}</p>
        <p>Timestamp: ${selectedTimeStam}</p>
      
    `;
} else {   
    logIdDiv.innerHTML = '<p>No log details available.</p>';
}

