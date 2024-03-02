"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

let userInput = prompt("Введите целое число до 10000:");
userInput = parseInt(userInput, 10);

if (Number(userInput) && userInput >= 0 && userInput < 10000) {
  const thousands = Math.floor(userInput / 1000);
  const hundreds = Math.floor((userInput % 1000) / 100);
  const tens = Math.floor((userInput % 100) / 10);
  const ones = userInput % 10;

  alert(
    `В числе ${userInput} количество тысяч: ${thousands}, сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`
  );
} else {
  alert("Пожалуйста, введите корректное целое число от 0 до 9999.");
}
