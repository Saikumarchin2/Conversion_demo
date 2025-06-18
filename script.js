document.addEventListener("DOMContentLoaded", function() {
    const convertForm = document.getElementById("convert");
    const showHistoryBtn = document.getElementById("showHistory");
    const backToMainBtn = document.getElementById("backToMain");

    // Handle Conversion Form Submission
    if (convertForm) {
        convertForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let num1 = document.getElementById('c_code').value.toLowerCase();
            let num2 = parseFloat(document.getElementById('amt').value);
            let rate;
            let status = "successful";
            let dateTime = new Date().toLocaleString();

            if (num1 === 'usd') {
                rate = 86.262;
            } else if (num1 === 'afh') {
                rate = 1.228;
            } else if (num1 === 'inr') {
                rate = 1;
            } else if(num1 ==='euro'){
                rate = 99.21;
            }else {
                document.getElementById('demo').innerText = "Invalid Code!!";
                saveToHistory(num1, num2, "N/A", dateTime, "unsuccessful");
                return;
            }

            let result = rate * num2;
            document.getElementById('demo').innerText = "Converted Amount: " + result;
            saveToHistory(num1, num2, result, dateTime, status);
        });
    }

    // Save to Local Storage for History Page
    function saveToHistory(num1, num2, result, dateTime, status) {
        let history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
        history.push({ currency: num1, amount: num2, result: result, dateTime: dateTime, status: status });
        localStorage.setItem("conversionHistory", JSON.stringify(history));
    }

    // Redirect to History Page
    if (showHistoryBtn) {
        showHistoryBtn.addEventListener("click", function() {
            window.location.href = "history.html";
        });
    }

    // Load History Table
    if (document.getElementById("historyTable")) {
        let history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
        let historyTable = document.getElementById("historyTable").getElementsByTagName('tbody')[0];

        history.forEach(entry => {
            let newRow = historyTable.insertRow();
            newRow.insertCell(0).innerText = entry.currency;
            newRow.insertCell(1).innerText = entry.amount;
            newRow.insertCell(2).innerText = entry.result;
            newRow.insertCell(3).innerText = entry.dateTime;
            newRow.insertCell(4).innerText = entry.status;
        });
    }

    // Back to Main Page
    if (backToMainBtn) {
        backToMainBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
