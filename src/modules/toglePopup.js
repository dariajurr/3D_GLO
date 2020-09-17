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

export default toglePopup;