
const logIdDiv = document.getElementById('logIdDiv');

const selectedLogId = localStorage.getItem('selectedLogId');
// const selectedNotesCount = JSON.parse(localStorage.getItem('updatedMoney')); 
const selectedWithdrawalAmount = localStorage.getItem('selectedAmountWithdraw');
const selectedTimeStam = localStorage.getItem('selectedTimeStamp');
const updatedOriginalNotesString = localStorage.getItem('updatedOriginalNotes');
const updatedOriginalNotes = JSON.parse(updatedOriginalNotesString);
//console.log("peter",updatedOriginalNotes)

if (selectedLogId && selectedWithdrawalAmount && selectedTimeStam && updatedOriginalNotes) {
    logIdDiv.innerHTML = `
        <h2>Log Details</h2>
        <button onclick="history.back()">Go Back</button>

        <p>Log ID: ${selectedLogId}</p>
        <p>Amount Withdrawal: ${selectedWithdrawalAmount}</p>
        <p>Timestamp: ${selectedTimeStam}</p>
        
        <table>
        <tr>
            <th>Notes</th>
            <th>Quantity</th>
        </tr>
        ${Object.keys(updatedOriginalNotes).map(key =>
        `<tr>
                <td>${key}</td>
                <td>${updatedOriginalNotes[key]}</td>
            </tr>`
    ).join('')}
    </table>
   
    `;
} else {
    logIdDiv.innerHTML = '<p>No log details available.</p>';
}
