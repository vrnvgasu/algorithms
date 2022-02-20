function rand() {
  return Math.floor(4 * Math.random());
}

function getCorrectIndex (index, data) {
  if(index >= data.length) {
    index = index - data.length;
    getCorrectIndex(index, data);
  }

  return index;
}

function play(data) {
  const result = [];
  let lastIndex = 0;

  while (data.length > 1) {
    let step = rand();
    lastIndex = getCorrectIndex(lastIndex + step, data);

    let login = data.splice(lastIndex, 1);
    result.push({
      "login": login,
      "step": step,
    });
  }

  return result;
}

const data = ['GottaSaiyan', 'Mountaintrid', 'Rectionom', 'JoshChase', 'DreamLess', 'BlondiePlanet', 'Breakingbing', 'Goldenelox'];

console.log(play(data));