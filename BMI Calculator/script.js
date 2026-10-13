const resultEl = document.getElementById("result");
const displayEl = document.getElementById("display-result");
const btnEl = document.getElementById("btn");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBmi() {
  const heightEl = document.getElementById("height").value;
  const weightEl = document.getElementById("weight").value;

  let result = weightEl / (heightEl / 100) ** 2;
  resultEl.value = result.toFixed(2);

  if (result < 18.5) {
    weightConditionEl.innerText = "Under Weight";
  } else if (result > 18.5 && result < 24.9) {
    weightConditionEl.innerText = "Noraml Weight";
  } else if (result > 25 && result < 29.9) {
    weightConditionEl.innerText = "Over Weight";
  } else if (result > 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBmi);
