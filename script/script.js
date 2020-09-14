window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //таймер
  let interval;
  const countTimer = (deadline) => {
    const timerHours = document.querySelector("#timer-hours");
    const timerMinutes = document.querySelector("#timer-minutes");
    const timerSeconds = document.querySelector("#timer-seconds");
    const timeFormat = (n) => (n < 10 ? "0" + n : n);

    const getTimeRemaining = () => {
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
    };

    const updateClock = () => {
      const timer = getTimeRemaining();
      timerHours.textContent = timeFormat(timer.hours);
      timerMinutes.textContent = timeFormat(timer.minutes);
      timerSeconds.textContent = timeFormat(timer.seconds);

      if (timer.timeRemaining < 0) {
        timerHours.textContent = timeFormat(0);
        timerMinutes.textContent = timeFormat(0);
        timerSeconds.textContent = timeFormat(0);
        clearInterval(interval);
      }
    };
    updateClock();
    interval = setInterval(updateClock, 1000);
  };
  countTimer("6 september 2020");

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
    const popupClose = document.querySelector(".popup-close");

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

    popup.addEventListener("click", (event) => {
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

  //слайдер
  const slider = () => {
    const slider = document.querySelector(".portfolio-content");
    const slide = document.querySelectorAll(".portfolio-item");
    const dots = document.querySelector(".portfolio-dots");

    for (let i = 0; i < slide.length; i++) {
      const liDot = document.createElement("li");
      liDot.classList.add("dot");
      if (i === 0) {
        liDot.classList.add("dot-active");
      }
      dots.append(liDot);
    }

    const dot = document.querySelectorAll(".dot");
    let carrentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autuPlaySlide = () => {
      prevSlide(slide, carrentSlide, "portfolio-item-active");
      prevSlide(dot, carrentSlide, "dot-active");
      carrentSlide++;
      if (carrentSlide >= slide.length) {
        carrentSlide = 0;
      }
      nextSlide(slide, carrentSlide, "portfolio-item-active");
      nextSlide(dot, carrentSlide, "dot-active");
    };

    const startSlide = (time = 1500) => {
      interval = setInterval(autuPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }
      prevSlide(slide, carrentSlide, "portfolio-item-active");
      prevSlide(dot, carrentSlide, "dot-active");
      if (target.matches("#arrow-right")) {
        carrentSlide++;
      } else if (target.matches("#arrow-left")) {
        carrentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            carrentSlide = index;
          }
        });
      }
      if (carrentSlide >= slide.length) {
        carrentSlide = 0;
      }
      if (carrentSlide < 0) {
        carrentSlide = slide.length - 1;
      }
      nextSlide(slide, carrentSlide, "portfolio-item-active");
      nextSlide(dot, carrentSlide, "dot-active");
    });

    slider.addEventListener("mouseover", (event) => {
      if (event.target.matches(".portfolio-btn, .dot")) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      if (event.target.matches(".portfolio-btn, .dot")) {
        startSlide();
      }
    });
    startSlide(1500);
  };

  slider();

  //Наша команда
  const ourTeam = () => {
    const command = document.querySelector(".command");
    let originalSrc;

    command.addEventListener("mouseover", (event) => {
      if (event.target.matches(".command__photo")) {
        originalSrc = event.target.src;
        event.target.src = event.target.dataset.img;
      }
    });
    command.addEventListener("mouseout", (event) => {
      if (event.target.matches(".command__photo")) {
        event.target.src = originalSrc;
      }
    });
  };
  ourTeam();

  //калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const totalValue = document.getElementById("total");

    const countSum = () => {
      let total = 0;
      let calcValue = 1;
      let dayValue = 1;
      let count = 0;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        calcValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * calcValue * dayValue;
      }

      const changeNumbers = () => {
        if (total > count) {
          count += 100;
          totalValue.textContent = count;
        } else {
          clearInterval(interval);
        }
      };
      let interval = setInterval(changeNumbers, 1);
    };

    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      if (target.matches("select") || target.matches("input")) {
        countSum();
      }
    });

    calcBlock.addEventListener("input", (event) => {
      let target = event.target;
      if (!target.matches(".calc-type")) {
        target.value = target.value.replace(/\D/g, "");
      }
    });
  };
  calc(100);

  //sense-ajax-form
  const sendForm = () => {
    const errorMessage = "Что-то пошло не так";
    const loadMessage = "Загрузка...";
    const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
    const statusMessage = document.createElement("div");

    statusMessage.style.cssText = "font-size: 2rem; color: #fff;";

    document.body.addEventListener("input", (event) => {
      if (event.target.matches(".form-phone")) {
        event.target.value = event.target.value.replace(/^(8|\+7)(\d{11})/, '');
      }
      if (event.target.name === "user_name" || event.target.name === "user_message") {
        event.target.value = event.target.value.replace(/[^а-я\s]/i, "");
      }
    });

    document.body.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      form.append(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(
        body,
        () => {
          statusMessage.textContent = successMessage;
          form.reset();
        },
        (error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        }
      );
    });

    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }
      });
      request.open("POST", "./server.php");
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(body));
    };
  };
  sendForm();
});