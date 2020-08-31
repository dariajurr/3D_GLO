/* Вывести текущий день и время  на страницу в таком формате

Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней */
'use strict';


function countTimer(deadline) {
  const date = new Date();

  function getTimeRemaining() {

    const dateStop = new Date(deadline).getTime();
    const dateNow = date.getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    return {
      timeRemaining,
      days,
    };
  }

  function getTimeOfDay() {
    const greeting = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
    const hours = date.getHours();
    return greeting[
      hours < 6 ? 0 : hours < 12 ? 1 : hours < 12 ? 2 : 3
    ];
  }

  function getWeekDay() {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
  }

  function updateClock() {
    const timer = getTimeRemaining();


    document.body.textContent = `${getTimeOfDay()} 
    Сегодня: ${getWeekDay()}
    Текущее время: ${date.toLocaleTimeString("en-US")}
    До нового года осталось ${timer.days} дней`;


    if (timer.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
    /*else {
      timerHours.textContent = timeFormat(0);
      timerMinutes.textContent = timeFormat(0);
      timerSeconds.textContent = timeFormat(0);
    }*/
  }
  updateClock();


  /*

  

  function getTimeOfDay(date) {
    const greeting = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
    return greeting[
      date < 6 ? 0 : date < 12 ? 1 : date < 12 ? 2 : 3
    ];
  }

  function getWeekDay(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date];
  }

  document.body.append(`${getTimeOfDay(date.getHours())} 
Сегодня: ${getWeekDay(date.getDay())}
Текущее время: ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} PM
До нового года осталось 175 дней`);

  console.log(date.getHours());
}
*/
}
countTimer('31 december 2020');