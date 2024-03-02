// const yourName = prompt("Ваше имя", "");
// if (yourName === null) {
//     // Пользователь отменил ввод
//     alert("Ввод отменен");
// } else {
//     // Пользователь ввел (корректные) данные
//     alert(`Добро пожаловать на сайт,  ${yourName}`);
// }

const a = Number(prompt("Введите число"));
if (Number.isNaN(a)) {
  console.log("Вы не ввели число");
} else if (a > 5) {
  console.log("Число больше 5");
} else if (a < 5) {
  console.log("Число меньше 5");
} else if (a === 5) {
  console.log("Число равно 5");
}
//console.log(Math.min(test1, test2) ? test1 : test2);

//const userNum = prompt("Введите число", "");
if (userNum > 0 && userNum < 15) {
  alert(`"Спасибо за число" ${userNum}`);
} else {
  alert(`"А вы, я смотрю, хулиганите!" ${userNum} "- неверное значение."`);
}
