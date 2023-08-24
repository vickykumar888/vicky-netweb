
const selectedLogId = localStorage.getItem('selectedLogId');
const selectedNotesCountJSON = localStorage.getItem('selectedNotesCount'); 
const selectedNotesCount = selectedNotesCountJSON ? JSON.parse(selectedNotesCountJSON) : null;
const selectedWithdrawalAmount = localStorage.getItem('selectedAmountWithdraw');
const selectedTimeStam = localStorage.getItem('selectedTimeStamp')
const logIdDiv = document.getElementById('logIdDiv');

if (selectedLogId && selectedWithdrawalAmount && selectedTimeStam && selectedNotesCount) {
    logIdDiv.innerHTML = `
        <h2>Log Details</h2>
        <p>Log ID: ${selectedLogId}</p>
        <p>Amount Withdrawal: ${selectedWithdrawalAmount}</p>
        <p>Timestamp: ${selectedTimeStam}</p>
        <p> NoteCounts: ${selectedNotesCount}</p>
          `;
} else {
    logIdDiv.innerHTML = '<p>No log details available.</p>';
}

