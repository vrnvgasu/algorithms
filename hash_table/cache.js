class Cache {
  constructor(size) {
    this.size = size ? size : 100;
    this.map = new Map();
  }

  get(key) {
    return this.map.get(key);
  }

  set(key, value) {
    if (this.map.size === this.size) {
      this.delete(this.map.next().value);
    }

    this.map.set(key, value);
  }

  delete(key) {
    this.map.delete(key);
  }
}

function log(data) {
  const cache = new Cache();
  const log = [];

  for (let item of data) {
    let message = cache.get(item.message)

    if (!message || (item.timestamp - message.lastTimestamp) > 5) {
      item.count = 1;
      item.lastTimestamp = item.timestamp;
      log.push(item);
      item.index = log.length - 1;
        cache.set(item.message, item);

      continue;
    }

    let oldItem = log[message.index];
    oldItem.count++;
    message.lastTimestamp = item.timestamp;
  }

  for ({message, count} of log) {
    if (count > 1) {
      message = message + ` x${count}`;
    }

    console.log(message);
  }
}

const data = [
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

log(data);
