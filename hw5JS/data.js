// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const chuckNorrisApiUrl = "https://api.chucknorris.io/jokes/random";

async function fetchChuckNorrisQuote() {
  try {
    const response = await fetch(chuckNorrisApiUrl);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris quote:", error);
    return null;
  }
}

const chuckNorrisQuote = await fetchChuckNorrisQuote();

export { chuckNorrisQuote };
