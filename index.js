// Array of birthday objects
const birthdays = [
  {
    name: "Bertie Yates",
    age: 29,
    birthdayImgUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Hester Hogan",
    age: 32,
    birthdayImgUrl:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Larry Little",
    age: 36,
    birthdayImgUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sean Walsh",
    age: 34,
    birthdayImgUrl:
      "https://images.pexels.com/photos/11810557/pexels-photo-11810557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Lola Gardner",
    age: 29,
    birthdayImgUrl:
      "https://images.pexels.com/photos/3185944/pexels-photo-3185944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Function to generate HTML for a single birthday item
function generateBirthdayHTML(birthday) {
  return `
  <div class="birthday-item">
    <img src="${birthday.birthdayImgUrl}" class="image"/>&nbsp;&nbsp;&nbsp;
    <div>
    <p class="birthday_list">${birthday.name}</p>
    <p class="years">${birthday.age} years</p>
    </div>
    `;
}

// Function to display birthdays
function displayBirthdays() {
  const birthdayListContainer = document.getElementById("birthdayList");
  birthdayListContainer.innerHTML = "";
  birthdays.map((birthday) => {
    birthdayListContainer.innerHTML += generateBirthdayHTML(birthday);
  });
}

// Function to clear all birthdays
function clearAllBirthdays() {
  const birthdayListContainer = document.getElementById("birthdayList");
  birthdayListContainer.innerHTML = "";
  document.getElementById("birthdayCount").textContent =
    "0 Birthdays Today";
}

// Event listener for Clear All button
document
  .getElementById("clearAllButton")
  .addEventListener("click", clearAllBirthdays);

// Display initial birthdays
displayBirthdays();