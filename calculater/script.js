let displayValue = "";

function ToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculateResult() {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  }


function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
