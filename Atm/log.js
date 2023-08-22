const transationDiv = document.getElementById('transationDiv')
function showTransactions(logId) {
    localStorage.setItem('selectedLogId', logId);
    window.location.href = 'logId.html';
}
function renderTransactionLog() {
    transationDiv.innerHTML = '<h2>Transaction Log</h2>';
    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    if (logs.length === 0) {
        transationDiv.innerHTML += '<p>No transaction logs available.</p>';
        return;
    }
    const logList = document.createElement('ul');
    logs.forEach(log => {
        const logItem = document.createElement('li');
        const logLink = document.createElement('a');
        logLink.textContent = `Log ID : ${log.id}`;
        logLink.href = '#';
        logLink.addEventListener('click', () => showTransactions(log.id));
        logItem.appendChild(logLink);
        logList.appendChild(logItem);
    });
    transationDiv.appendChild(logList);
}
renderTransactionLog();








