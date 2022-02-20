const appointments = [
  {
    title: "Планирование и приоритизация задач",
    start: 10,
    end: 13,
  },
  {
    title: "Обед",
    start: 12,
    end: 13,
  },
  {
    title: "Вопросы с поставками",
    start: 9,
    end: 11,
  },
  {
    title: "Об увольнении Игоря",
    start: 14,
    end: 16,
  },
  {
    title: "Встреча, которую можно было бы заменить одним письмом",
    start: 13,
    end: 15,
  },
  {
    title: "Что подарим Кексу на день рождения?",
    start: 15,
    end: 17,
  },
  {
    title: "О защите от мошенников",
    start: 10,
    end: 11,
  },
];

function prioritize(appointments) {
  const timetable = [];

  // Сохраним здесь время начала самой поздней встречи, чтобы остановить алгоритм, когда уже перейдем это время
  const {end: latestAppointment} = appointments.reduce((currentLatest, next) =>  currentLatest.end < next.end ? next : currentLatest, appointments[0]);
  // Будем хранить здесь время окончания предыдущей встречи
  let startAfter = 0;

  // пока мы ещё можем впихнуть встречу в конец
  while (startAfter < latestAppointment) {
    // Найдем встречу, которая заканчивается максимально рано после последней и вставим её в конец!
    const nextAppointments = appointments.filter(({start}) => start >= startAfter);

    const appointment = nextAppointments
      .reduce((currentShortest, next) =>  currentShortest.end > next.end ? next : currentShortest, nextAppointments[0]);

    startAfter = appointment.end;
    timetable.push(appointment);
  }

  return timetable;
}

console.log(prioritize(appointments));