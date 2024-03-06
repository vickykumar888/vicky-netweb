let birthdayCount = 5;

const birthdays = [
    { name: 'Bertie Yates', age: 29,birthdayImgUrl:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: 'Hester Hogan', age: 32 , birthdayImgUrl:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { name: 'Larry Little', age: 36 ,birthdayImgUrl:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { name: 'Sean Walsh', age: 34 ,birthdayImgUrl:"https://images.pexels.com/photos/11810557/pexels-photo-11810557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { name: 'Lola Gardner', age: 29 ,birthdayImgUrl:"https://images.pexels.com/photos/3185944/pexels-photo-3185944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];

function generateBirthdayHTML(birthday) {
    return `
        <div class="item-content">
        <img src="${birthday.birthdayImgUrl}" alt="">
        <div class="item">
            <h3>${birthday.name}</h3>
            <h5>${birthday.age} years</h5>
        </div>
        </div>
    `;
}



function generateBirthdays() {
    const container = document.getElementById('container');
    // container.innerHTML = '';
    let content = '';
    birthdays.forEach(birthday => {
        content += generateBirthdayHTML(birthday);
    });
    container.innerHTML = content;
}

function updateBirthdayCont() {
    let heading = document.querySelector(".heading");
    if (birthdayCount === 1) {
        heading.textContent = `${birthdayCount} birthday today`;
    } else {
        heading.textContent = `${birthdayCount} birthdays today`;
    }
}

window.onload = function () {
    generateBirthdays();
    updateBirthdayCont();
};

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('container').innerHTML = '';
    birthdayCount = 0;
    updateBirthdayCont();
});
