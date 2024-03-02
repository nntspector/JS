/* . Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
 вывести в консоль строку:
"Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
*/

// function privetGondon(name, surname, age) {
//   console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}`);
// }

// privetGondon("Сергей", "Иванов", 24);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// function number(num) {
//   num = num ^ 2;
//   return num;
// }
// number(2);

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function posneg(num) {
//   if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   } else {
//     null
// }

// posneg("fdfasfas");

function greet(firstName) {
  const date = new Date();
  const hours = date.getHours();

  let greeting;

  if (hours < 12) {
    greeting = "Доброе утро";
  } else if (hours < 18) {
    greeting = "Добрый день";
  } else if (hours < 22) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }

  return `${greeting}, ${firstName}.`;
}
