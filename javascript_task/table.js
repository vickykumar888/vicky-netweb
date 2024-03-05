function generateTable() {
    var number = document.getElementById("numberInput").value;
  
    if (isNaN(number)) {
      alert("Please enter a valid number!");
      return;
    }
  
    // Clear the previous table if any
    document.getElementById("tableContainer").innerHTML = "";
  
    // Generate the multiplication table and append it to the table container
    var tableHTML = "<h2>Multiplication Table of " + number + "</h2><table>";
    for (var i = 1; i <= 10; i++) {
      tableHTML += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
  }