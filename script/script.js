window.addEventListener("DOMContentLoaded", function () {
  'use strict';
  //таймер
  function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    const timeFormat = (n) => n < 10 ? "0" + n : n;


    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const seconds = Math.floor(timeRemaining % 60);
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    }

    function updateClock() {
      const timer = getTimeRemaining();
      timerHours.textContent = timeFormat(timer.hours);
      timerMinutes.textContent = timeFormat(timer.minutes);
      timerSeconds.textContent = timeFormat(timer.seconds);


      if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      } else {
        timerHours.textContent = timeFormat(0);
        timerMinutes.textContent = timeFormat(0);
        timerSeconds.textContent = timeFormat(0);
      }
    }

    updateClock();

  }
  countTimer('3 september 2020');

  //меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  //popup
  const toglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {        
        if (document.documentElement.clientWidth > 768) {       
          let count = -100;       
          let animatemenu = setInterval(() => {
            if (count <=  0) {
              popup.style.display = 'block';
              popup.style.transform  = `translateY(${count++}%)`;
            } else {
              clearInterval(animatemenu);
              count = -100;
            }
          }, 1);     
        } else {        
          popup.style.display = 'block';
        }
        
      });
    });


    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };
  toglePopup();



});