const transationDiv = document.getElementById('transationDiv')
function showTransactions(logId) {

    const logs = JSON.parse(localStorage.getItem('withdrawalLogs')) || [];
    const selectedLog = logs.find(log => log.id === logId);

    if (selectedLog) {
        alert(`Log ID: ${selectedLog.id}\nAmount: ${selectedLog.amount}\nTimestamp: ${selectedLog.timestamp}`);
    }
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
        logLink.href = `#`;
        logLink.textContent = `Log ID : ${log.id}`;
        logLink.addEventListener('click', () => showTransactions(log.id));
        logItem.appendChild(logLink);
        logList.appendChild(logItem);
    });

    transationDiv.appendChild(logList);
}

renderTransactionLog();








