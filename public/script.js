function addLog(level, message) {
    const logContainer = document.getElementById('log-container');
    
    const logMessage = document.createElement('div');
    logMessage.classList.add('log-message', `log-${level}`);
    logMessage.textContent = message;
    
    logContainer.appendChild(logMessage);
    logContainer.scrollTop = logContainer.scrollHeight;
}

