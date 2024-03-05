let obj = [
    { id: Math.random(), text: "Walk the dog", textColor: "red" },
    { id: Math.random(), text: "Prepare lunch", textColor: "green" },
    { id: Math.random(), text: "Fix the bugs", textColor: "yellow" },
    { id: Math.random(), text: "Code all day", textColor: "blue" },
    { id: Math.random(), text: "Sleep", textColor: "black" },
]
function getObj() {
    obj.forEach(item => {
        //console.log(item);
        let root = document.getElementById('root')
        let heading = document.createElement('h1')
        heading.innerHTML = item.text
        heading.style.color = item.textColor
        root.appendChild(heading);

    })

}
getObj();