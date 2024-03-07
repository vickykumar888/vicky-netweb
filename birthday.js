let birthdays = [
    {
        name: "Bertie Yates",
        age: "29 ",
        image: "https://www.course-api.com/images/people/person-1.jpeg"
    },
    {
        name: "Hester Hogan ",
        age: "32 ",
        image: "https://www.course-api.com/images/people/person-2.jpeg"
    },
    {
        name: "Larry Littles",
        age: "36",
        image: "https://www.course-api.com/images/people/person-3.jpeg"
    },
    {
        name: "Sean Walsh",
        age: "34 ",
        image: "https://www.course-api.com/images/people/person-4.jpeg"
    },
    {
        name: "Lola Gardner",
        age: "29 ",
        image: "https://www.course-api.com/images/people/person-5.jpeg"
    },

]


function display() {
    birthdays.forEach(birthday => {
        createEvent(birthday);
        //console.log(birthday)
    })
}
display()



function createEvent(birthday) {
    
return(

    `<div>
    
      <section class="person">
         <img src="${birthday.image}" alt="">
          <div class="item">
            <h4>${birthday.name}</h4>
            <p>${birthday.age} years</p>
         </div>
      </section>
    </div>
    `
)
}
const heading = document.getElementById("heading")
function create(){
    let  items = "";
    const root = document.getElementById('root');
    birthdays.forEach(birthday=>{
       items += createEvent(birthday)
    })
    root.innerHTML = items
    heading.innerHTML = `${birthdays.length} Birthdays Today`
}

create()

const button = document.getElementById("btn")
button.addEventListener('click' , (e)=>{
     root.innerHTML = "" 
     heading.innerHTML= `0 Birthdays Today`
})



// const article = document.createElement('article')
// const image = document.createElement('img')
// image.src = birthday.image



// const div = document.getElementById('name')
// const name = document.createElement('h4')
// name.innerHTML = birthday.name

// article.appendChild(image);
// image.appendChild(name);
// div.appendChild(name)
