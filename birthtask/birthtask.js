const data = [
  {
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "Bertie Yates",
    age: "29 years",
  },
  {
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "Hester Hogan",
    age: "32 years",
  },
  {
    image: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "Lary Little",
    age: "36 years",
  },
  {
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "Sean walsh",
    age: "34 years",
  },
  {
    image: "https://www.course-api.com/images/people/person-5.jpeg",
    name: "Lola Gardner",
    age: "29 years",
  },
];
const container = document.getElementById("container");
const main_container = document.getElementById("main_container");
data.forEach((value) => {
  const personContainer = document.createElement("div");
  personContainer.style.display = "flex";
  personContainer.style.alignItems = "center";
  personContainer.style.padding = "15px";

  const userImage = document.createElement("img");
  userImage.src = value.image;
  userImage.style.width = "95px";
  userImage.style.height = "100px";
  userImage.style.objectFit = "cover";
  userImage.style.borderRadius = "50%";
  personContainer.appendChild(userImage);

  const infoContainer = document.createElement("div");
  infoContainer.style.marginLeft = "20px";

  const username = document.createElement("h4");
  username.innerHTML = value.name;
  infoContainer.appendChild(username);
  username.style.fontWeight = "500";
  username.style.fontSize = "1.563rem";
  username.style.margin = "0.5rem";

  const userAge = document.createElement("p");
  userAge.innerHTML = value.age;
  infoContainer.appendChild(userAge);
  userAge.style.color = "#64748b";
  userAge.style.margin = "0";
  userAge.style.marginBlockStart = "1em";
  userAge.style.marginBlockEnd = "1em";
  userAge.style.marginInlineStart = "0px";
  userAge.style.marginInlineEnd = "0px";
  userAge.style.marginLeft = "10px";

  personContainer.appendChild(infoContainer);

  container.appendChild(personContainer);
});
const button = document.createElement("button");
button.innerHTML = "Clear All";
button.style.marginTop = "20px";
button.style.width = "90%";
button.style.padding = "0.375rem 0.75rem";
button.style.background = "#d946ef";
button.style.border = "none";
button.style.margin = "25px";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.addEventListener("click", () => {
  const newtext = document.getElementById("birthday");
  const elementsToClear = document.querySelectorAll(
    "#container > div:not(:last-child)"
  );
  elementsToClear.forEach((element) => {
    element.remove();
  });
  newtext.innerHTML = "0 Birthday Today";
  if(newtext){
    main_container.style.height="100vh"
    container.style.height="200px"
  }
});
container.appendChild(button);
