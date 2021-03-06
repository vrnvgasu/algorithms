function calc(ligas, point) {
  let leftLiga = 0;
  let rightLiga = ligas.length - 1;
  let centerLiga = null;
  let position = null;

  while (leftLiga <= rightLiga) {
    centerLiga = Math.ceil((rightLiga + leftLiga) / 2);

    if (!ligas[centerLiga]) {
      break;
    }
    position = calcIn(ligas[centerLiga], point);

    // Идет вправо в сильную лигу, если можем
    if (position === 1) {
      leftLiga = centerLiga+1;
      continue;
    }

    // Идем влево в слабую лигу, если можем
    if (position === ligas[centerLiga].length) {
      rightLiga = centerLiga-1;
      continue;
    }

    // В противном случае мы уже в нужной лиге
    break;
  }

  return {
    "league": centerLiga+1,
    "placement": position,
  }
}


function calcIn(points, point) {
  let leftPoint = 0;
  let rightPoint = points.length - 1;

  // Если больше крайнего игрока справа, то сразу возвращаем ответ
  if (point > points[rightPoint].leaguePoints) {
    return 1;
  }

  // Если меньше крайнего игрока слева, то сразу возвращаем ответ
  if (point < points[0].leaguePoints) {
    return points.length;
  }

  while (leftPoint < points.length) {
    const centerPoint = Math.ceil((rightPoint + leftPoint) / 2);

    // Если у какого-то игрока данные совпадают, то мы занимаем его место
    if (points[centerPoint].leaguePoints === point) {
      return points.length - centerPoint;
    }

    // Если между двумя игроками, то замещаем игрока из центра
    if (points[centerPoint].leaguePoints < point && points[centerPoint+1].leaguePoints > point) {
      return points.length - centerPoint;
    }

    if (rightPoint < leftPoint) {
      return points.length;
    }

    // Если то, что мы ищем, левее, идем искать в левую часть массива
    if (points[centerPoint].leaguePoints > point) {
      rightPoint = centerPoint - 1;

      // иначе идем в другую сторону
    } else {
      leftPoint = centerPoint + 1;
    }
  }

  return 1;
}


const ligas = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 900
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 1000
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    }
  ]
]

console.log(calc(ligas,200));