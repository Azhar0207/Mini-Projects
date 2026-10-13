const convetBtnEL = document.getElementById("convertBtn");

convetBtnEL.addEventListener("click", () => {
  convertNumber();
});

function convertNumber() {
  const selcetFirst = document.getElementById("selcetOne");
  let selectOptionOne = document.getElementById("selectOne").value;
  let selectOptionTwo = document.getElementById("selectTwo").value;
  let inputOneEls = document.getElementById("inputOne").value;
  let inputTwoEl = document.getElementById("inputTwo");
  let resultDisplayOne = document.getElementById("weightConevrtedFrom");
  let resultDisplaytwo = document.getElementById("weightConevrtedTo");

  let inputOneEl = Number(inputOneEls);

  if (inputOneEl != inputOneEl) {
    alert("Please enter numbers only");
  } else if ((selectOptionOne == "kg") & (selectOptionTwo == "Pounds")) {
    let result = (inputOneEl * 2.20462).toFixed(2);
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "kg") & (selectOptionTwo == "Gram")) {
    let result = inputOneEl * 1000;
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "kg") & (selectOptionTwo == "kg")) {
    inputTwoEl.value = inputOneEl;
  } else if ((selectOptionOne == "Pounds") & (selectOptionTwo == "Gram")) {
    let result = (inputOneEl * 453.6).toFixed(2);
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "Pounds") & (selectOptionTwo == "kg")) {
    let result = (inputOneEl / 2.205).toFixed(2);
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "Pounds") & (selectOptionTwo == "Pounds")) {
    inputTwoEl.value = inputOneEl;
  } else if ((selectOptionOne == "Gram") & (selectOptionTwo == "kg")) {
    let result = (inputOneEl / 1000).toFixed(3);
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "Gram") & (selectOptionTwo == "Pounds")) {
    let result = (inputOneEl / 453.6).toFixed(3);
    inputTwoEl.value = result;
  } else if ((selectOptionOne == "Gram") & (selectOptionTwo == "Gram")) {
    inputTwoEl.value = inputOneEl;
  }

  resultDisplayOne.innerText = inputOneEl + " " + selectOptionOne;
  resultDisplaytwo.innerText = inputTwoEl.value + " " + selectOptionTwo;
}
