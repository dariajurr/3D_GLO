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

export default toggleMenu;