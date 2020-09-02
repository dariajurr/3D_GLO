window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //таймер
  function countTimer(deadline) {
    const timerHours = document.querySelector("#timer-hours");
    const timerMinutes = document.querySelector("#timer-minutes");
    const timerSeconds = document.querySelector("#timer-seconds");
    const timeFormat = (n) => (n < 10 ? "0" + n : n);

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
        seconds,
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
  countTimer("3 september 2020");

  //меню
  const toggleMenu = () => {
    const menu = document.querySelector("menu");
    const container = document.querySelector(".container");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    container.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".menu");
      if (target) {
        handlerMenu();
      }
    });

    menu.addEventListener("click", (event) => {
      let target = event.target;

      if (target.classList.contains("close-btn") || target.tagName === "A") {
        handlerMenu();
      }
    });
  };

  toggleMenu();

  //popup
  const toglePopup = () => {
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelectorAll(".popup-btn");

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        if (document.documentElement.clientWidth > 768) {
          let count = -100;
          let animatemenu = setInterval(() => {
            if (count <= 0) {
              popup.style.display = "block";
              popup.style.transform = `translateY(${count++}%)`;
            } else {
              clearInterval(animatemenu);
              count = -100;
            }
          }, 1);
        } else {
          popup.style.display = "block";
        }
      });
    });

    popup.addEventListener("click", () => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          popup.style.display = "none";
        }
      }
    });
  };
  toglePopup();

  //табы
  const tabs = () => {
    const tabHeader = document.querySelector(".service-header");
    const tab = tabHeader.querySelectorAll(".service-header-tab");
    const tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };

    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();
});
