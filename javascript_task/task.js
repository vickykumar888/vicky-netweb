let arr = [
    { id: Math.random(), text: "Walk the dog", textColor: "red" },
    { id: Math.random(), text: "Prepare lunch", textColor: "green" },
    { id: Math.random(), text: "Fix the bugs", textColor: "yellow" },
    { id: Math.random(), text: "Code all day", textColor: "blue" },
    { id: Math.random(), text: "Sleep", textColor: "black" },
  ];
  
  arr.forEach(value => {
      const result = document.createElement('h1');
      result.textContent = value.text;
      result.style.color = value.textColor;
      document.body.appendChild(result);
    });