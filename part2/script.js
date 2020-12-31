'use strict';

const countTimer = (deadline) => {
  const item = document.createElement('pre');
  document.body.append(item);
  let inreval;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    return {
      timeRemaining,
      days,
    };
  };

  const getTextForm = (n) => {
    const days = ["дней", "день", "дня"];
    const n1 = n % 100;
    n %= 10;
    return days[
      n1 > 10 && n1 < 20 ? 0 : n === 1 ? 1 : n > 1 && n < 5 ? 2 : 0
    ];
  };

  const getTimeOfDay = (hours) => {
    const greeting = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
    return greeting[
      hours < 6 ? 0 : hours < 12 ? 1 : hours < 18 ? 2 : 3
    ];
  };

  const getWeekDay = (day) => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[day];
  };



  const updateClock = () => {
    const timer = getTimeRemaining();
    const date = new Date();

    if (timer.timeRemaining <= 0) {
      clearInterval(inreval);
      timer.days = 0;
      console.log(timer.days);
    }

    item.textContent = (`
    ${getTimeOfDay(date.getHours())}
    Сегодня: ${getWeekDay(date.getDay())}
    Текущее время: ${date.toLocaleTimeString("en-US")}
    До нового года осталось ${timer.days} ${getTextForm(timer.days)}`);

  };
  updateClock();
  inreval = setInterval(updateClock, 1000);
};
countTimer(`1 january 2021`);