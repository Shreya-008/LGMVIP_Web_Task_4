let currentExpression = "";

function clearResult() {
  currentExpression = "";
  updateDisplay();
}

function deleteLast() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  currentExpression += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentExpression.endsWith("+") || currentExpression.endsWith("-") || currentExpression.endsWith("*") || currentExpression.endsWith("/") || currentExpression.endsWith("%")) {
    currentExpression = currentExpression.slice(0, -1);
  }
  currentExpression += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    currentExpression = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById("result");
  display.value = currentExpression;
}
