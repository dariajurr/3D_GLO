
'use strict';
const date2 = new Date();
let year = date2.getFullYear()+1;

function countTimer(deadline) {    
  const item = document.createElement('pre');  
  document.body.append(item);
  
  function getTimeRemaining() {    
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    return {     
      timeRemaining,
      days,
    };
  }

  function getTextForm(n) {
    const days = ["дней", "день", "дня"];
    const n1 = n % 100;
    n %= 10;
    return days[
      n1 > 10 && n1 < 20 ? 0 : n === 1 ? 1 : n > 1 && n < 5 ? 2 : 0
    ];
  };
  
  function getTimeOfDay(hours) {
    const greeting = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];    
    return greeting[
      hours < 6 ? 0 : hours < 12 ? 1 : hours < 18 ? 2 : 3
    ];
  }

  function getWeekDay(day) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[day];
  }

  
  
  function updateClock() {    
    const timer = getTimeRemaining();
    const date = new Date();
      

    item.textContent = (`
    ${getTimeOfDay(date.getHours())}
    Сегодня: ${getWeekDay(date.getDay())}
    Текущее время: ${date.toLocaleTimeString("en-US")}
    До нового года осталось ${timer.days} ${getTextForm(timer.days)}`);
    
    
    if (timer.timeRemaining >= 0) {      
      setTimeout(updateClock, 1000);
    } else {
      setTimeout(updateClock, 1000);
      year+=1;
      countTimer(`31 december ${year}`);
    }

  };
  updateClock();
}
countTimer(`1 january ${year}`);