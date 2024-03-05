const arrayOfObject = [
  { id: Math.random(), text: "Walk the dog", textColor: "red" },
  { id: Math.random(), text: "Prepare lunch", textColor: "green" },
  { id: Math.random(), text: "Fix the bugs", textColor: "yellow" },
  { id: Math.random(), text: "Code all day", textColor: "blue" },
  { id: Math.random(), text: "Sleep", textColor: "black" },
];
const container = document.getElementById('container')
arrayOfObject.map((item) => {
  const data = document.createElement("h1")
  data.innerHTML = item.text
  data.style.color = item.textColor
  // console.log(data.text)
  // console.log("====> color", data.textColor)
  container.appendChild(data)
  return item.text
})

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
  for (let i = 0; i <= 10; i++) {
    tableHtml += `<tr><td>${number}*${i}</td><td>=</td><td>${number * i}</td></tr>`
  }
  tableHtml += "</table>"
  tableNumber.innerHTML = tableHtml
}
