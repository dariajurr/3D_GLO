const sendForm = () => {
  const errorMessage = "Что-то пошло не так";
  const loadMessage = "Загрузка...";
  const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
  const statusMessage = document.createElement("div");

  statusMessage.style.cssText = "font-size: 2rem; color: #fff;";

  document.body.addEventListener("input", (event) => {
    if (event.target.matches(".form-phone")) {
      event.target.value = event.target.value.replace(/^(8|\+7)(\d{11})/, "");
    }
    if (event.target.name === "user_name") {
      event.target.value = event.target.value.replace(/[^а-я\s]/gi, "");
    }
    if (event.target.name === "user_message") {
      event.target.value = event.target.value.replace(/[^а-я\s,.!?\-;:]/gi, "");
    }
  });

  document.body.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    form.append(statusMessage);

    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);

    postData(formData)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        console.log(response);
        statusMessage.textContent = successMessage;
        form.reset();
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      });

    setTimeout(() => {
      statusMessage.remove();
    }, 5000);
  });

  const postData = (formData) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData,
    });
  };


};

export default sendForm;