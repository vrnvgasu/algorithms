function sort(data, left, right) {
   left = left ? left : 0;
   right = right ? right : data.length - 1;

  // TODO перебираем массив по полам
  let middleInd = sortByBasic(data, left, right);

  if (left < middleInd - 1) {
    sort(data, left, middleInd - 1);
  }

  if (middleInd < right) {
    sort(data, middleInd, right);
  }

  return data;
}

function sortByBasic(data, left, right) {
  let middleInd = Math.floor((right - left) / 2) + left;
  let middle = data[middleInd].leaguePoints;

  while (left < right) {
    // не трогаем элемент слева
    while (data[left].leaguePoints < middle) {
      left++;
    }

    // не трогаем элемент справа
    while (data[right].leaguePoints > middle) {
      right--;
    }

    if (left <= right) {
      [data[left], data[right]] = [data[right], data[left]];
      left++;
      right--;
    }
  }

  return left;
}

const data = [
  {
    "login": "DreamLess",
    "leaguePoints": 956
  },
  {
    "login": "cavernous",
    "leaguePoints": 1056
  },
  {
    "login": "SaiyanBroadway",
    "leaguePoints": 1432
  },
  {
    "login": "BlondiePlanet",
    "leaguePoints": 1045
  },
  {
    "login": "Mountaintrid",
    "leaguePoints": 1130
  },
  {
    "login": "cathead",
    "leaguePoints": 930
  },
  {
    "login": "rstrazir",
    "leaguePoints": 356
  },
  {
    "login": "stypeano",
    "leaguePoints": 4
  },
  {
    "login": "CzarStories",
    "leaguePoints": 568
  },
  {
    "login": "ConspiracyLil",
    "leaguePoints": 18
  },
  {
    "login": "GottaSaiyan",
    "leaguePoints": 931
  },
  {
    "login": "Goldenelox",
    "leaguePoints": 932
  },
  {
    "login": "Breakingbing",
    "leaguePoints": 64
  },
  {
    "login": "Rectionom",
    "leaguePoints": 42
  },
  {
    "login": "BoostScooby",
    "leaguePoints": 1476
  },
  {
    "login": "JoshChase",
    "leaguePoints": 931
  }
];

console.log(sort(data));