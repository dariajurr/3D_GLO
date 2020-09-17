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

export default ourTeam;