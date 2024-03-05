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
