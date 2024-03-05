
const inputNumber = document.getElementById("input")
const tableNumber = document.getElementById("table")

inputNumber.addEventListener("input", () => {
  const number = parseInt(inputNumber.value)

  if (!isNaN(number)) {
    generateTable(number)
  } else {
    tableNumber.innerHTML = ""
  }
})


function generateTable(number) {
  // console.log("==>",number)
  let tableHtml = "<table>"
  for (let i = 1; i <= 13; i++) {
    tableHtml += `<tr><td>${number}*${i}</td><td>=</td><td>${number * i}</td></tr>`
  }
  tableHtml += "</table>"
  tableNumber.innerHTML = tableHtml
}
