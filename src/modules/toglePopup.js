const toglePopup = () => {
  const popup = document.querySelector(".popup");

  document.body.addEventListener("click", (event) => {
    let target = event.target;

    if (target.matches(".popup-btn")) {
      if (document.documentElement.clientWidth > 768) {
        console.log(1);
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
        console.log(1111);
        popup.style.display = "block";
      }
    }

    if (target.matches(".popup-close")) {
      popup.style.display = "none";
    } else if (!target.matches(".popup-btn")) {
      target = target.closest(".popup-content");
      if (!target) {
        popup.style.display = "none";
      }
    }
  });
};

export default toglePopup;