function sort(array) {
   for (let i = 0; i < array.length; i++) {
     for (let j = i + 1; j < array.length; j++) {
        if (array[i].leaguePoints > array[j].leaguePoints) {
          [array[i], array[j]] = [array[j], array[i]];
        }
     }
   }

  return data;
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