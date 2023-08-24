const outputDiv = document.getElementById('outputDiv')

const data = {
  2000: 60,
  1000: 50,
  500: 100,
  100: 200,
  50: 300,
  20: 400,
  10: 500,
  5: 600,
}

const Data = JSON.stringify(data);
localStorage.setItem('money', Data);
const balance = parseInt(localStorage.getItem('money'));

const sum = Object.entries(data).reduce((acc, [key, value]) => acc + (parseInt(key) * value), 0);
localStorage.setItem('totalMoney', sum);
let storedTotalMoney = parseInt(localStorage.getItem('totalMoney')) || Data;







