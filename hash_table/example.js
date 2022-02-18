import {log} from "./logger";

function rateLimit(logs) {
  const encountered = new Map();
  const rateLimited = [];

  for (const {message, timestamp} of logs) {
    const {timestamp: previousEncounterTimestamp, last: lastEncounter, occurences} = encountered.get(message) || {};

    // если элемент произошёл впервые, либо сильно позже предыдущего
    if (previousEncounterTimestamp === undefined || previousEncounterTimestamp < timestamp - 5) {
      // по сообщению-ключу положим время встречи этого сообщения и место, где оно лежит
      encountered.set(message, {timestamp, last: rateLimited.length, occurences: 1});

      // и оставляем элемент в массиве
      rateLimited.push({message, timestamp});
      // а если мы такое уже встречали...
    } else {
      // то обновим время последней встречи
      encountered.set(message, {timestamp, last: lastEncounter, occurences: occurences + 1});

      // и обновим последнее подобное сообщение, чтобы отразить, что оно дублируется
      rateLimited[lastEncounter].message = `${message} x${occurences + 1}`;
    }
  }

  return rateLimited;
}


const logs = [
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 0,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 0,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 3,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 5,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 10,
  },
  {
    "message": "Uncaught RangeError: Maximum call stack size exceeded",
    "timestamp": 14,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 15,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 18,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 21,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 22,
  },
];

console.log(rateLimit(logs));
