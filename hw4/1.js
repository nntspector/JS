"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let index = 0; index < 11; index++) {
  if (index === 0) {
    console.log(`${index} - это ноль`);
  } else if (index % 2 === 0) {
    console.log(`${index} - четное число`);
  } else {
    console.log(`${index} - нечетное число`);
  }
}
