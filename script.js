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

function generateHeading(count) {
    const heading = document.createElement('h1');
    heading.classList.add('header');
    
    heading.textContent = `${count} Birthday today`;
    return heading;
}

function generateClearAllButton() {
    const clearnBtn = document.createElement('div');
    clearnBtn.id = 'clearButton'; 
    clearnBtn.textContent = "Clear all"; 
    return clearnBtn;
}



    
  function generateBirthdays() {
    const container = document.getElementById('container');

    let content = '';
    birthdays.forEach(birthday => {
        content += generateBirthdayHTML(birthday);
    });
    container.innerHTML += content;
    container.insertAdjacentElement('afterbegin', generateHeading(container.childElementCount));

    container.appendChild(generateClearAllButton())

}



window.onload = function () {
    generateBirthdays();
};

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'clearButton') {
        let container = document.getElementById('container');
        container.innerHTML = "";
        container.insertAdjacentElement('afterbegin', generateHeading(container.childElementCount));
        container.appendChild(generateClearAllButton())

    }
});
