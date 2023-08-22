const logTableBody = document.getElementById('logTableBody');
const selectedLogId = localStorage.getItem('selectedLogId');
const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
const selectedLog = logs.find(log => log.id === selectedLogId);

if (selectedLog) {
    const logDetailsHTML = `
        <tr><th>Log ID</th><td>${selectedLog.id}</td></tr>
        <tr><th>Amount Withdrawn</th><td>$${selectedLog.amount}</td></tr>
        <tr><th>Withdrawal Date</th><td>${selectedLog.date}</td></tr>
        <tr><th>Note Count</th><td>${selectedLog.noteCount}</td></tr>
    `;
    logTableBody.innerHTML = logDetailsHTML;
} else {
    logTableBody.innerHTML = '<tr><td colspan="2">Selected log not found.</td></tr>';
}
