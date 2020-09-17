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

export default calc;