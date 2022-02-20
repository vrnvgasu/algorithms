/**
 * Через речку проложена дорога из камней, а на каждом камне написана цифра — на сколько камней вперёд максимально можно прыгнуть с него.
 * За каждое прохождение игры, если игрок потратил минимально возможное количество ходов, даётся небольшое количество внутриигровой валюты.
 *
 * Рразработайте функцию, которая принимает в себя массив из цифр на камнях и возвращает минимальное количество шагов для прохождения.
 */

const data = [2, 5, 7, 3, 1, 2, 1, 2, 6, 2, 1];
// const data = [2,3,1,1,4];

function count(data) {
  let lastIndex = data.length;
  let steps = 0;

  while (lastIndex > 0) {
    let newIndex = lastIndex - 1;

    for (let i = lastIndex - 1; i >= 0; i--) {
      if (i + data[i] >= lastIndex) {
        newIndex = i;
      }
    }

    lastIndex = newIndex;
    steps++;

    console.log({
      value: data[lastIndex],
      index: lastIndex,
      step: steps,
    })
  }

  return steps;
}

console.log(count, count(data));