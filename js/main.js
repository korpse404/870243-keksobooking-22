

// 1) Начинать нужно всегда с результата - что мы хотим получить в данном конкретном задании!
// 2) С помощью чего мы должны прийти к этому результату (способ, метод, инструменты)
// 3) Сделать список параметров задачи и указать, какие можно задать (постоянные), а какие нужно вычислить (переменные)
// Написать вопрос и как можно подробнее изложить проблему, но не отправлять.

// Источник https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (!Number.isInteger(min)) {
    throw new('Min not integer');
  }

  if (!Number.isInteger(max)) {
    throw new('Max not integer');
  }

  if (max <= min) {
    throw new('Number is lesser or equal');
  }

  if (min < 0 || max < 0) {
    throw new('Number must be larger than zero');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInRange(min, max, n) {

  if (max <= min) {
    throw new('Number is lesser or equal');
  }

  if (min < 0 || max < 0) {
    throw new('Number must be larger than zero');
  }

  return (Math.random() * (max - min) + min).toFixed(n);
}

getRandomInRange();