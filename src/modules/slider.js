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

export default slider;